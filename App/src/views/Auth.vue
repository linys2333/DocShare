<template>
    <box gap="36px 20px" class="tip">
        <div v-if="info == ''">  
            身份验证中...
        </div>
        <div v-else>
            <div class="icon"><icon type="info" is-msg></icon></div>   
            <div class="text">{{this.info}}</div>
            <img src="./../assets/img/二维码.jpg"></img>
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
            this.$store.dispatch('init')
                .then(() => {
                    this.$store.dispatch('getWxUser', info.code)
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
                })
                .catch(() => this.setWaring())

        },
        methods: {
            setWaring() {
                this.info = '没有权限！请先关注该微信企业号，或联系该企业号管理员'
            }
        }
    }
</script>

<style lang="less" src='./Auth.less' scoped/>