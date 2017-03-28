import axios from 'axios'
import { rootPath, errHandler } from './config'

export default ({ url, body = null, method = 'get' }) => {
    return axios({
        method: method,
        url: rootPath + url,
        data: body
    }).catch(errHandler)
}
