
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const name = 'ActiveWidgets.Viewer';

export default {
    input: 'viewer/index.js',
    output: [
        { file: pkg.module, format: 'es' },
        { file: pkg.main, format: 'umd', name }
    ],
    plugins: [
        svelte(),
        resolve(),
        babel({
            babelrc: false,
            extensions: ['.js', '.mjs', '.html', '.svelte'],
            include: ['viewer/**', 'node_modules/svelte/**'],
            presets: [["@babel/env", {targets: {ie: 11}}]]
        }),
    ]
};