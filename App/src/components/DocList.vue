<template>
    <div>
        <x-header style="background-color:#000;">我爱学习</x-header>
        <group gutter="0">
            <div slot="after-title" style="margin:10px;">
                <p>{{topic.title}}</p>
                <div style="font-size: 12px;">作者：{{topic.author}}</div>
            </div>
            <cell v-for="item in topic.docList" style="margin:0px;" :title="item.title"  :inline-desc='item.desc'>
                <x-button slot="icon" text="播放" @click.native="play(item.src)" type="primary"></x-button>
            </cell>
        </group>
    </div>
</template>

<script>
    import {
        XHeader,
        Group,
        Cell,
        XButton
    } from 'vux'

    import {
        cloneDeep,
        find
    } from 'lodash/'

    export default {
        components: {
            XHeader,
            Group,
            Cell,
            XButton
        },
        data() {
            return {
                topic: [],
                src: ''
            }
        },
        created() {
            if (this.$store.getters.topicList.length == 0) {
                this.$router.go(-1)
                return
            }

            this.topic = cloneDeep(find(this.$store.getters.topicList, {
                id: this.$route.query.id
            }))
        },
        computed: {},
        methods: {
            play(src) {
                var sound = new Audio()
                sound.controls = 'controls'
                sound.src = src
                sound.play()
            }
        }
    }
</script>

<style lang="less" src='./DocList.less' scoped/>