import axios from 'axios'
import * as types from '../constants/ActionTypes'

const handle = ({ url, query }, dispatch) => {
    dispatch(types.INCREMENT)
    return axios
        .get(url, { params: query })
}

export const increment = () => ({ type: types.INCREMENT })

export const test = (page, count) => {
    let url = '/test'
    let query = {}
    return (dispatch) => {
        handle({ url, query }, dispatch)
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.log(error)
            })
    }
}
