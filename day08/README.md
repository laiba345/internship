# day08
- 手风琴菜单的实现往往布局都是从上而下布局,对于点击某个按钮通过v-if来选择对整个模块的显示与隐藏
- 对某个值进行每次取反操作
```
this.isShow = !isShow
```
- 对某个元素的类名进行切换,以根据类名来展示两种不同的形态
    - 先获取元素,可以使用ref,也可以使用原生操作DOM的方法
    ```
    let icon = document.getElementById('icon')
    ```
    - 切换类名的方法
    ```
    icon.classList.toggle('rotate')
    ```
