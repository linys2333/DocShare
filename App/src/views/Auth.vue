<template>
    <box gap="36px 20px" class="tip">
        <div v-if="info == ''">  
            跳转中...
        </div>
        <div v-else>
            <div class="icon"><icon type="info" is-msg></icon></div>   
            <div class="text">{{this.info}}</div>
        </div>
    </box>
</template>

<script>
    import {
        Box,
        Icon
    } from 'vux'

    import {
        authConfig,
        wxConfig
    } from './../config'

    export default {
        components: {
            Box,
            Icon
        },
        data() {
            return {
                info: ''
            }
        },
        created() {
            let info = {
                code: this.$route.query.code,
                state: this.$route.query.state
            }

            // 1、是否同一个入口进入
            if (!info.code || info.state != authConfig.state) {
                this.setWaring()
                return
            }

            // 2、根据code校验是否该企业号成员
            this.$store.dispatch('init', wxConfig)
                .then(() => {
                    this.$store.dispatch('getWxUser', info.code)
                        .then((userInfo) => {
                            // 非企业成员
                            if (!userInfo || userInfo.UserId || !userInfo.DeviceId) {
                                this.setWaring()
                                return
                            }

                            // 缓存身份信息
                            sessionStorage.wxInfo = {
                                code: info.code,
                                state: info.state,
                                userId: userInfo.UserId,
                                deviceId: userInfo.DeviceId
                            }

                            this.$router.replace('/Topic')
                        })
                })

        },
        methods: {
            setWaring() {
                this.info = '没有权限，请从微信企业号进入，或联系该企业号管理员'
            }
        }
    }
</script>

<style lang="less" src='./Auth.less' scoped/>