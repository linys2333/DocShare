<template>
    <div>
        <x-header :left-options="{showBack: false}" style="background-color:#000;">我爱学习</x-header>
        <group gutter="0">
            <cell v-for="item in list" style="margin:0px;" :title="item.title" :link="{ path: item.path }" :inline-desc='item.desc'>
                <img slot="icon" width="60" height="60" style="display:block;margin-right:10px;" src="item.src"></img>
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

    export default {
        components: {
            XHeader,
            Group,
            Cell
        },
        data() {
            return {
                list: [{
                    id: '1',
                    src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                    title: '芮瑞讲解项目投资收益产品',
                    desc: '芮瑞说项目投资收益产品其实很简单！不信，你来听听看~',
                    path: '/Doc'
                }, {
                    id: '2',
                    src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                    title: '李坤分析项目投资收益售前案例',
                    desc: '如何把一个陌生的产品讲出“花”来？请听我一一道来',
                    path: '/Doc'
                }]
            }
        },
        created() {},
        computed: {},
        methods: {}
    }
</script>

<style lang="less" src='./TopicList.less' scoped/>