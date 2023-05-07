<template>
  <div class="otherWork">
    <div class="container">
      <div class="block">
        <span class="iconfont icon-tianjia icon"></span>
        <span class="text">新工作区</span>
      </div>
      <div class="block">
        <span class="iconfont icon-dingyue icon"></span>
        <span class="text">订阅</span>
      </div>
      <div class="block">
        <span class="iconfont icon-gongju icon"></span>
        <span class="text">工作区设置</span>
      </div>
      <div class="block">
        <span class="iconfont icon-shiyan icon"></span>
        <span class="text">实验室</span>
        <span class="experiment">实验性的</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "otherWorkSpace",
  data() {
    return {};
  },
  methods: {},
  computed: {},
  created() {},
};
</script>

<style lang="less" scoped>
.otherWork {
  border-top: 1px solid #ccc;
  .container {
    display: flex;
    flex-direction: column;
    width: 222px;
    height: 144px;
    padding: 8px 12px;
    margin-top: 6px;
    .block {
      // width: 222px;
      // height: 36px;
      display: flex;
      padding: 8px 12px;
      display: flex;
      flex: 1;
      align-items: center;
      vertical-align: middle;
      // margin-left: 40px;
      // margin-bottom: 6px;
      .icon {
        margin: 0px 8px 0px 0px;
      }
      .text {
        margin-left: 14px;
        font-size: 14px;
        color: #000000;
      }
      .experiment {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70px;
        height: 20px;
        color: #005252;
        font-size: 12px;
        background-color: #edfdfa;
        margin: 0px 0px 0px 12px;
        padding: 0px 12px;
        border-radius: 10px;
      }
    }
  }
  .container .block:hover {
    /* 在鼠标悬停在.block元素上时应用的样式 */
    background-color: rgb(250, 251, 253);
  }
}
</style>
