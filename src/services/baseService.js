import xhr from './xhr/'

class BaseService {

    /*
    * 企业管理
    */
    enterpriseList(body) {
        return xhr({
            method: 'post',
            url: '/api/base/enterprise/list',
            body
        })
    }

    enterpriseDetail(body) {
        return xhr({
            method: 'post',
            url: '/api/base/enterprise/detail',
            body
        })
    }

    enterpriseAdd(body) {
        return xhr({
            method: 'post',
            url: '/api/base/enterprise/add',
            body
        })
    }

    enterpriseDelete(body) {
        return xhr({
            method: 'post',
            url: '/api/base/enterprise/delete',
            body
        })
    }

    enterpriseModify(body) {
        return xhr({
            method: 'post',
            url: '/api/base/enterprise/modify',
            body
        })
    }

    /*
    * 账户管理
    */
    entAccountList(body) {
        return xhr({
            method: 'post',
            url: '/api/base/entAccount/list',
            body
        })
    }

    entAccountAliasList(body) {
        return xhr({
            method: 'post',
            url: '/api/base/entAccount/aliasList',
            body
        })
    }

    entAccountAdd(body) {
        return xhr({
            method: 'post',
            url: '/api/base/entAccount/add',
            body
        })
    }

    entAccountDetail(body) {
        return xhr({
            method: 'post',
            url: '/api/base/entAccount/detail',
            body
        })
    }

    entAccountDelete(body) {
        return xhr({
            method: 'post',
            url: '/api/base/entAccount/delete',
            body
        })
    }

    entAccountModify(body) {
        return xhr({
            method: 'post',
            url: '/api/base/entAccount/modify',
            body
        })
    }

    /*
    * 仓库管理
    */
    warehouseList(body) {
        return xhr({
            method: 'post',
            url: '/api/base/warehouse/list',
            body
        })
    }

    warehouseDetail(body) {
        return xhr({
            method: 'post',
            url: '/api/base/warehouse/detail',
            body
        })
    }

    warehouseAdd(body) {
        return xhr({
            method: 'post',
            url: '/api/base/warehouse/add',
            body
        })
    }

    warehouseDelete(body) {
        return xhr({
            method: 'post',
            url: '/api/base/warehouse/delete',
            body
        })
    }

    warehouseModify(body) {
        return xhr({
            method: 'post',
            url: '/api/base/warehouse/modify',
            body
        })
    }

    /*
    * 货币管理
    */
    currencyList(body) {
        return xhr({
            method: 'post',
            url: '/api/base/currency/list',
            body
        })
    }

    currencyDetail(body) {
        return xhr({
            method: 'post',
            url: '/api/base/currency/detail',
            body
        })
    }

    currencyAdd(body) {
        return xhr({
            method: 'post',
            url: '/api/base/currency/add',
            body
        })
    }

    currencyDelete(body) {
        return xhr({
            method: 'post',
            url: '/api/base/currency/delete',
            body
        })
    }

    currencyModify(body) {
        return xhr({
            method: 'post',
            url: '/api/base/currency/modify',
            body
        })
    }

    /*
    * 商品信息
    */

    /*
    * 产品类型管理
    */

    /*
    * 产品管理
    */
}

// 实例化后再导出
export default new BaseService()
