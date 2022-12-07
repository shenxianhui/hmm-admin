/*
 * @Description: 设备维护
 * @Author: shenxh
 * @Date: 2022-12-07 13:59:30
 * @LastEditors: shenxh
 * @LastEditTime: 2022-12-07 15:46:22
 */

import axios from '@/utils/axios'

// GET 示例
export const getTest = params => {
  return axios.get('/xxx', { params })
}

// POST 示例
export const postTest = params => {
  return axios.post('/xxx', params)
}

// 设备查询
export const getEquData = params => {
  return axios.post('/userdevice/page', params)
}
