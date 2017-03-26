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
            <my-audio v-show="play.id == doc.id" v-for="(doc, i) in play.list" width="100%" :src="doc.src" :status="doc.status">
            </my-audio>
        </popup>
         <toast v-model="net.show" :time="1500" type="text" width="15em">{{net.tip}}</toast>
    </div>
</template>

<script>
    import {
        XHeader,
        Group,
        Box,
        Icon,
        Popup,
        Flexbox,
        Toast
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
            Toast,
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
                },
                net: {
                    conn: null,
                    show: false,
                    tip: '',
                    isTip: false,
                    oldType: ''
                }
            }
        },
        created() {
            if (this.$store.getters.topicList.length == 0) {
                this.$router.push('/Auth')
                return
            }

            this.topic = cloneDeep(find(this.$store.getters.topicList, {
                id: this.$route.query.id
            }))

            this.listenConnStatus()
        },
        computed: {},
        methods: {
            playMedia(id) {
                // 第一次播放提示网络连接
                if (!this.net.isTip) {
                    this.alertConnStatus(true)
                    this.net.isTip = true
                }

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
            },
            alertConnStatus(passWifi) {
                if (!this.net.conn) {
                    return
                }

                if (this.net.oldType == this.net.conn.type) {
                    return
                }
                this.net.oldType = this.net.conn.type

                let tip = ''
                switch (this.net.conn.type) {
                    case 'wifi':
                        if (passWifi != true) {
                            tip = '当前网络使用wifi'
                        }
                        break
                    case 'cellular':
                        tip = '当前网络使用2G/3G/4G'
                        break
                    case 'none':
                        tip = '无网络连接'
                        break
                    case 'other':
                    case 'unknown':
                        tip = '未知的网络连接'
                        break
                }

                if (tip) {
                    this.net.tip = tip
                    this.net.show = true
                }
            },
            listenConnStatus() {
                this.net.conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection

                // 监听网络连接 
                if (this.net.conn) {
                    this.net.conn.addEventListener('typechange', this.alertConnStatus, false)
                }
            }
        },
        beforeDestroy() {
            if (this.net.conn) {
                this.net.conn.removeEventListener('typechange', this.alertConnStatus, false)
            }
        }
    }
</script>

<style lang="less" src='./DocList.less' scoped/>