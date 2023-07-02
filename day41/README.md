# day41
1. 加班,方便后面调休

2. 注册成功以后,跳转到首页,**并自动登录**
- 想要自动登录,就是跳转到首页之前将注册成功返回的token,设置到浏览器中即可
```
setToken(this.$store.state.user.token)
this.$router.push({ name: "chat" })
```
- 其中,这个token是来自vuex中的token,
```
// 用户登录
async userLogin({ commit }, user) {
    let result = await saveUser(user)
    if (result.code === 0) {
        let loginResult = await loginCallback(result.code)
        commit('USERLOGIN', result.data)
        // setToken(result.data.token)
        return 'ok'
    } else {
        return Promise.reject(new Error('fail'))
    }
}
```

3. Vue中的**双击事件**操作
- 使用 @dblclick
```
<template>
  <div>
    <button @dblclick="handleDoubleClick">双击我</button>
  </div>
</template>

<script>
  export default {
    methods: {
      handleDoubleClick() {
        // 双击事件的处理逻辑
        console.log("双击事件触发！");
      }
    }
  }
</script>
```

4. 子组件调用父组件的方法;
- 某些一个个的空格在子组件身上,子组件身上的双击事件,然后触发父组件身上的方法,可以通过自定义事件来进行处理;
```
父组件
<TemplateBox @goTemplate="createProject"/>

子组件
<div :style="`width: ${width}px;height: ${height}px;`" :class="mainClass" @dblclick="goTemplate"></div>

methods: {
  goTemplate() {
    this.$emit('goTemplate')
  }
},
```
5. 模版切换以后,内容还在
- 使用watch属性来监视模版内容,一旦模版内容发生改变,将input和textarea框中的内容清除;
