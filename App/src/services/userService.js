import xhr from './xhr/'

/**
 * 对应后端涉及到用户认证的 API
 */
class UserService {
    login(data) {
        return xhr({
            method: 'post',
            url: '/User/Login',
            data: {
                dto: data
            }
        })
    }

    logout() {
        return xhr({
            url: '/User/Logout',
            method: 'post'
        })
    }

    getSecret(data) {
        return xhr({
            method: 'post',
            url: '/User/GetSecret',
            data: {
                dto: data
            }
        })
    }
}

// 实例化后再导出
export default new UserService()