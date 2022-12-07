/*
 * @Author: shenxh
 * @Date: 2021-09-15 15:18:43
 * @LastEditors: shenxh
 * @LastEditTime: 2022-12-07 15:39:55
 * @Description: axios 封装
 */

import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'

axios.defaults.timeout = 60000
axios.defaults.baseURL = process.env.VUE_APP_API

// 请求拦截
axios.interceptors.request.use(
  config => {
    config.data = qs.stringify(config.data, { allowDots: true })

    return config
  },
  err => {
    Message.error('服务器请求失败，请稍后再试')

    return Promise.reject(err)
  },
)

// 响应拦截
axios.interceptors.response.use(
  res => {
    const { responseCode, message } = res.data

    if (responseCode === '100000') {
      return Promise.resolve(res.data)
    } else {
      Message.error(message)

      return Promise.reject(res.data)
    }
  },
  err => {
    if (err.message) {
      return Promise.reject(err)
    } else {
      let data = {
        message: '网络异常，请稍后再试',
      }

      return Promise.reject(data)
    }
  },
)

export default axios
