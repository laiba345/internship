# day33
1. 数组的两种使用方式
2. 学习华工的linux命令
3. 导航栏左边的菜单是通过activeIndex属性来决定的
    - 在跳转的时候需要精准跳转的时候,需要及时定位activeIndex的值
4. 父子组件通信**最简单的形式**是通过props来传递属性操作的;
- 父组件中,通过在子组件标签上定义属性来传递数据
```
<template>
    <div>
        <child-component :message="message"></child-component>
    </div>
</template>
```
- 子组件中,通过props选项来声明接收的属性.
```
<template>
    <div>
        <p>{{ message }}</p >
    </div>
</template>

<script>
export default {
        props: ['message']
    }
</script>
```
- 子组件可以像本地数据一样使用props属性

5. 如果某些属性每次点击都会重复计算,导致效果不行,需要每次运行的时候将存储数据的结构重置
```
this.userCollect = []
```
6. Vue项目中,刷新页面后,页面中操作的数据信息被重置了怎么进行处理?
- 解释: Vue.js中的数据是存储在内存中的, 而不是**持久化保存在页面或服务器上**, 
- 如果希望在页面刷新之后保留数据,方法
    - 1、使用浏览器的本地存储(LocalStorage)或会话存储(SessionStorage);
    在组件的生命周期钩子(created)中,把数据保存到本地存储或会话存储中,在页面加载时,从存储中读取数据并重新设置到组件中
    ```
    // 在created钩子中保存数据到本地存储
    created() {
        const data = JSON.stringify(this.yourData);
        localStorage.setItem('yourData', data);
    },

    // 在mounted钩子中从本地存储中恢复数据
    mounted() {
        const data = localStorage.getItem('yourData');
        if (data) {
            this.yourData = JSON.parse(data);
        }
    }
    ```
    - **使用后端服务器进行数据持久化**: 如果需要将数据保留在多个会话或多个浏览器中,可以将数据存储在后端服务器上(**数据库**). 当页面刷新时,从服务器重新加载数据并将其传递给Vue组件
    - 利用路由状态管理：如果你在Vue项目中使用了Vue Router，你可以通过路由状态管理来保留数据。将数据存储在Vue Router的路由状态中，当页面刷新时，Vue Router可以帮助你恢复路由状态并将数据重新注入组件。

7. js中的数组方法
- forEach()方法; 用于对数组中的每个元素执行指定的操作或回调函数
- **forEach()方法不会改变原始数组,而是对数组中的每个元素应用指定的函数**
- arr.forEach((item, index) => {}) 通常是这种函数回调的形式;

