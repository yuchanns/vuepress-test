import { path } from '@vuepress/utils'
import type { Theme } from 'vuepress'

const CustomTheme: Theme = (_opts) => {
  return {
    name: 'vuepress-theme-test',
    layouts: {
      Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
      404: path.resolve(__dirname, 'layouts/Notfound.vue')
    }
  }
}

export default CustomTheme
