export const rootPath = `http://${location.hostname}:${location.port}`

export const authConfig = {
    indexUrl: `${rootPath}/`,
    state: 'as344550fGeoR09re845'
}

var createNonceStr = function() {
    return Math.random().toString(36).substr(2, 15)
}

var createTimestamp = function() {
    return parseInt(new Date().getTime() / 1000) + ''
}

export const wxConfig = {
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: '', // 必填，企业号的唯一标识，此处填写企业号corpid
    timestamp: createTimestamp(), // 必填，生成签名的时间戳
    nonceStr: createNonceStr(), // 必填，生成签名的随机串
    signature: '', // 必填，签名，见附录1
    jsApiList: [] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
}