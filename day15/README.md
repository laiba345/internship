# day15
1. 没事少操作DOM,对于不同的类别,往往可以通过:class实现
2. vue模版中,template上面那一块,对于data中的值是可以直接获取的,`不需要使用this.`, 
3. 在Vue2中,要实时监听到页面宽度的变化,需要使用到`Vue中的watch`和`window.onresize`监听事件
- 一般事件监听是添加在mounted钩子上,而且当监听完成以后,需要在组件销毁之前解除事件监听
```
mounted() {
    window.addEventListener('resize', this.handleWindowResize)
}
beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowResize)
}
```
- 其中resize事件通常是用来监听页面窗口大小的
4. 密码在进行设置的时候,密码和确认密码不仅需要相同,而且要不为空,这样才能进行跳转操作;手机号和密码还需要进行相应的格式验证操作
