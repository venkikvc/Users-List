const { override, addWebpackModuleRule, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackModuleRule({
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  }),
  addWebpackAlias({
    '@components': path.resolve(__dirname, 'src/components'),
    '@images': path.resolve(__dirname, 'src/assets/images')
  })
);
