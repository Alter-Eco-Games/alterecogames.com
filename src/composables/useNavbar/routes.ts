export interface NavRoute {
  name: string
  path: string
  active: boolean
  icon?: string
}

export const mobileNavRoutes: Array<NavRoute> = [
  {
    name: 'games',
    path: '/games',
    active: false,
    icon: 'i-carbon-game-console',
  },
  {
    name: 'home',
    path: '/',
    active: false,
    icon: 'i-carbon-home',
  },
  {
    name: 'bugs',
    path: '/bugs',
    active: false,
    icon: 'i-carbon-debug',
  },
]

export const desktopNavRoutes: Array<NavRoute> = [
  {
    name: 'games',
    path: '/games',
    active: false,
  },
  {
    name: 'about',
    path: '/about',
    active: false,
  },
  {
    name: 'contact',
    path: '/contact',
    active: false,
  },
]
