# Customization

::: tip Basic things
This section describes common steps to customize both, free and premium versions
:::

## Dynamic document `<title>` tag

Document `<title>` tag contists of `defaultDocumentTitle` and route's `meta.title`.

For instance, HomeView's title **Dashboard — Admin One Vue 3 Tailwind**  is generated with `${to.meta.title} — ${defaultDocumentTitle}`.

Both `const defaultDocumentTitle` and `router.afterEach` hook (where title template is being processed) are set in `src/main.js`

Each route's `meta.title` can be set in `src/router/index.js`

```js
const routes = [
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: 'Dashboard'
    },
    path: '/dashboard',
    name: 'dashboard',
    component: Home
  }
]
```

## Static meta and title in index.html

Update info in `<title>` and `<meta>` tags in `index.html`:

```html
<title>Admin One - Vue.js 3 Tailwind dashboard template</title>

<meta name="description" content="Admin One - free Vue.js 3 Tailwind dashboard">

<meta property="og:url" content="https://justboil.github.io/admin-one-vue-tailwind/">
<meta property="og:site_name" content="JustBoil.me">
<meta property="og:title" content="Admin One Vue.js 3 Tailwind free">
<meta property="og:description" content="Admin One - free Vue.js 3 Tailwind dashboard with dark mode. Vite & Vue CLI supported">
<meta property="og:image" content="https://static.justboil.me/templates/one/repo-tailwind-vue.png">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="1920">
<meta property="og:image:height" content="960">

<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:title" content="Admin One Vue.js 3 Tailwind free">
<meta property="twitter:description" content="Admin One - free Vue.js 3 Tailwind dashboard with dark mode. Vite & Vue CLI supported">
<meta property="twitter:image:src" content="https://static.justboil.me/templates/one/repo-tailwind-vue.png">
<meta property="twitter:image:width" content="1920">
<meta property="twitter:image:height" content="960">
```

## Remove our Analytics

Remove our analytic script from `index.html`:

```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-130795909-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-130795909-1');
</script>
```

## Favicon

Favicon file is located in `public/favicon.png`. It's set with basic link tag, but you're free to add other favicon variations in index.html:

```html
<link rel="icon" href="/favicon.png">
<!-- Other icon variations -->
```

## Default style

It's likely, you'll use only one app style, either `basic` or one of listed in `src/styles.js`. So, let's just set one of choice.

### src/main.js (or resources/js/app.js for Laravel)

```js
// styleKey is no longer needed, so remove it from @/config.js import
// import { darkModeKey, styleKey } from '@/config.js'
import { darkModeKey } from '@/config.js'

// Remove setStyle action argument
// styleStore.setStyle(localStorage[styleKey] ?? 'basic')
styleStore.setStyle()
```

### src/stores/style.js (or resources/js/stores/style.js for Laravel)

Here we just import the only required style object and set it via store:

```js
// Replace @/styles.js import
// Import either `basic` or any other style of choice
import { basic as styleDefault } from '@/styles.js'

// styleKey is no longer needed, so remove it from @/config.js import
// import { darkModeKey, styleKey } from '@/config.js'
import { darkModeKey } from '@/config.js'

export const useStyleStore = defineStore('style', {
  state: () => ({
    // ...
  }),
  actions: {
    // Set imported style
    setStyle () {
      for (const key in styleDefault) {
        this[`${key}Style`] = styleDefault[key]
      }
    },
    // ...
  }
})
```

### src/styles.js

Remove unused `const` declarations, so Tailwind will not add that to production CSS file.

## Dark mode setting

By default we check, if darkMode is enabled or disabled in `localStorage[darkModeKey]` and if nothing's set there, we check `prefers-color-scheme` setting.

```js
// Dark mode is off by default, then we check prefers-color-scheme setting
if ((!localStorage[darkModeKey] && window.matchMedia('(prefers-color-scheme: dark)').matches) || localStorage[darkModeKey] === '1') {
  styleStore.setDarkMode(true)
}
```

You may prefer to use backend-based setting instead of localStorage, or CSS-only solution, based on Tailwind media query. For CSS-only solution, remove `darkMode` setting from `tailwind.config.js`

## Icon set

We use `@mdi/js` package. Full list of icons is available on [Material Design Icons website](https://materialdesignicons.com/).

The idea behind `<BaseIcon />` is an `<svg>` tag with the `:path` set via prop value from `@mdi/js` package. So, you can use any icon package which provides svg paths.

Why not  just use an icon font? Svg paths are better, because you import only what you need. When using font you get excess payload of about 700kb (in case of @mdi/font).