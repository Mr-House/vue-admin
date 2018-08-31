import LoginUsers from './user'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

export default {
  bootstrap() {
    let mock = new MockAdapter(axios)

    mock.onPost('/loginTest').reply(config => {
      let { userName, password } = JSON.parse(config.data)
      return new Promise(resolve => {
        let user = null
        let hasUser = LoginUsers.some(u => {
          if (u.userName === userName && u.password === password) {
            user = JSON.parse(JSON.stringify(u))
            user.password = undefined
            return true
          }
        })

        if (hasUser) {
          resolve([200, { code: 200, msg: '请求成功', user }])
        } else {
          resolve([200, { code: 500, msg: '账号或密码错误' }])
        }
      })
    })
  }
}
