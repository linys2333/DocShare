<template>
    <div>
        <x-header :left-options="{showBack: false}" style="background-color:#000;">我爱学习</x-header>
        <group gutter="0">
            <cell v-for="item in list" class="cell" :link="{ path: '/Doc', query: { id: item.id } }">
                <img slot="icon" class="icon" :src="item.src"></img>
                <div slot="after-title">
                    <h4>{{item.title}}</h4>
                    <div class="minFont gray">{{item.desc}}</div>
                </div>
            </cell>
        </group>
    </div>
</template>

<script>
    import {
        XHeader,
        Group,
        Cell
    } from 'vux'

    import {
        mapGetters
    } from 'vuex'

    export default {
        components: {
            XHeader,
            Group,
            Cell
        },
        data() {
            return {}
        },
        created() {
            this.$store.dispatch('getTopicList')

            // 调用微信接口示例，需配置安全域名
            // this.$store.dispatch('getSignature')
            //     .then((config) => {
            //         config.jsApiList = ['startRecord']
            //         this.$wechat.config(config)
            //         this.$wechat.ready(() => {
            //             alert('接口注册成功')
            //         })
            //     })
        },
        computed: {
            ...mapGetters({
                list: 'topicList'
            })
        },
        methods: {}
    }
</script>

<style lang="less" src='./TopicList.less' scoped/>