import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeComponent from '@/views/Home.vue'
import CalendarComponent from '@/views/Calendar.vue'
import ProfileComponent from '@/views/Profile.vue'
import ShareComponent from '@/views/Share.vue'
import SignInComponent from '@/views/SignIn.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent,
    meta: {
      title: 'home'
    }
  },
  {
    path: '/calendar/:type',
    name: 'calendar',
    component: CalendarComponent,
    meta: {
      title: 'calendar'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileComponent,
    meta: {
      title: 'profile'
    }
  },
  {
    path: '/share',
    name: 'share',
    component: ShareComponent,
    meta: {
      title: 'share'
    }
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: SignInComponent,
    meta: {
      title: 'sign-in'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach(to => {
  if (!to.meta.title) {
  }

  document.title = to.meta.title
})

export default router
