
import svelte from 'rollup-plugin-svelte';
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import markdown from 'rollup-plugin-md';
import pkg from './package.json';

const name = 'ActiveWidgets.Viewer';

let globals = {
    '@activewidgets/options': 'ActiveWidgets.Options'
};

export default {
    input: 'viewer/index.js',
    output: [
        { file: pkg.module, format: 'es' },
        { file: pkg.main, format: 'umd', globals, name, compact: true }
    ],
    external: Object.keys(globals),
    plugins: [
        svelte({
            emitCss: false
        }),
        markdown(),
        alias({
            entries: {
                '@activewidgets/examples/data': './data/index.module.js'
            }
        }),
        resolve(),
        babel({
            babelrc: false,
            babelHelpers: 'bundled',
            extensions: ['.js', '.mjs', '.html', '.svelte', '.md'],
            include: ['viewer/**', 'data/**', 'shared/**', 'node_modules/svelte/**'],
            presets: [["@babel/env", {targets: {ie: 11}}]]
        }),
    ]
};