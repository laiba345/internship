埋点的实现
- 可以在前端中定义一个自定义指令然后进行相关操作，
- 在点击按钮处使用自定义指令，每次点击以后都会向后端发送相关请求
- 后端的接口调用可以通过axios来进行实现操作，通过来直接调用后端的接口
书写接口的时候还需要相关的参数

Vue.directive()的使用
- 是Vue.js提供的全局指令注册方法，用于创建自定义指令
- 指令是一种特殊的Vue.js特性，允许你在DOM元素上添加特定的行为和功能

1. 导入Vue和创建的指令
```
import Vue from 'vue';

// 可以自定义指令的名称，例如'custom-directive'
// 可以根据实际需要取一个更具有描述性的名字
const customDirective = {
  // 指令的生命周期钩子函数和配置
  // ...
};
```
2. 定义指令的生命周期钩子函数和配置
- 通过 bind、inserted、update、componentUpdated 和 unbind 等生命周期钩子函数，你可以在指令被绑定、插入到 DOM、更新和解绑时执行相应的逻辑。
```
const customDirective = {
  bind(el, binding, vnode) {
    // 当指令第一次绑定到元素时调用
    // 可以执行一些初始设置
  },
  inserted(el, binding, vnode) {
    // 当元素被插入到父元素时调用
    // 可以执行一些 DOM 操作
  },
  update(el, binding, vnode, oldVnode) {
    // 当元素的绑定值更新时调用
    // 可以对绑定值进行响应式处理
  },
  componentUpdated(el, binding, vnode, oldVnode) {
    // 当元素和其子组件的绑定值更新时调用
    // 可以进行更深层次的更新操作
  },
  unbind(el, binding, vnode) {
    // 当指令从元素上解绑时调用
    // 可以进行一些清理操作
  },
};
```
3. 注册自定义指令
- 在 Vue 实例初始化之前，使用 Vue.directive() 方法来注册自定义指令。这样，你的指令就可以在整个应用中使用。

4. 在模版中使用自定义指令
- 你可以在 Vue 的模板中使用自定义指令 v-custom-directive。
```
<template>
  <div>
    <!-- 使用自定义指令 -->
    <p v-custom-directive>这是一个自定义指令示例</p>
  </div>
</template>
```

总结
- 自定义指令可以用于在元素上添加特定的行为，操作DOM、实现自定义的事件处理逻辑等


JSON格式的书写
```
const buried = [
    {
        title: '登录',
        loginBuried: [
            {
                number: 501,
                text: '历史按钮',
            },
            {
                number: 600,
                text: '小红书文案',
            },
            {
                number: 601,
                text: '公众号文案',
            },
            {
                number: 602,
                text: '知乎文案',
            },
            {
                number: 603,
                text: '百家号文案',
            },
            {
                number: 604,
                text: '微博',
            },
            {
                number: 605,
                text: '大众点评',
            },
            {
                number: 1166,
                text: '浏览提示词按钮',
            },
            {
                number: 1277,
                text: '联网搜索按钮',
            },
            {
                number: 1388,
                text: '发送聊天次数',
            },
            {
                number: 1499,
                text: '富文本编辑框',
            },
        ]
    },
    {
        title: '未登录',
        unLoginBuried: [
            {
                number: 1,
                text: '历史按钮',
            },
            {
                number: 100,
                text: '小红书文案',
            },
            {
                number: 101,
                text: '公众号文案',
            },
            {
                number: 102,
                text: '知乎文案',
            },
            {
                number: 103,
                text: '百家号文案',
            },
            {
                number: 104,
                text: '微博',
            },
            {
                number: 105,
                text: '大众点评',
            },
            {
                number: 666,
                text: '浏览提示词按钮',
            },
            {
                number: 777,
                text: '联网搜索按钮',
            },
            {
                number: 888,
                text: '发送聊天次数',
            },
            {
                number: 999,
                text: '富文本编辑框',
            },
        ]
    },
];
```

- 自定义指令的实现 通过Vue.directive()来实现
```
Vue.directive('buried', {
    bind: (el, binding) => {
        const { value } = binding
        el.addEventListener('click', async () => {
            if (getUser().id) {
                // console.log('value', value, typeof value);
                const loginValue = value + 500
                await submitPoint(loginValue)
            } else {
                await submitPoint(value)
            }
        });
    }
})
```
!!! 非常需要注意的一点是:
- 编写好自定义指令以后，需要将其导入到师main.js中进行全局引入操作
import '@/directives/buried'
