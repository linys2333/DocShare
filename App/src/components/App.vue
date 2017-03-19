<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('App.vue')
        }
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
    body {
        background-color: #fbf9fe;
    }
</style>