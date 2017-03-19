<template>
    <div>
        <x-header style="background-color:#000;">我爱学习</x-header>
        <group gutter="0">
            <div slot="after-title">
                <p>{{item.title}}</p>
                <div>作者：{{item.author}}</div>
            </div>
            <panel header="" :footer="footer" :list="item.docList" type="1" style="margin:0px;"></panel>
        </group>
    </div>
</template>

<script>
    import {
        XHeader,
        Group,
        Panel
    } from 'vux'

    import {
        find
    } from 'lodash/'

    export default {
        components: {
            XHeader,
            Group,
            Panel
        },
        data() {
            return {
                item: [{
                    title: '',
                    author: '',
                    docList: [{
                        title: '',
                        desc: '',
                        time: 0,
                        size: 0
                    }]
                }],
                footer: {
                    title: '查看更多',
                    url: 'http://vux.li'
                }
            }
        },
        created() {
            item = find(this.$store.getters.topicList, {
                id: this.$route.query.id
            })
        },
        computed: {},
        methods: {}
    }
</script>

<style lang="less" src='./DocList.less' scoped/>