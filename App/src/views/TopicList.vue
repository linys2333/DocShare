<template>
    <div>
        <x-header :left-options="{showBack: false}" style="background-color:#000;">我爱学习</x-header>
        <group gutter="0">
            <cell v-for="item in list" style="margin:0px;" :title="item.title" :link="{ path: '/Doc', query: { id: item.id } }" :inline-desc='item.desc'>
                <img slot="icon" width="60" height="60" style="display:block;margin-right:10px;" :src="item.src"></img>
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