# day23
- this.$store.state.xxx.属性
- Vue2组件中从vuex中获取到的数据是直接绑定到组件实例身上的data对象上的
- 使用CSS将鼠标指针样式设置为手掌; cursor: pointer; 

## 关于Vue3响应式数据
- 可以使用ref和reactive函数来创建响应式数据,但是适应类型不同
    - ref主要用于创建包装基本类型的响应式数据;例如:一个数字、字符
        - const count = ref(0)
        - const message = ref('hello')
    - reactive主要用于包装对象或者数组的响应式数据,
    ```
    const state = reactive({
        count: 0, 
        message:'hello', 
        items:['banana', 'apple', 'orange']
    })
    ```
    - 这里的state对象及其属性都是响应式的,当其中的属性值发生改变时,相关的界面
    元素也会同步更新.

## vuex中,dispatch参数的传递
- this.$store.dispatch('方法名', 携带的数据参数)
- **如果为多个参数,携带的数据参数弄成对象的形式**

## vuex中的四大属性
1. state(状态)
2. getters(获取器);允许你获取state值之前进行一些计算或处理
3. mutations(突变);用于修改State的唯一途径;其是同步函数,用于处理同步状态的变更操作
4. actions(动作);用于处理异常操作或复杂业务逻辑,在各个组件中,可以通过分发(dispatch)一个Actions,**执行异步操作**;在actions中,最终通过提交一个Mutation来修改State,

5. 调用接口的操作; actions中,可以直接解构出{ commit }, 然后满足条件以后进行commit操作,可以直接对数据进行处理,保存等
```
const actions = {
    // 获取验证码,注册
    async getCode({ commit }, { phoneNumber, type }) {
        if (type === 2) {
            const param1 = { "phone": phoneNumber }
            let result = await getVerificationCode(param1, type)
            if (result.code === 0) {
                commit('GETCODEFORREGISTER', result.data)
                return 'OK'
            } else {
                return Promise.reject(new Error('服务器异常'))
            }
        } else if (type === 3) {
            const param2 = { "phone": phoneNumber }
            let result = await getVerificationCode(param2, type)
            if (result.code === 0) {
                commit('GETCODEFORFORGETPD', result.data)
                return 'OK'
            } else {
                return Promise.reject(new Error('服务器异常'))
            }
        }
    },
    // 重设密码
    async resetPD({ commit }, user) {
        console.log(user)
        let result = await resetPassword(user)
        if (result.code === 0) {
            return 'ok'
        } else {
            return Promise.reject(new Error('服务器异常'))
        }
    },
    // 用户登录
    async userLogin({ commit }, user) {
        let result = await saveUser(user)
        if (result.code === 0) {
            let loginResult = await loginCallback(result.code)
            commit('USERLOGIN', result.data.token)
            setToken(result.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    }
}
```
6. input框中,鼠标移入,input框中的提示词消失
```
input:focus::placeholder {
    color: transparent;
}
```





