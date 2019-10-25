


//子集目录异步加载
const layout = () => import('@/component/app/contacts/layout.vue')

const contactsIndex =  () => import('@/component/app/contacts/index/index.vue')






export default [
    {
        path:'/contacts',
        redirect:'/contacts/index'
    },
    {
        path:'/contacts',
        component: layout,
        children:[
            {
                path:'index',
                name:'ContactsList',
                component: contactsIndex,
                meta:{
                    title:'联系人'
                },
            }
        ]
    },
]



