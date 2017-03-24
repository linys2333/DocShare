<template>
</template>

<script>
    import {
        authConfig,
        wxConfig
    } from './../config'

    export default {
        beforeCreate() {
            // 重定向至微信身份验证
            let redirectUrl = encodeURIComponent(authConfig.indexUrl)
            window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${wxConfig.appId}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_base&state=${authConfig.state}#wechat_redirect`
        }
    }
</script>