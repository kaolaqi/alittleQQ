//子集目录异步加载
const layout = () => import ('@/component/app/user/layout.vue')
const userIndex = () => import ('./index/index.vue')

export default [{
    path: '/user',
    redirect: '/user/index'
}, {
    path: '/user',
    component: layout,
    children: [{
            path: 'index',
            name: 'user',
            component: userIndex,
            meta: {
                title: '个人中心'
            }
        }
    ]
}]