import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MUI",
  description: "A VitePress Site",
  base:"/vue3-coms",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '组件库', link: '/introduction' }
    ],

    sidebar: [
      {
        text: '介绍',
        items: [
          { text: '快速上手', link: '/introduction' },
          { text: '图标选择器', link: '/choose-icon' },
          { text: '省市区选择器', link: '/choose-area' },
          { text: '城市选择器', link: '/choose-city' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/caozhengqian/vue3-coms' }
    ]
  }
})
