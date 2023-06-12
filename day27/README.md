# day27

1. 为了页面能够更加的美观,通常将滚动条进行隐藏操作;操作;当然父标签中需要写上overflow-y:auto;
```
&::-webkit-scrollbar {
    width: 0px;
}
```
2. 想要根据浏览器窗口大小,实时检测窗口大小,根据窗口大小动态判断某个图标是否展示等
    - 首先在data中定义一个变量
    - 在组件进行挂载的时候,
    ```
    mounted() {
        window.addEventListener('resize', this.handleWindowResize)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleWindowResize);
    },
    ```
    - 定义的该方法,在methods中进行书写;将页面中的窗口大小随时更新到data数据中
    ```
    handleWindowResize() {
      this.pageWidth = window.innerWidth
    }
    ```
    - 通过watch来进行监视操作;**而且,三元运算符往往可以代替if...else...语句**
    ```
    watch: {
        pageWidth(newValue, _) {
            this.isShowXiaLa = newValue < 1400 ? false : true
        }
    },
    ```
3. computed计算属性获得的结果,最后是会挂载在组件实例身上,类似挂载在data上的数据
