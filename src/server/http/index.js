
import axios from 'axios'
import { modalMessageServer, modalAlertServer } from '../modals/index'
import router from '@/router'
// import store from '@/store'
// import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: '/',
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    // if (store.getters.token) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    //   config.headers['X-Token'] = getToken()
    // }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.statusCode === 401) {
      modalAlertServer.use({
        content: '登录失效，请重新登录！',
        onClickConfirm: function() {
          // window.location.hash = '/login';
          router.push({ name: 'login' })
          modalAlertServer.hide()
        }
      })
    }
    if (res.statusCode !== 200) {
      modalMessageServer.show(res.message || 'Error', 2000)
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    modalMessageServer.show(error.message, 2000)
    return Promise.reject(error)
  }
)

export default service
