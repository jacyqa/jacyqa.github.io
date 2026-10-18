import { defineConfig } from 'vitepress'
import ElementPlus from 'unplugin-element-plus/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  srcDir: "docs",
  base: "/",
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/logo.ico' }]],
  vite:{
    plugins: [
      ElementPlus()
    ]
  },
  title: "yobe的文档",
  description: "a site to share video",
  themeConfig: {
    search:{
      provider:"local"
    },
    logo: "/logo.svg",
    // https://vitepress.dev/reference/default-theme-config
    sidebar:{
      '/src/': [
        {
          text: '获取作品',
          items: [
            { text: '简介', link: '/src/' },
            { text: '作品列表', link: '/src/list' },
          ]
        }
      ],
      '/tutorial/': [
        {
          text: '教程',
          items: [
            { text: '简介', link: '/tutorial/' },
            // { text: '作品列表', link: '/src/list' },
          ]
        }
      ],
      '/share/': [
        {
          text: '资源分享',
          items: [
            { text: '简介', link: '/share/' },
            { text: '实用网站', link: '/share/useful' },
            { text: '有趣网站', link: '/share/funny' },
            { text: 'AE资源', link: '/share/ae' },
          ]
        }
      ],
    },
    nav: [
      { text: '作品共享', link: '/src/' },
      { text: '教程', link: '/tutorial/' },
      { text: '资源分享', link: '/share/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
