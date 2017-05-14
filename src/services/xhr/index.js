import axios from 'axios'
// import { errHandler } from './config'

export default ({ url, body = null, method = 'get' }) => {
    return axios({
        method: method,
        url: url,
        data: body
    })
    // .catch(errHandler)
}
