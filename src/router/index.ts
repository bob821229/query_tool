import { createRouter, createWebHistory } from 'vue-router'



// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView,
//     },
//     {
//       path: '/irrigation',
//       name: 'irrigation',
//       component: () => import('../views/IrrigationView.vue'),
//       meta: {
//         title: '管理處灌溉用水資料'
//       },
//       children: [
//         {
//           path: 'query',
//           name: 'irrigation-query',
//           component: () => import('../views/IrrigationQueryView.vue'),
//           meta: {
//             title: '用水紀錄查詢'
//           }
//         },
//         {
//           path: 'statistics',
//           name: 'irrigation-statistics',
//           component: () => import('../views/IrrigationStatisticsView.vue'),
//           meta: {
//             title: '灌溉用水資料統計'
//           },
//           children: [
//             {
//               path: 'area',
//               name: 'irrigation-statistics-area',
//               component: () => import('../views/IrrigationStatisticsAreaView.vue'),
//               meta: {
//                 title: '歷史面積資料統計'
//               }
//             },
//             {
//               path: 'water',
//               name: 'irrigation-statistics-water',
//               component: () => import('../views/IrrigationStatisticsWaterView.vue'),
//               meta: {
//                 title: '歷史旬用水量統計'
//               }
//             }
//           ]
//         }
//       ]
//     },
//     {
//       path: '/reservoir',
//       name: 'reservoir',
//       component: () => import('../views/ReservoirView.vue'),
//       meta: {
//         title: '水庫型灌區用水資料'
//       },
//       children: [
//         {
//           path: 'query',
//           name: 'reservoir-query',
//           component: () => import('../views/ReservoirQueryView.vue'),
//           meta: {
//             title: '水庫用水紀錄查詢'
//           }
//         },
//         {
//           path: 'statistics',
//           name: 'reservoir-statistics',
//           component: () => import('../views/ReservoirStatisticsView.vue'),
//           meta: {
//             title: '灌溉用水資料統計'
//           },
//           children: [
//             {
//               path: 'area',
//               name: 'reservoir-statistics-area',
//               component: () => import('../views/ReservoirStatisticsAreaView.vue'),
//               meta: {
//                 title: '歷史面積資料統計'
//               }
//             },
//             {
//               path: 'water',
//               name: 'reservoir-statistics-water',
//               component: () => import('../views/ReservoirStatisticsWaterView.vue'),
//               meta: {
//                 title: '歷史旬用水量統計'
//               }
//             }
//           ]
//         }
//       ]
//     },
//     {
//       path: '/history',
//       name: 'history',
//       component: () => import('../views/HistoryView.vue'),
//       meta: {
//         title: '歷史停灌資訊'
//       }
//     },

//   ]
// })

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'irrigation-query',
      component: () => import('../views/IrrigationQueryView.vue'),
      meta: {
        title: '用水紀錄查詢'
      }
    },
    {
      path: '/irrigation-statistics-area',
      name: 'irrigation-statistics-area',
      component: () => import('../views/IrrigationStatisticsAreaView.vue'),
      meta: {
        title: '歷史面積資料統計'
      }
    },
    {
      path: '/irrigation-statistics-water',
      name: 'irrigation-statistics-water',
      component: () => import('../views/IrrigationStatisticsWaterView.vue'),
      meta: {
        title: '歷史旬用水量統計'
      }
    },
    {
      path: '/reservoir-query',
      name: 'reservoir-query',
      component: () => import('../views/ReservoirQueryView.vue'),
      meta: {
        title: '水庫用水紀錄查詢'
      }
    },
    {
      path: '/reservoir-statistics-area',
      name: 'reservoir-statistics-area',
      component: () => import('../views/ReservoirStatisticsAreaView.vue'),
      meta: {
        title: '歷史面積資料統計'
      }
    },
    {
      path: '/reservoir-statistics-water',
      name: 'reservoir-statistics-water',
      component: () => import('../views/ReservoirStatisticsWaterView.vue'),
      meta: {
        title: '歷史旬用水量統計'
      }
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('../views/HistoryView.vue'),
      meta: {
        title: '歷史停灌資訊'
      }
    }
  ]
})

export default router
