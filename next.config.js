const path=require('path')
module.exports = {
  trailingSlash: true,
    images: {
      loader: 'imgix',
      path: '/',
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
};