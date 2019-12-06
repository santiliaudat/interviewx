/**
 * Description: Axios instance to call back-end API with HTTP Authorization header attached to every request
 * Author: Santi
 */

import axios from 'axios'

const myApi = axios.create({
  baseURL: 'https://interviewx-api.herokuapp.com'
})

myApi.interceptors.request.use(
  error => {
    console.log('error axios!')
    return Promise.reject(error)
  }
)

export default myApi
