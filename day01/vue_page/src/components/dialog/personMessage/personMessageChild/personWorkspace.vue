<template>
  <div class="all">
    <div class="up">
      <span class="text_style">{{ testEmail }}</span>
      <span class="iconfont icon-yonghu1 icon"></span>
    </div>
    <div class="middle_up">
      <span class="iconfont icon-yonghu1 icon1"></span>
      <div class="text">
        <span class="text_up">个人工作区</span>
        <span class="text_down">Copy.ai高级版</span>
      </div>
      <span class="iconfont icon-duigou"></span>
    </div>
    <div class="middle_down">
      <span class="iconfont icon-yonghu1 icon1"></span>
      <div class="text">
        <span class="text_up">个人工作区</span>
        <span class="text_down">免费计划</span>
      </div>
    </div>

    <div class="down">
      <span>使用其他账户登陆</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "personWorkspace",
  data() {
    return {
      testEmail: "taoxin9757731@163.com",
    };
  },
  methods: {},
  computed: {},
  created() {},
};
</script>

<style lang="less" scoped>
.all {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 238px;
  height: 168px;
  .up {
    width: 238px;
    height: 32px;
    padding: 8px 16px;
    .text_style {
      font-size: 12px;
      color: #747f85;
    }
    .icon {
      margin-left: 60px;
    }
  }
  .middle_up {
    width: 206px;
    height: 36px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    flex-direction: row;
    .icon-duigou {
      margin-left: 80px;
    }
    .text {
      display: flex;
      flex-direction: column;
      margin-left: 14px;
      .text_up {
        font-size: 14px;
        color: #000000;
      }
      .text_down {
        font-size: 12px;
        color: rgb(119, 128, 133);
      }
    }
  }
  .middle_up:hover {
    background-color: rgb(250, 251, 253);
  }
  .middle_down {
    width: 206px;
    height: 36px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    flex-direction: row;
    .text {
      display: flex;
      flex-direction: column;
      margin-left: 14px;
      .text_up {
        font-size: 14px;
        color: #000000;
      }
      .text_down {
        font-size: 12px;
        color: rgb(119, 128, 133);
      }
    }
  }

  .middle_down:hover {
    background-color: rgb(250, 251, 253);
  }
  .down {
    width: 206px;
    height: 16px;
    padding: 8px 16px;
    // margin-top: 8px;
    // margin-left: 14px;
    // margin-bottom: 5px;
    font-size: 12px;
    color: rgb(119, 128, 133);
  }

  .down:hover {
    background-color: rgb(250, 251, 253);
  }
}
</style>
