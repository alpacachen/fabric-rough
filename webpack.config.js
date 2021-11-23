const path = require('path')
console.log(process.env.NODE_ENV)
module.exports = (env, options) => {
    console.log(env, options, 4455)
    return {
        mode: options.mode,
        entry: './src/index.ts',
        resolve: {
            extensions: ['.ts', '.js']
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.js',
            libraryTarget: 'umd'
        },
        externals: options.mode === 'production' ? {
            fabric: 'fabric',
            rough: 'roughjs'
        } : {},
        module: {
            rules: [
                { test: /\.ts$/, use: 'ts-loader' },
            ],
        },
        devServer: {
            static: {
                directory: path.join(__dirname, 'public'),
            },
            compress: true,
            port: 9000,
        },
    }
};
