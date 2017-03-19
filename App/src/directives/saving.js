import Vue from 'vue'

export default {
    bind(el, binding) {
        Vue.nextTick(() => {
            el = $(el)
            el.attr('__oldValue', el.text())
        })
    },
    update(el, binding) {
        el = $(el)
        let value = el.attr('__oldValue')

        if (binding.value) {
            el.prop('disabled', true)
                .text(value + '中...')
        } else {
            el.prop('disabled', false)
                .text(value)
        }
    }
}