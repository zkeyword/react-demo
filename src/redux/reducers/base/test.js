import createReducer from 'UTIL/createReducer'
import { ACTION_HANDLERS } from 'ACTION/base/test'
import initState from 'STORE/initState'

export default createReducer(initState.todos, ACTION_HANDLERS)
