# day40
- 上午没来;看看晚上能不能补上;

## 注意点;
1. vuex中的mutation; 
    - 直接对state中的数据进行操控;
    - **可以对state中的数据进行操控**
    ```
    GETTEMPLATEDATA(state, templateData) {
        state.templateData = templateData
    }
    ```
2. web前端中往往对数据进行相关的处理都是通过那几个数组方法; 见js文件

3. vuex中的actions文件中, 可以结构出{ commit, dispatch }
    - commit用于对state中的数据进行操控
    - dispatch用于调用本次vuex中,其他位置上的actions方法;

4. 计算属性; 
    - 只要依赖的内容发生了改变,计算属性的值就能够获取到

5. 监视属性
    - 监视属性watch也可以对计算属性中的值进行监视
    - **监视属性往往可以用于监视的属性发生了改变,然后执行某种逻辑**
        - 因为在子组件中点击某个按钮,父组件中的数据没有实时更新,就需要用到监视属性,当监视到的属性,改变了,就执行某个方法执行;渲染页面的相关操作

6. 需要判断某个数组中是否存在某个值,如果是的话,返回true否则返回false,并将该值传送给子组件

7. 子组件收到复组件传递过来的props数据;可以使用对象的形式进行书写;
- 以对象的形式来进行展示操作(对象里面也是一个个新的对象,每个对象有很多属性,比如类型、默认值等)
```
  props: {
    width: {
      type: Number,
      default: 221,
    },
    height: {
      type: Number,
      default: 192,
    },
    icon: {
      type: String,
      default: 'icon-gengduo'
    },
    title: {
      type: String,
      default: '案例研究概述'
    },
    content: {
      type: String,
      default: '聚焦客户以展示使用您的产品或服务的巨大成果。'
    },
    active: {
      type: Boolean,
      default: false
    },
    templateId: {
      type: String,
      default: "001"
    },
    nav: {
      type: Array,
      default: []
    },
    lickTempData: {
      type: Array,
      default: [],
    },
    isCollect: {
      type: Boolean,
      default: false
    },
  },
```
8. 你点击事件在子组件上,那就一定要在子组件上书写相关的点击逻辑;

9. **在Vuex中存了点击某个按钮进行收藏的功能**
- 其实就是将某个模版的tempId保存到一个数组当中;
  - 因为Vuex中的数据在别的地方也能拿到;
- 然后在TemplateBox组件中进行获取操作; 因为每次点击icon; TempDataID都会改变,
所以需要在TemplateBox组件中,**实时监视TempDataID数组**, 通过监视该值来决定
this.isCollect的值;

```
watch: {
    immediate: true,
    TempDataID(newValue, _) {
      // 判断每一个ID,根据每一个ID是否是TempDataID中的一个来判断isCollect的值;
      this.isCollect = newValue.includes(this.templateId) ? true : false
    }
  },
```

10. @click.stop 
- 用于事件处理的修饰符之一,用于**阻止事件继续传播,即停止事件冒泡**;
- 比如;点击某个收藏按钮;不会影响到大框框外面的东西;

11. 如果想要动态展示某种类型的话,可以使用class类型的**动态写法**;
```
:class="['iconfont', isCollect ? 'icon-xingxingshixin' : 'icon-xingxingkongxin']"
```

12. 在vuex中书写接口方法的时候; **需要观察接口需要传入的数据是什么**;
数据要么在actions方法中解构成后端接口的形式; 要么在组件中dispatch
调用vuex中的actions中的方法时候进行参数的调整;
- 将键值调整成后端需要的样子;
```
try {
    // 相关的数据都是可以从this中解构出来;
    const { iphoneNumber, veriStr, newPd } = this
    // 相关的键名,其实和后端的设置有很大关系;而且密码通常都是经过是哈希过的
    const user = { phone: iphoneNumber, code: veriStr, password: AES.hashPassword(newPd) }
    await this.$store.dispatch("resetPD", user)
} catch (error) {
    console.log(error.message)
}
// 通常我们会在完成相关的操作以后,进行路由的跳转操作
this.$router.push({ name: "chat" })
```