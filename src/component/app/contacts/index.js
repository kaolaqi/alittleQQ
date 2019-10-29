
// 子集目录异步加载
const layout = () => import('@/component/app/contacts/layout.vue')

const contactsIndex = () => import('@/component/app/contacts/index/index.vue')
const userDetail = () => import('@/component/app/contacts/userDetail/index.vue')
const searchUser = () => import('@/component/app/contacts/searchUser/index.vue')

export default [
  {
    path: '/contacts',
    redirect: '/contacts/index'
  },
  {
    path: '/contacts',
    component: layout,
    children: [
      {
        path: 'index',
        name: 'ContactsList',
        component: contactsIndex,
        meta: {
          title: '联系人'
        }
      },
      {
        path: 'userDetail/:mobile',
        name: 'UserDetail',
        component: userDetail,
        meta: {
          title: '用户详情'
        }
      },
      {
        path: 'searchUser',
        name: 'SearchUser',
        component: searchUser,
        meta: {
          title: '添加查询'
        }
      }
    ]
  }
]

