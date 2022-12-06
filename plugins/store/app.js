// import router from '~/router'
// import {useRouter} from "nuxt/app";
// const router = useRouter();

export default {
  namespaced: true,
  state: {
    isSiteFirstLoaded: true,
    isMenuNavigationOpened: false,
    hidePageControl: false,
    isActiveBurger: false,
    transitionDirection: '', // to-left || to-right
    isPageLoaderHide: false, // useful in develop mode
    navigation: []
  },
  getters: {
    isSiteFirstLoaded: (state) => state.isSiteFirstLoaded,
    isMenuNavigationOpened: (state) => state.isMenuNavigationOpened,
    isActiveBurger: (state) => state.isActiveBurger,
    transitionDirection: (state) => state.transitionDirection,
    hidePageControl: (state) => state.hidePageControl,
    isPageLoaderHide: (state) => state.isPageLoaderHide,
    navigation: (state) => state.navigation,
  },
  mutations: {
    // setIsSiteFirstLoaded(state, bool) {
    //   state.isSiteFirstLoaded = bool
    // },
    setIsMenuNavigation(state, bool) {
      state.isMenuNavigationOpened = bool
    },
    setHidePageControl(state, bool) {
      state.hidePageControl = bool
    },
    setDirection(state, route) {
      // const { routes } = router?.options
      // const currentIndex = routes.findIndex((x) => x.name === router.currentRoute.value.name)
      // const goToIndex = routes.findIndex((x) => x.name === route.name)
      state.transitionDirection = 'to-right' // currentIndex < goToIndex ? 'to-right' : 'to-left'
    },
    toPage(store, { route, direction }) {
      this.commit('app/setIsMenuNavigation', false)
      this.commit('app/setHidePageControl', true)
      this.commit('app/setDirection',route)
      
      console.log('route',route.name);

      // setTimeout(() => router.push(route), 600)
      // setTimeout(() => navigateTo('/'+route.name), 600)
      setTimeout(() => navigateTo(route), 600)
      setTimeout(() => this.commit('app/setHidePageControl', false), 900)
    },
    setIsPageLoaderHide(state, bool) {
      state.isPageLoaderHide = bool
    },
    setNavigation(state, arr) {
      const orderList = ['index','portfolio','about','contacts', 'matter']
      state.navigation = orderList.map(name => arr.find(x=>x.name === name))
    },
  },
}
