<template>
  <div v-show="show && tips" :class="mainClass">
    {{ tips }}
  </div>
</template>

<script>
export default {
  name: "SimpleTips",
  data() {
    return {
      tips: '',
      show: false,
      hide: false,
      shotTimeout: null,
      hideTimeout: null
    }
  },
  methods: {
    open(tips) {
      this.tips = tips
      this.show = true
      this.hide = false
      clearTimeout(this.shotTimeout)
      clearTimeout(this.hideTimeout)
      this.shotTimeout = setTimeout(() => {
        this.hide = true
        this.hideTimeout = setTimeout(() => {
          this.show = false
        }, 1000 * 2)
      }, 1000 * 2)
    }
  },
  computed: {
    mainClass() {
      return ['simple-tips-main', 'p-center', !this.hide ? '' : 'hide']
    }
  }
}
</script>

<style lang="less" scoped>
.simple-tips-main {
  top: 46%;
  opacity: 1;
  transform: translate(-50%, -50%);
  padding: 12px 24px;
  background-color: #606266;
  border-radius: 8px;
  font-size: 16px;
  color: white;
}

.hide{
  animation: hide 2s linear forwards;
}

@keyframes hide {
  100%{
    opacity: 0;
  }
}
</style>