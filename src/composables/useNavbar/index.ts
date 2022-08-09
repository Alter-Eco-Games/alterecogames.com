import { useRoute, useRouter } from 'vue-router'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

import type { NavRoute } from './routes'
export * from './routes'

/**
 * all info for navbar
 *
 */
export function useNavbar(newRoutes?: Array<NavRoute>) {
  const breakpoints = useBreakpoints(breakpointsTailwind)
  const router = useRouter()
  const currentRoute = useRoute()

  const routes = reactive(Array.from(newRoutes ?? [], route => reactive(route)))
  const isMobile = breakpoints.smaller('sm')

  onMounted(() => {
    routes.forEach(route => route.active = currentRoute.path === route.path)
    watch(() => currentRoute.path, newPath => routes.forEach(route => route.active = newPath === route.path))
  })

  return {
    isMobile,
    routes,
    currentRoute,
    router,
  }
}
