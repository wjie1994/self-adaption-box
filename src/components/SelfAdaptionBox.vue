<!-- 自适应 盒子 -->
<template>
  <div ref="container"
       class="self-adaption-box">
    <template v-if="ready">
      <slot></slot>
    </template>
  </div>
</template>

<script>
import { debounce } from '@/utils/debundce'

export default {
  name: 'SelfAdaptionBox',
  props: {
    /**
     * 设计图 容器宽度
     */
    width: {
      type: Number,
      default: 0
    },
    /**
     * 设计图 容器高度
     */
    height: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      // 容器 ref
      dom: null,
      // 容器的宽
      realWidth: '',
      // 容器的高
      realHeight: '',
      // 屏幕的宽
      originalWidth: '',
      // 屏幕的高
      originalHeight: '',
      // 是否已经准备好
      ready: false
    }
  },
  computed: {
    _onResize () {
      return debounce(this.onResize, 300)
    }
  },
  async mounted () {
    this.ready = false
    await this.init()
    this.updateSize()
    this.updateScale()
    window.addEventListener('resize', this._onResize)
    let observer = new MutationObserver(this.onResize)
    observer.observe(this.dom, {
      attributes: true,
      attributeFilter: ['style'],
      attributeOldValue: true
    })
    this.$once('hook:beforeDestroy', () => {
      window.removeEventListener('resize', this._onResize)
      if (observer) {
        observer.disconnect()
        observer.takeRecords()
        observer = null
      }
    })
    this.ready = true
  },
  methods: {
    async onResize () {
      await this.init()
      this.updateScale()
    },
    /**
     * 初始化
     */
    async init () {
      await this.$nextTick()
      this.dom = this.$refs.container
      const {
        width,
        height
      } = this
      if (width && height) {
        this.realWidth = width
        this.realHeight = height
      } else {
        this.realWidth = this.dom.clientWidth
        this.realHeight = this.dom.clientHeight
      }
      if (!this.originalWidth || !this.originalHeight) {
        this.originalWidth = window.screen.width
        this.originalHeight = window.screen.height
      }
    },
    /**
     * 更新style
     */
    updateSize () {
      const {
        realWidth,
        realHeight,
        originalWidth,
        originalHeight
      } = this
      let domWith, domHeight
      if (realWidth && realHeight) {
        domWith = realWidth + 'px'
        domHeight = realHeight + 'px'
      } else {
        domWith = originalWidth + 'px'
        domHeight = originalHeight + 'px'
      }
      this.dom.style.width = domWith
      this.dom.style.height = domHeight
    },
    /**
     * 更新缩放
     */
    updateScale () {
      const {
        realWidth,
        realHeight,
        originalWidth,
        originalHeight
      } = this
      const viewportWidth = document.body.clientWidth
      const viewportHeight = document.body.clientHeight
      const boxWidth = realWidth || originalWidth
      const boxHeight = realHeight || originalHeight
      this.dom.style.transform = `scale(${viewportWidth / boxWidth}, ${viewportHeight / boxHeight})`
    }
  }
}
</script>

<style lang="less"
       scoped>
.self-adaption-box {
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  transform-origin: left top;
}
</style>
