const nodeExternals = require('webpack-node-externals');
const path          = require('path');
module.exports      = {
    entry           : [
        './src/index.ts'
    ],
    mode            : 'development',
    target          : 'node',
    externalsPresets: {node: true},
    externals       : [nodeExternals()],
    module          : {
        rules: [
            {
                test       : /\.tsx?$/,
                use        : [
                    {
                        loader : 'ts-loader',
                        options: {
                            configFile: 'tsconfig.json',
                        },
                    },
                ],
                exclude    : /node_modules/,
                sideEffects: true,
            },
        ],
    },
    resolve         : {
        extensions: ['.js', '.ts', '.tsx'],
        modules   : [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, './')
        ]
    },
    output          : {
        filename    : 'server.js',
        path        : path.resolve(__dirname, 'build/server'),
        hashFunction: 'xxhash64'
    },
    devtool         : 'source-map',
};