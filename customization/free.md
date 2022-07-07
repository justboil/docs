# Customization (free dashboard version)

::: tip Free dashboard specifics
This section describes specifics for the free dashboard version. Common steps for both, free and premium are described [here](/customization/)
:::

## Aside Menu

### Basic structure

Aside menu is configured in `src/menu.js`. The basic structure is array of arrays with menu items.

To make the link work, either `to` or `href` should be set. Icon is optional, but is recommended for first level items, and is not recommended for dropdown items.

`<AsideMenuItem>` emits `@menu-click` event with two arguments - `event` and `item`. 

```js
export default [
  // Group label is optional
  'Group label'
  [
    {
      // RouterLink path
      to: '/dashboard',

      // ... or external link href
      href: 'https://justboil.me',

      // Target is optional
      target: '_blank',

      // Icon is optional, but recommended for first-level items, and is not recommended for dropdown items
      icon: mdiDesktopMac,

      // Menu item label
      label: 'Dashboard',

      // Dropdown menu (optional)
      menu: [
        // Dropdown items list
      ]
    }
  ]
]
```

Optional strings in main array designate group names, like **General** or **Examples** in the snippet below:

```js
export default [
  'General',
  [
    {
      to: '/dashboard',
      icon: mdiDesktopMac,
      label: 'Dashboard'
    },
    // ...
  ],
  'Examples',
  [
    // ...
  ]
]
```

So, if you don't want items to be grouped, you can just put all items in second-level array, like this: 

```js
export default [
  [
    {
      to: '/dashboard',
      icon: mdiDesktopMac,
      label: 'Dashboard'
    },
    {
      to: '/dashboard-2',
      icon: mdiDesktopMac,
      label: 'Dashboard 2'
    },
    // Other items
  ]
]
```

### Dropdown

Dropdown items should be placed in `menu`:

```js
export default [
  [
    {
      label: 'Dropdown',
      icon: mdiViewList,
      menu: [
        {
          to: '/somewhere-1'
          label: 'Item One'
        },
        {
          href: 'https://justboil.me/'
          label: 'Item Two'
        }
      ]
    }
  ],
  // ...
]
```

### External links

External links can be set via `href`, the `target` is optional:

```js
export default [
  [
    {
      href: 'https://tailwind-vue.justboil.me/',
      label: 'Premium version',
      icon: mdiMonitorShimmer,
      target: '_blank'
    },
    // ...
  ]
]
```
