

//子集目录异步加载
const layout = () => import('@/component/app/message/layout.vue')
const messageIndex = () => import('./index/index.vue')
export default [
    {
        path:'/message',
        redirect:'/message/index'
    },
    {
        path:'/message',
        component: layout,
        children:[
            {
                path:'index',
                name:'MessageIndex',
                component: messageIndex,
                meta:{
                    title:'消息'
                },
            }
        ]
    },
]










