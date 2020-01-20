
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';

const name = 'ActiveWidgets.Examples.Viewer';

export default {
    input: 'viewer/index.js',
    output: [
        { file: pkg.module, format: 'es' },
        { file: pkg.main, format: 'umd', name }
    ],
    plugins: [
        svelte(),
        resolve()
    ]
};