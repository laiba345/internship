<template>
  <div class="person">
    <div class="child1">
      <personWorkspace />
    </div>
    <div class="child2">
      <otherWorkSpace />
    </div>
    <div class="child3">
      <logOut />
    </div>
  </div>
</template>

<script>
import personWorkspace from "./personMessageChild/personWorkspace.vue";
import otherWorkSpace from "./personMessageChild/otherWorkSpace.vue";
import logOut from "./personMessageChild/logOut.vue";
export default {
  name: "personMessage",
  components: { personWorkspace, otherWorkSpace, logOut },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  created() {},
};
</script>

<style lang="less" scoped>
// .person {
//   display: flex;
//   flex-direction: column;
//   position: fixed;
//   border: 1px solid #ccc;
//   bottom: 89px;
//   left: 33px;
//   width: 241px;
//   height: 414px;
//   z-index: 9999;
//   .child1 {
//     height: 171px;
//   }
//   .child2 {
//     height: 176px;
//   }

//   .child3 {
//     height: 67px;
//   }
// }
.person {
  display: flex;
  flex-direction: column;
  height: 412px; /* 设置容器高度 */
  width: 238px;
  border: 1px solid #ccc;
  position: fixed;
  bottom: 89px;
  left: 33px;

  .child1 {
    // flex-basis: 35%;
    height: 168px;
    background-color: white;
  }

  .child2 {
    // flex-basis: 45%;
    height: 176px;
    background-color: white;
  }

  .child3 {
    // flex-basis: 20%;
    height: 68px;
    background-color: white;
  }
}
</style>
