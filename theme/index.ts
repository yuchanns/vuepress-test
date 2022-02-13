const { path } = require('@vuepress/utils')

const theme = (_opts, _app) => {
  return {
    name: 'vuepress-theme-test',
    layouts: {
      Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
      404: path.resolve(__dirname, 'layouts/Notfound.vue')
    }
  }
}

module.exports = theme
