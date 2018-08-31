import axios from 'axios'

let base = ''

export const requestLogin = params => {
  return axios.post(`${base}/loginTest`, params).then(res => res.data)
}
