export const config = {
    // 自动加在url前面，除非url是一个绝对URL
    baseURL: `http://${window.location.hostname}:8004/api`,

    // 跨域请求时是否发送cookie等用户认证凭据
    withCredentials: false, // default

    // 服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType: 'json', // default

    // 根据Http响应状态码返回不同Promise类型
    // 如果 = true/null/undefined，返回resolve，否则返回reject
    validateStatus: function(status) {
        return status >= 200 && status < 300; // default
    }
}