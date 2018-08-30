import LoginUsers from './user'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

export default {
  bootstrap() {
    let mock = new MockAdapter(axios)

    mock.onPost('/login').reply(config => {
      console.log(config)
    })
  }
}
