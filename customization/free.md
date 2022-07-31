# Customization (free dashboard version)

::: tip Free dashboard specifics
This section describes specifics for the free dashboard version. Common steps for both, free and premium are described [here](/customization/)
:::

## Aside Menu

### Basic structure

Aside menu is configured in `src/menu.js`. The basic structure is array of menu items.

To make the link work, either `to` or `href` should be set. Icon is optional, but is recommended for first level items, and is not recommended for dropdown items.

`<AsideMenuItem>` emits `@menu-click` event with two arguments - `event` and `item`. 

```js
export default [
  {
    // RouterLink path
    to: '/dashboard',

    // ... or external link href
    href: 'https://justboil.me',

    // Target (optional)
    target: '_blank',

    // Icon (optional)
    icon: mdiDesktopMac,

    // Menu item label
    label: 'Dashboard',

    // Dropdown menu (optional)
    menu: [],

    // Key. Required if using secondaryMenu
    key: 'secondary-1'
  }
]
```

### Icons

Icons shall be set for all items on first-level menu.

However, items inside a dropdown look better without icons.

### Dropdown

Dropdown items are placed in `menu`.

#### How to structure items properly?

First-level items can conatain `menu` (which is a dropdown):

```js
export default [
  {
    to: '/',
    icon: mdiDesktopMac,
    label: 'Item without submenus'
  },
  {
    label: 'Dropdown',
    icon: mdiViewList,
    menu: [
      {
        label: 'Item One'
      },
      {
        label: 'Item Two'
      }
    ]
  },
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
