export const authConfig = {
    indexUrl: `http://${location.hostname}:${location.port}/Auth`,
    state: 'as344550fGeoR09re845'
}

export const wxConfig = {
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: 'wx228208f17636a411', // 必填，企业号的唯一标识，此处填写企业号corpid
    timestamp: new Date().getTime(), // 必填，生成签名的时间戳
    nonceStr: '7yYTL6FG0zaxvwG5ADvaiAgi6k1-NQsiaBP7__G-dvfSp3NdBgApezp6mHkQMHXH', // 必填，生成签名的随机串
    signature: '', // 必填，签名，见附录1
    jsApiList: [] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
}