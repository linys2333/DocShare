<template>
    <transition :name="transitionName">
        <router-view></router-view>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                transitionName: 'slide-left'
            }
        },
        created() {},
        methods: {},
        mounted() {
            console.log('App.vue')
        },
        watch: {
            '$route' (to, from) {
                let toDepth = to.path.split('/').length
                let fromDepth = from.path.split('/').length

                if (to.path[to.path.length - 1] === '/') {
                    toDepth--
                }
                if (from.path[from.path.length - 1] === '/') {
                    fromDepth--
                }
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        }
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
</style>
<style src='STATIC/less/global.less' lang='less'></style>