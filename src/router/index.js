import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MoviePage from '../views/MoviePage.vue'
import MovieSearch from '../views/movieSearch.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/movie/:movieId',
      name: 'movie',
      props: true,
      component: MoviePage
    },
    {
      path: '/movieSearch/:searchQuery&:pageNumber',
      name: 'movieSearch',
      props: true,
      component: MovieSearch
    }
  ]
})

export default router
