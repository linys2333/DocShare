<template>
    <div>
        <box gap="36px 20px" class="tip">
            <div v-if="tip == 1">  
                身份验证中...
            </div>
            <div v-if="tip == 2">
                <div class="icon"><icon type="info" is-msg></icon></div>   
                <div class="text">请先关注该微信企业号，或者从企业号应用进入</div>
                <img src="./../static/img/二维码.jpg"></img>
                <div class="remark">或者联系该企业号管理员</div>
            </div>
        </box>
    </div>
</template>

<script>
    import {
        Box,
        Icon
    } from 'vux'

    import {
        authConfig,
        wxconfig
    } from '@/config'

    export default {
        components: {
            Box,
            Icon
        },
        data() {
            return {
                tip: 0
            }
        },
        beforeCreate() {

        },
        created() {
            let info = {
                code: this.$route.query.code,
                state: this.$route.query.state
            }

            // 1、是否同一个入口进入
            if (!info.code || info.state != authConfig.state) {
                // 限制只能从微笑企业号进入
                if (this.$route.query.appid != '2') {
                    this.setWaring()
                    return
                }

                // 重定向至微信身份验证
                let redirectUrl = encodeURIComponent(authConfig.indexUrl)
                window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${wxconfig.appId}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_base&state=${authConfig.state}#wechat_redirect`
                return
            }

            // 2、根据code校验是否该企业号成员
            this.tip = 1
            this.$store.dispatch('init')
                .then(() => this.$store.dispatch('getWxUser', info.code))
                .then((userInfo) => {
                    // 非企业成员
                    if (!userInfo || !userInfo.UserId) {
                        this.setWaring()
                        return
                    }

                    // 缓存身份信息
                    sessionStorage.setItem('wxInfo', JSON.stringify({
                        code: info.code,
                        userId: userInfo.UserId
                    }))

                    this.$router.replace('/Topic')
                })
                .catch(() => this.setWaring())

        },
        methods: {
            setWaring() {
                this.tip = 2
            }
        }
    }
</script>

<style lang="less" src='./Auth.less' scoped/>