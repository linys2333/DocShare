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
        <popup v-model="play.show" @on-hide="pauseMedia()" style="background-color: #3F3F3F;">
            <div class="playTitle">{{play.title}}</div>
            <my-audio v-show="play.id == doc.id" v-for="(doc, i) in play.list" width="100%" :src="doc.src" auto='autoplay' :status="doc.status">
            </my-audio>
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

    import MyAudio from './Common/my-audio'

    import {
        cloneDeep,
        find,
        forEach
    } from 'lodash/'

    export default {
        components: {
            XHeader,
            Group,
            Box,
            Icon,
            Popup,
            Flexbox,
            MyAudio
        },
        data() {
            return {
                topic: {},
                play: {
                    title: '',
                    id: '',
                    show: false,
                    status: '',
                    list: []
                }
            }
        },
        created() {
            if (this.$store.getters.topicList.length == 0) {
                this.$store.dispatch('getTopicList')
                    .then(() => {
                        this.topic = cloneDeep(find(this.$store.getters.topicList, {
                            id: this.$route.query.id
                        }))
                    })
                    //this.$router.go(-1)
                    //return
            } else {
                this.topic = cloneDeep(find(this.$store.getters.topicList, {
                    id: this.$route.query.id
                }))
            }

        },
        computed: {},
        methods: {
            playMedia(id) {
                let t = find(this.topic.docList, {
                    id
                })

                this.play.title = t.title
                this.play.id = t.id

                // 加入播放列表
                let doc = find(this.play.list, {
                    id: t.id
                })
                if (!doc) {
                    doc = {
                        id: t.id,
                        src: t.src,
                        status: 'play'
                    }
                    this.play.list.push(doc)
                } else {
                    doc.status = 'play'
                }

                this.play.show = true
                doc.status = 'play'
            },
            pauseMedia() {
                forEach(this.play.list, (val) => {
                    val.status = 'pause'
                })
            }
        }
    }
</script>

<style lang="less" src='./DocList.less' scoped/>