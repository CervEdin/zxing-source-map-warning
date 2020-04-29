module.exports = {
    entry: './main.ts',
    output: {
	filename: './bundle.js',
	},
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                loader: "source-map-loader",
            }, {
                test: /\.tsx?$/,
                use: ["ts-loader"],
                exclude: /node_modules/
            }
        ]
    }};
