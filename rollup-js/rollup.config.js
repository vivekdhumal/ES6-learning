import buble from 'rollup-plugin-buble';

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/main.js',
        format: 'es'
    },
    plugins: [ buble() ]
}