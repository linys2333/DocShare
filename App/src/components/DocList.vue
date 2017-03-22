<template>
    <div>
        <x-header style="background-color:#000;">我爱学习</x-header>
        <group gutter="0">
            <box slot="after-title" gap="10px">
                <p>{{topic.title}}</p>
                <div class="minFont"><span class="gray">作者：</span>{{topic.author}}</div>
            </box>
            <div class="box" v-for="(doc, i) in topic.docList" @click="playMedia(doc.id)">
                <flexbox>
                    <div class="icon">
                        <icon type="waiting"></icon>
                    </div>
                    <div>
                        <div style="font-size: 11pt">{{doc.title}}</div>
                        <div class="minFont gray">{{doc.size}}</div>
                    </div>
                </flexbox>
            </div>
        </group>
        <popup v-model="play.show" on-hide="pauseMedia" style="background-color: #3F3F3F;">
            <div class="popTitle">{{play.title}}</div>
            <audio v-show="play.id == doc.id" v-for="(doc, i) in play.list" controls autoplay class="audio" :src="doc.src">
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
                    id: '',
                    show: false,
                    list: []
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
                this.play.id = t.id

                if (!find(this.play.list, {
                        id: t.id
                    })) {
                    this.play.list.push({
                        id: t.id,
                        src: t.src
                    })
                }

                this.play.show = true
            },
            pauseMedia() {

            }
        }
    }
</script>

<style lang="less" src='./DocList.less' scoped/>