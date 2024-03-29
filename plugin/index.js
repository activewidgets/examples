let glob = require('glob'),
    {resolve} = require('path'),
    {readFileSync, existsSync} = require('fs'),
    {normalizePath} = require('vite');


function angular_jit(path){
    
    let cfg = JSON.parse(readFileSync(resolve(path, '../angular.json'), 'utf-8')),
        name = cfg.defaultProject,
        project = cfg.projects[name],
        options = project.architect.build.options;

    return `
        // Vite Angular JIT
        import "./${options.polyfills}"; 
        import "@angular/compiler"; 
        import "./${options.main}"; 
        ${options.styles.map(s => `import "./${s}";`).join(' ')}
    `;    
}


function page(path, pkg){

    if (existsSync(path)){
        return;
    }

    if (/^ng /.test(pkg.scripts.start)){
        return readFileSync(resolve(path, '../src/index.html'), 'utf-8').replace('</body>', `
            <script src="./_vite_ng.js" type="module"></script>
            </body>
        `);
    }

    if (/^react-scripts /.test(pkg.scripts.start)){
        return readFileSync(resolve(path, '../public/index.html'), 'utf-8').replace('</body>', `
            <script src="./src/index.js" type="module"></script>
            </body>
        `);
    }
}


function getIndexPage(root, items, url){

    let path;

    if (url.endsWith('index.html')){
        path = normalizePath(resolve(root + url));

    } 
    else if (url.endsWith('/')) {
        path = normalizePath(resolve(root + url + 'index.html'));
    }

    if (!path || !items[path]){
        return;
    }

    return page(path, items[path]);
}


module.exports = function(pattern = '*', loader){

    let items = {},
        root = '.',
        filter = /\.jsx$|\.tsx$|\.ts$|[\\\/]src[\\\/].*\.js$/;
    
    let esBuildPlugin = {
        name: 'load-js-as-jsx',
        setup(build) {
            build.onLoad({filter}, ({path}) => ({loader, contents: readFileSync(path, 'utf-8')}));
        }
    };
    
    return {
        name: 'examples',

        configureServer(server) {
            server.middlewares.use('/', async (req, res, next) => {
                let html = getIndexPage(root, items, req.url);
                if (html){
                    res.end(await server.transformIndexHtml(req.url, html));
                }
                else {
                    next();
                }
            });
        },

        config(cfg){
            if (cfg.root){
                root = cfg.root;
            }

            if (loader){

                console.log('loader: ' + loader);

                cfg.esbuild = {
                    loader,
                    include: filter,
                    exclude: /node_modules/
                };
            
                cfg.optimizeDeps = cfg.optimizeDeps || {};
                
                cfg.optimizeDeps.esbuildOptions = {
                    plugins: [esBuildPlugin]
                };
            }
        },

        options(cfg){

            cfg.input = {
                root: normalizePath(resolve(root, 'index.html'))
            };

            glob.sync(`${root}/${pattern}/package.json`).forEach(path => {
                if (!path.includes('node_modules')){
                    let pkg = JSON.parse(readFileSync(path, 'utf-8')),
                        id = normalizePath(resolve(path, '../index.html'));
                    cfg.input[pkg.name] = id;
                    items[id] = pkg;
                }
            });
        },

        resolveId(id, importer){
            if (items[id]){
                return id;
            }
            if (id.endsWith('_vite_ng.js')){
                if (id.startsWith('/')){
                    return normalizePath(resolve(root) + id);  
                }
                else if (id === './_vite_ng.js'){
                    return normalizePath(resolve(importer, '../_vite_ng.js'));
                }
            }
            if (id === '@angular/compiler' && importer.endsWith('_vite_ng.js')){
                return require.resolve(id, {paths: [importer]});
            }
        },

        load(id){
            if (items[id]){
                return page(id, items[id]);
            }
            if (id.endsWith('_vite_ng.js')){
                return angular_jit(id);
            }
        }
    }
}

