import type { Route } from '~/types'

const desktopRoutes: Array<Route> = [
  {
    path: '/games',
    name: 'games',
  }, {
    path: '/about',
    name: 'about',
  }, {
    path: '/contact',
    name: 'contact',
  },
]

const mobileRoutes: Array<Route> = [
  {
    path: '/games',
    name: 'games',
  }, {
    path: '/index',
    name: 'index',
  }, {
    path: '/bugs',
    name: 'bugs',
  },
]

export function useNavbar() {
  const currentRoute = useRoute()

  const isMobile = ref(true)
  const isCurrentRoute = (route: Route) => route.name === currentRoute.name

  const routes = computed(() => isMobile ? mobileRoutes : desktopRoutes)

  return {
    isMobile,
    isCurrentRoute,
    routes,
  }
}

