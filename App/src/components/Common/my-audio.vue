<template>
    <div>
        <audio controls :autoplay="auto" :style="{width: width}" :src="src" :status="status">
            浏览器不支持audio元素
        </audio>
    </div>
</template>

<script>
    export default {
        props: {
            auto: String,
            src: String,
            width: String,
            status: String
        },
        mounted() {
            this._player = this.$el.querySelector('audio')
        },
        created() {},
        watch: {
            status(newVal, oldVal) {
                this.playMedia()
            },
            src(newVal, oldVal) {}
        },
        methods: {
            playMedia() {
                let player = this._player
                switch (this.status) {
                    case 'play':
                        // if (player.readyState != 4) {
                        //     setTimeout(() => this.playMedia(), 1000)
                        //     return
                        // }
                        player.play()
                        break
                    case 'pause':
                        player.pause()
                        break
                    case 'stop':
                        player.currentTime = 0
                        player.pause()
                        break
                    case 'replay':
                        player.currentTime = 0
                        player.play()
                        break
                }
            }
        }
    }
</script>