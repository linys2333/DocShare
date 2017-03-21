<template>
    <div>
        <x-header style="background-color:#000;">我爱学习</x-header>
        <group gutter="0">
            <box slot="after-title" gap="10px">
                <p>{{topic.title}}</p>
                <div class="minFont"><span class="gray">作者：</span>{{topic.author}}</div>
            </box>
            <box class="box" gap="10px" v-for="(doc, i) in topic.docList">
                <flexbox>
                    <div class="icon" @click="playMedia(doc.id)">
                        <icon type="waiting"></icon>
                    </div>
                    <div @click="playMedia(doc.id)">
                        <div style="font-size: 11pt">{{doc.title}}</div>
                        <div class="minFont gray">{{doc.size}}</div>
                    </div>
                </flexbox>
            </box>
        </group>
        <popup v-model="play.show" style="background-color: #3F3F3F;">
            <div class="popTitle">{{play.title}}</div>
            <audio v-if="play.show" id="doc" controls autoplay class="audio" :src="play.src">
                浏览器不支持audio元素
            </audio>
        </popup>
    </div>
</template>

<script>
    import {
        XHeader,
        Group,
        Box,
        Icon,
        Popup,
        Flexbox
    } from 'vux'

    import {
        cloneDeep,
        find
    } from 'lodash/'

    export default {
        components: {
            XHeader,
            Group,
            Box,
            Icon,
            Popup,
            Flexbox
        },
        data() {
            return {
                topic: {},
                play: {
                    title: '',
                    src: '',
                    show: false
                }
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
            playMedia(id) {
                let t = find(this.topic.docList, {
                    id
                })
                this.play.title = t.title
                this.play.src = t.src
                this.play.show = true
            }
        }
    }
</script>

<style lang="less" src='./DocList.less' scoped/>