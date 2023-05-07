<template>
  <div class="logOut">
    <div class="logOutChild">
      <div class="spanInner">
        <span class="iconfont icon-dengchu_0 icon"></span>
        <span class="log">登出</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "layOut",
  data() {
    return {};
  },
  methods: {},
  computed: {},
  created() {},
};
</script>

<style lang="less" scoped>
.logOut {
  height: 82px;
  /* 可选项 */
  border-top: 1px solid #ccc;
  .logOutChild {
    width: 222px;
    height: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;
    vertical-align: middle;
    margin-top: 16px;
    margin-left: 10px;
    .spanInner {
      padding: 8px 12px;
      .icon {
        margin: 0px 8px 0px 0px;
      }
      .log {
        margin-left: 14px;
        font-size: 14px;
        color: #000000;
      }
    }
  }
  .logOutChild:hover {
    background-color: rgb(250, 251, 253);
  }
}
</style>
