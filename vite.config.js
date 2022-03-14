import {resolve} from 'path';
import markdown from 'rollup-plugin-md';
import svelte from 'rollup-plugin-svelte';

export default {
    root: 'examples',
    build: {
        outDir: '../out',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve('examples/index.html'),
                columns: resolve('examples/columns/index.html'),
                demo: resolve('examples/demo/index.html'),
                events: resolve('examples/events/index.html'),
                hello: resolve('examples/hello-world/index.html')
            }    
        }
    },
    plugins: [
        markdown(),
        svelte()
    ],
    resolve: {
        alias: {
            '@activewidgets/examples/shared': resolve('./shared/index.js'),
            '@activewidgets/examples/data': resolve('./data'),
            '@activewidgets/examples/flags': resolve('./flags'),
            '@activewidgets/examples': resolve('./viewer/index.js')
        }    
    }
}