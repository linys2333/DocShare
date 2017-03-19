<template>
    <div>
        <x-header style="background-color:#000;">我爱学习</x-header>
        <group gutter="0">
            <div slot="after-title">作者：{{doc.author}}</div>
            <panel header="" :footer="footer" :list="list" :type="type" style="margin:0px;"></panel>
        </group>
    </div>
</template>

<script>
    import {
        XHeader,
        Group,
        Panel
    } from 'vux'

    export default {
        components: {
            XHeader,
            Group,
            Panel
        },
        data() {
            return {
                doc: {
                    author: '刘芮瑞'
                },
                type: '1',
                list: [{
                    src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                    title: '芮瑞讲解项目投资收益产品',
                    desc: '芮瑞说项目投资收益产品其实很简单！不信，你来听听看~',
                    url: '/component/cell'
                }, {
                    src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                    title: '李坤分析项目投资收益售前案例',
                    desc: '如何把一个陌生的产品讲出“花”来？请听我一一道来',
                    url: {
                        path: '/component/radio',
                        replace: false
                    }
                }],
                footer: {
                    title: '查看更多',
                    url: 'http://vux.li'
                }
            }
        },
        created() {},
        computed: {},
        methods: {}
    }
</script>

<style lang="less" src='./DocList.less' scoped/>