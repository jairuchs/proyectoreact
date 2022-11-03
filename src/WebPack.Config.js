module.exports = {
    module: {
        rules: [
            {
                test: /\.(le|sc|sa|c)ss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCss.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                    'style-loader',
                    'postcss-loader',
                    'sass-loader',
                    'less-loader'
                ],

            }
        ]
    }
}