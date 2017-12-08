import babel from 'rollup-plugin-babel';

export default {
    name: 'RollupWatchIssue',
    input: 'src/index.js',
    output: {
        file: 'dist/rollup-watch-issue.es.js',
        format: 'es'
    },
    external: [],
    plugins: [
        babel({
            babelrc: false,
            presets: [
                ['env', { modules: false }]
            ],
            plugins: [
                'external-helpers'
            ],
            exclude: 'node_modules/**'
        })
    ]
};
