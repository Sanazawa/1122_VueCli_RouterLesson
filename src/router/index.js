import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/newpage',
    name: '新增頁面',
    component: () => import('../views/NewPage.vue'),
    children: [
      {
        path: 'a',
        component: () => import('../views/ComponentA.vue'),
      },
      {
        path: 'b',
        component: () => import('../views/ComponentB.vue'),
      },
      {
        path: 'dynamicRouter/:id',
        component: () => import('../views/DynamicRouter.vue'),
      },
      {
        path: 'dynamicRouterByProps/:id',
        component: () => import('../views/DynamicRouterByProps.vue'),
        props: (route) => {
          console.log('route:', route);
          return {
            id: route.params.id,
          };
        },
      },
      {
        path: 'routerNavigation',
        component: () => import('../views/RouterNavigation.vue'),
      },
      {
        path: 'namedView',
        component: () => import('../views/NamedView.vue'),
        children: [
          {
            path: 'c2a',
            components: {
              left: () => import('../views/ComponentC.vue'),
              right: () => import('../views/ComponentA.vue'),
            },
          },
          {
            path: 'a2b',
            components: {
              left: () => import('../views/ComponentA.vue'),
              right: () => import('../views/ComponentB.vue'),
            },
          },
        ],
      },
    ],
  },
  // 404 Not Found 頁面
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
  },
  // 重新導向
  {
    path: '/newPage/:pthMatch(.*)*',
    redirect: {
      name: 'home',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    // `to` and `from` are both route locations
    // `savedPosition` can be null if there isn't one
    console.log(to, from, savedPosition);
    // 使用scrollBehavior，當符合開啟newPage頁面條件時自動拉到最上面
    if (to.fullPath.match('newPage')) {
      return {
        top: 0,
      };
    }
    // 當設定了某些條件下scrollBehavior回傳值後，最外層也必需要有設定移動的值(如top: 0)，因其他的不動作故在此回傳空
    return {};
  },
});

export default router;
