export default {
  lang: 'en-US',
  title: 'JustBoil.me Docs',
  description: 'Docs for Vue.js Tailwind dashboard',

  lastUpdated: true,

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/': sidebarRoot(),
      '/config/': sidebarSecond()
    },

    editLink: {
      pattern: 'https://github.com/justboil/docs/edit/master/:path',
      text: 'Edit this page on GitHub!'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/justboil' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present JustBoil.me'
    },

    // algolia: {
    //   appId: '8J64VVRP8K',
    //   apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
    //   indexName: 'vitepress'
    // }
  }
}

function nav() {
  return [
    { text: 'Link', link: '/', activeMatch: '/' }
  ]
}

function sidebarRoot() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'Item', link: '/link' },
      ]
    },
  ]
}

function sidebarSecond() {
  return [
    {
      text: 'Title',
      items: [
        { text: 'Item 2', link: '/link-2' },
      ]
    }
  ]
}