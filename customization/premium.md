# Customization (premium dashboard version)
::: tip Premium dashboard specifics
This section describes specifics for the premium dashboard version. Common steps for both, free and premium are described [here](/customization/)
:::

## Aside menu

### Basic structure

Aside menu is configured in `src/menu.js`. The basic structure is array of menu items.

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

      // Target (optional)
      target: '_blank',

      // Icon (optional)
      icon: mdiDesktopMac,

      // Menu item label
      label: 'Dashboard',

      // Dropdown menu (optional)
      menu: [],

      // Secondary menu  (optional)
      menuSecondary: [],

      // Key. Required if using secondaryMenu
      key: 'secondary-1'
    }
  ]
]
```

### Icons

Icons shall be set for all items on first-level menu, as first-level menu has collapsed state, when icons are the only visible elements. 

Additionaly, for visual consistency, icons are recommended to be set for items in `menuSecondary`. 

However, items inside a dropdown look better without icons.

### Secondary menu & dropdown

Secondary menu is palced in `menuSecondary`. Dropdown items are placed in `menu`.

#### How to structure items properly?

First-level menu items can contain `menuSecondary`. Items in `menuSecondary` can conatain `menu`:

```js
export default [
  {
    to: '/',
    icon: mdiDesktopMac,
    label: 'Item without submenus'
  },
  {
    // Key should be unique for each submenus object
    // It is required for open/close logic
    key: 'submenus-1',
    label: 'Sub',
    icon: mdiMenuOpen,
    // `menuSecondary` can only be present in first-level items
    // `menu` can not be used on first-level items, because it will not display properly in collapsed aside state
    menuSecondary: [
      {
        to: '/profile',
        label: 'Sample RouterLink',
        icon: mdiCardAccountDetailsOutline 
      },
      {
        label: 'External link',
        href: 'https://justboil.me',
        icon: mdiOpenInNew,
        target: '_blank'
      },
      {
        label: 'Dropdown',
        icon: mdiFormDropdown,
        // Items in `menuSecondary` can contain dropdown, but cannot contain another `menuSecondary`
        menu: [
          {
            label: 'Dropdown item One'
          },
          {
            label: 'Dropdown item Two'
          }
        ]
      }
    ]
  }
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
