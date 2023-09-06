const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: {
    'button':{
      import:'./src/components/button.ts',
      dependOn:'shared'
    },
    'form':{
      import:'./src/components/form.ts',
      dependOn:'shared'
    },
    'input':{
      import:'./src/components/input.ts',
      dependOn:'shared'
    },
    'element':{
      import:'./src/components/demoElement.ts',
      dependOn:'shared'
    },
    shared:['lit','lit/decorators.js']
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),

  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'WC', 
        template: 'src/index.html',
        filename:'dist/index.html',
        inject:false

    }) 
   ],
   devServer: {
    static: path.join(__dirname, "src"),
    compress: true,
    port: 4000,
  },
};


// {
//   button:{
//     import:()=>'./src/components/button.ts',
//     dependOn:'shared'
//   },
//   form:{
//     import:()=>'./src/components/form.ts',
//     dependOn:'shared'
//   },
//   input:{
//     import:()=>'./src/components/input.ts',
//     dependOn:'shared'
//   },
//   demoElement:{
//     import:()=>'./src/components/demoElement.ts',
//     dependOn:'shared'
//   },
//   shared:['lit','lit/decorators.js']
// },