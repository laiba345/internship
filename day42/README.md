# day42
1. 模版部分的倒计时设置
2. 监听滚动事件;
  - 可以通过ref = "msg"拿到具体的元素; 
  - 通过@scroll="xxx" 来绑定滚动的相关方法操作
3. 通过; 
  - this.$refs.msgs.scrollTop 来获取滚轮的距离;
  - 滚动方法; 滚动到相应的位置;
  ```
  scrollTop() {
    this.$refs.topMag.scrollIntoView({
      behavior:'smooth', // 平滑滚动
    })
  }
4. 点击一下出现倒计时; 实现起来其实就是根据点击某个部分,用来判断某个关键的部分是否出现问题; 通过某一个变量来进行判断操作; 