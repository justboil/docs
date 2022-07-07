export default {
  lang: 'en-US',
  title: 'JustBoil Vue Tailwind Docs (wip)',
  description: 'Docs for Vue.js Tailwind dashboard',

  lastUpdated: true,

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/': sidebarMain(),
    },

    editLink: {
      pattern: 'https://github.com/justboil/docs/edit/master/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/justboil' }
    ],

    footer: {
      // message: 'Docs are released under the MIT License.',
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
    // { text: 'JustBoil.me', link: '/free/', activeMatch: '/free/' }
    { text: 'JustBoil.me', link: 'https://justboil.me' }
  ]
}

function sidebarMain() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'About', link: '/' },
        { text: 'Getting started', link: '/basics/getting-started.html' },
      ]
    },
    {
      text: 'Customization',
      collapsible: true,
      items: [
        { text: 'Basic things', link: '/customization/' },
        { text: 'Free version specifics', link: '/customization/free.html' },
        { text: 'Premium version specifics', link: '/customization/premium.html' },
      ]
    },
  ]
}
