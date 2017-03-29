// ========================================================
// 同步 history 配置
// ========================================================
import { useRouterHistory } from 'react-router'
import createHashHistory from 'history/lib/createHashHistory'
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'

const hashHistory = useRouterHistory(createHashHistory)({
    basename: '' // 相当于 rootPath
})

export const historyMiddleware = routerMiddleware(hashHistory)

/**
 * @param  {Store}
 * @return {History} 增强版 history
 */
export default (store) => {
    return syncHistoryWithStore(
        hashHistory,
        store,
        { selectLocationState: (state) => state.router }
    )
}
