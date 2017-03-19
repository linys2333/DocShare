import { rootPath, errHandler } from './config'

const xhr = ({ url, data = null, method = 'get' }) => {
    const defer = $.Deferred()

    $.ajax({
        type: method,
        url: rootPath + url,
        data: data,
        crossDomain: true,
        // xhrFields: { // 跨域允许带上 cookie
        //   withCredentials: [域名]
        // },
        headers: {
            'Authorization': sessionStorage.token || ''
        },
        beforeSend(xhr) {

        },
        success(data, textStatus, xhr) {
            if (data && data.success) {
                defer.resolve(data.data)
            } else {
                defer.reject(data.message)
            }
        },
        error(xhr, textStatus) {
            errHandler(xhr)
            defer.reject(textStatus)
        },
        statusCode: {
            // todo：token相关的代码是否考虑移出去？
            200(data, textStatus, xhr) {
                let token = xhr.getResponseHeader('Authorization') || ''
                if (token) {
                    sessionStorage.setItem('token', token)
                } else {
                    sessionStorage.removeItem('token')
                }
            },
            401() {
                sessionStorage.removeItem('token')
            }
        },
        complete(xhr, textStatus) {
            if (textStatus !== 'success') {
                let token = sessionStorage.token || ''
                if (!token) {
                    // todo：这里跳转好SB...
                    window.location.href = '/Login'
                }
            }
        }
    })

    return defer.promise()
}

export default xhr