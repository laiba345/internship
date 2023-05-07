<template>
  <div class="main animated fadeIn">
    <div class="nav">
      <div class="top-nav-box">
        <div class="logo">
          <span>copy</span>
          <span>.</span>
          <span>ai</span>
        </div>
        <div class="scroll-bar" :style="`--offset: ${getNavOffset}px;`" />
        <div class="top-nav">
          <div
            @click="active(o, i, activeIndex)"
            :class="topNavItemClass(i)"
            v-for="(o, i) in topNav"
            :key="i"
          >
            <i :class="['iconfont', o.icon]" />
            <span>{{ o.title }}</span>
          </div>
        </div>
        <div class="bottom-nav">
          <div
            @click="active(o, i + topNav.length)"
            :class="bottomItemClass(i)"
            v-for="(o, i) in bottomNav"
            :key="i + topNav.length"
          >
            <i :class="['iconfont', o.icon]" />
            <span>{{ o.title }}</span>
          </div>
        </div>
      </div>
      <div class="invite center">
        <span>邀请团队成员</span>
        <i class="iconfont icon-yonghu1" />
        <i class="iconfont icon-jia" />
      </div>
      <div class="studio center" @click="PopPersonMessage">
        <div class="round center">KW</div>
        <div class="guard">
          <span>守护者工作区</span>
          <span>免费计划</span>
        </div>
        <i class="iconfont icon-zhankaishangxia" />
      </div>
    </div>
    <div class="body">
      <div class="body-top center">
        <div class="clear center" @click="clear">
          <i class="iconfont icon-shuaxin" />
          <span>清除聊天</span>
        </div>
        <div class="right center">
          <span class="new-add">新增功能</span>
          <div class="k center">K</div>
          <div class="upgrade center">
            <i class="iconfont icon-24gf-gear4">
              <i class="iconfont icon-duigou" />
            </i>
            <span>升级到专业版</span>
          </div>
        </div>
      </div>
      <transition enter-active-class="animated fadeIn">
        <router-view class="chat" />
      </transition>
      <span class="iconfont icon-tuichu"></span>
    </div>
    <TemplateDialog ref="dialog" />
    <personMessage v-if="isShowPersonMessage" />
  </div>
</template>

<script>
import personMessage from '@/components/dialog/personMessage/personMessage.vue'
export default {
  name: 'Main_APP',
  components: { personMessage },
  data() {
    return {
      isShowPersonMessage: false,
      activeIndex: 0,
      oldIndex: -1,
      topNav: [
        {
          id: 0,
          title: '聊天',
          router: '/chat',
          icon: 'icon-xiaoxi1',
        },
        {
          id: 1,
          title: '模板',
          router: '',
          icon: 'icon-moban',
        },
        {
          id: 2,
          title: '工具',
          router: '',
          icon: 'icon-gongju',
        },
      ],
      bottomNav: [
        {
          id: 3,
          title: '项目',
          router: '/project',
          icon: 'icon-wj-wj-2',
        },
        {
          id: 4,
          title: '信息库',
          router: '/info-db',
          icon: 'icon-shujuku',
        },
      ],
    }
  },
  methods: {
    active(o, i, oldIndex) {
      this.oldIndex = oldIndex
      this.activeIndex = i
      if (i === 1) {
        return this.openTemplate()
      }
      return o.router && this.$router.push(o.router)
    },
    clear() {
      this.$bus.$emit('clear')
    },
    openTemplate() {
      return this.$refs.dialog.open()
    },
    topNavItemClass(i) {
      return this.activeIndex === i ? ['item', 'active'] : ['item']
    },
    bottomItemClass(i) {
      return this.activeIndex === i + this.topNav.length
        ? ['item', 'active']
        : ['item']
    },
    PopPersonMessage() {
      if (this.isShowPersonMessage == false) {
        this.isShowPersonMessage = true
      } else {
        this.isShowPersonMessage = false
      }
    },
  },
  computed: {
    getNavOffset() {
      return this.activeIndex <= 2
        ? 46 + 42 * this.activeIndex
        : 46 + 12 + 16 + 42 * this.activeIndex
    },
  },
  created() {
    this.$bus.$on('setOldIndex', (i) => (this.oldIndex = i))
    this.$bus.$on('returnIndex', (i) => (this.activeIndex = i || this.oldIndex))
    this.$bus.$on('openTemplate', () => this.openTemplate())
  },
}
</script>

<style lang="less" scoped>
.main {
  display: flex;

  .nav {
    display: flex;
    flex-direction: column;
    width: 256px;
    height: 100vh;
    background-color: #f9fafc;
    border-right: 1px solid #dcdfe6;
    padding: 24px 0 0 28px;

    .logo {
      margin-left: 18px;

      span {
        font-size: 32px;
        font-weight: 600;
        color: #340c65;

        &:nth-child(2) {
          color: #47b9b6;
        }
      }
    }

    .scroll-bar {
      position: absolute;
      left: 0;
      width: 12px;
      height: 36px;
      border-radius: 8px;
      background-color: #005252;
      transition: all 0.2s ease-in-out;
      transform: translate(-50%, var(--offset));
    }
    .top-nav-box {
      flex: 1;
    }

    .top-nav {
      width: 90%;
      margin-top: 36px;
      padding-bottom: 12px;
      border-bottom: 1px solid #dcdfe6;
    }

    .bottom-nav {
      width: 90%;
      margin-top: 16px;
    }

    .item {
      display: flex;
      align-items: center;
      height: 44px;
      cursor: pointer;
      border-radius: 8px;
      transition: all 0.1s linear;

      i {
        font-size: 16px;
        margin: 0 8px 0 16px;
        color: #005252;
      }

      .icon-xiaoxi1 {
        font-size: 18px;
      }

      span {
        font-size: 14px;
        color: #545559;
      }

      &:hover {
        background-color: #f2f6fc;
      }
    }

    .active {
      transition: all 0.1s linear;
      background-color: #f2f6fc;

      &:hover {
        background-color: #f2f6fc;
      }
    }

    .invite {
      margin: 0 auto;
      width: 180px;
      height: 38px;
      border-radius: 8px;
      border: 1px solid #e4e7ed;
      cursor: pointer;
      transform: translateX(-6%);

      span {
        font-size: 12px;
        color: #340c65;
      }

      .icon-yonghu1 {
        font-size: 18px;
        margin-left: 8px;
      }

      .icon-jia {
        color: #340c65;
        font-size: 6px;
        transform: translate(-50%, -26%) scale(0.5);
      }

      &:hover {
        background-color: #ebeef5;
      }
    }

    .studio {
      margin: 32px 0 24px;
      cursor: pointer;

      .round {
        width: 36px;
        height: 36px;
        border-radius: 100%;
        border: 1px solid #909399;
        color: #606266;
        font-size: 14px;
      }

      .guard {
        margin-left: 12px;

        span {
          display: block;

          &:first-child {
            font-size: 14px;
            font-weight: 700;
            color: #340c65;
          }

          &:last-child {
            font-size: 12px;
            color: #909399;
          }
        }
      }

      .icon-zhankaishangxia {
        margin: 0 16px 0 52px;
        font-size: 18px;
        font-weight: 600;
        color: #606266;
      }
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100vh;

    .body-top {
      width: 100%;
      height: 56px;
      border-bottom: 1px solid #dcdfe6;
      justify-content: space-between;

      .clear {
        width: 110px;
        height: 28px;
        margin-left: 36px;
        border-radius: 4px;
        cursor: pointer;
        border: 1px solid #dcdfe6;
        background-color: #f1f5f6;

        i {
          color: #a1a4a9;
          font-size: 14px;
          font-weight: 700;
        }

        span {
          font-size: 14px;
          margin-left: 8px;
          color: #606266;
        }

        &:hover {
          i {
            color: #606266;
          }

          span {
            color: #303133;
          }
        }
      }

      .right {
        .new-add {
          font-size: 15px;
          color: #606266;
          margin-right: 32px;
          cursor: pointer;
        }

        .k {
          width: 32px;
          height: 32px;
          margin-right: 20px;
          border-radius: 100%;
          font-size: 14px;
          cursor: pointer;
          background-color: #0096a6ff;
          color: #e7e5e5;
        }

        .upgrade {
          width: 136px;
          height: 40px;
          margin-right: 18px;
          border-radius: 4px;
          cursor: pointer;
          background-color: #372868;

          .icon-24gf-gear4 {
            color: white;
            font-size: 16px;
          }

          .icon-duigou {
            position: absolute;
            color: #372868;
            font-size: 8px;
            border-radius: 100%;
            font-weight: 900;
            background-color: white;
            transform: translate(-120%, 24%) scale(0.9);
          }

          span {
            margin-left: 8px;
            font-size: 12px;
            color: white;
          }
        }
      }
    }

    .chat {
      flex: 1;
    }
  }
}
</style>
