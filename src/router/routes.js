
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: '/licht', component: () => import('pages/Licht.vue') },
      { path: '/ton', component: () => import('pages/Ton.vue') },
      { path: '/video', component: () => import('pages/Video.vue') },
      { path: '/kontakt', component: () => import('pages/Kontakt.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
