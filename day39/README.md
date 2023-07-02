# day39
- 模版收藏功能的完成; 很多东西需要学习; 
- 在vuex中, 如果想要在某个动作之后,获取到最新的数据, 需要在某个步骤以后重新发送数据的操作,这一点非常关键


**pinia中的操作手段**
- 直接通过this.xxx方法来进行调用操作； 
```
actions: {
    async postUsersListAction(queryInfo: any) {
      const usersListResult = await postUsersListData(queryInfo)
      const { totalCount, list } = usersListResult.data
      this.usersTotalCount = totalCount
      this.usersList = list
    },
    async deleteUserByIdAction(id: number) {
      // 1.删除数据操作
      const deleteResult = await deleteUserById(id)
      console.log(deleteResult)

      // 2.重新请求新的数据
      this.postUsersListAction({ offset: 0, size: 10 })
    },
```
**vuex中的操作手段** -- 因为不仅可以解构出commit还可以解构出dispatch
- 通过actions中的方法参数，解构出dispatch来进行调用相关的方法；
```
// 收藏模板
async collectTemplate({ commit, dispatch }, tempId) {
    let result = await lickTemp(tempId)
    // console.log(result)
    if (result.code === 0) {
        dispatch('getLickTempData')
    } else {
        return Promise.reject(new Error('服务器异常'))
    }
},
```
- Vue2中, 模版渲染和计算属性的执行顺序是在**mounted**生命周期钩子之后执行的; 
在mounted钩子中,Vue实例已经被挂载到DOM,并且模版已经渲染完毕了

- created: 在Vue实例被创建后立即调用。在这个阶段，实例已完成数据观测、属性和方法的运算，但是尚未开始DOM编译和挂载。
    - 已经可以拿到计算属性中的值，
- 请注意，**如果你在计算属性中依赖了异步数据（例如通过API请求获取的数据），则计算属性的值可能在mounted钩子之前不可用。在这种情况下，你可以考虑使用watch或者created钩子来处理异步数据。**
    - 异步数据，通常是在watch和created中来进行处理

- 在Vue 2中，通过props将数据从父组件传递给子组件时，默认情况下是非响应式的。这意味着当父组件中的prop数据发生变化时，子组件不会自动更新来反映这些变化。
- 然而，Vue 2提供了一种方式来使props数据成为响应式的，即使用`prop`选项的`sync`修饰符。使用`sync`修饰符，**可以将子组件对prop数据的修改反映回父组件中**
```
<!-- ParentComponent.vue -->
<template>
    <div>
        <ChildComponent :message.sync="message" />
    </div>
</template>
```
- 在JS中要判断某个元素是否存在数组中,可以使用**includes**和**indexOf**

1. 问题
- 在JavaScript中，**?. 是可选链操作符**（Optional Chaining Operator）的一部分。它的作用是简化访问可能不存在的属性或方法时的代码编写，**并避免因为访问不存在的属性或方法而导致的错误。**
- 如果有链式操作的话, 就需要通过?.

2. **vuex中的数据是响应式的**,用于管理应用程序的全局状态,当你在vuex中定义和修改数据时,数据会自动转化为响应式的;
    - vuex中会一直帮忙维护相关的数据，用于响应式，即相关数据更新，页面会跟着自动更新操作
```
当你通过store.state访问Vuex中的状态数据时，这些数据是响应式的。当你在组件中使用this.$store.state或使用辅助函数如mapState来获取状态数据时，当状态数据发生变化时，相关的组件将会更新。
当你在组件中通过this.$store.commit提交一个mutation来修改Vuex中的数据时，这些修改也会被追踪，以便Vue可以在必要时更新相关的组件.
```

3. 在Vuex中,我们想要新的数据,可以在state中自己定义; 然后在mutations中进行相关的修改操作

4. vuex中, 想要在actions中调用其他的方法; 需要使用dispatch进行相关的派发操作;
而且一般是在**状态码返回成功的时候进行dispatch和commit的操作; 
```
当你通过store.state访问Vuex中的状态数据时，这些数据是响应式的。当你在组件中使用this.$store.state或使用辅助函数如mapState来获取状态数据时，当状态数据发生变化时，相关的组件将会更新。
当你在组件中通过this.$store.commit提交一个mutation来修改Vuex中的数据时，这些修改也会被追踪，以便Vue可以在必要时更新相关的组件。
```
5. **在某个组件中,获取vuex中的动态的数据,通常是在计算属性computed中进行获取**
- this.$store.state.xxxVuex名字xxxx.属性名
```
lickTempData() {
    return this.$store.state.getDataInfomation.lickTempData
},
```
6. 监视属性的写法
- 监视属性watch是可以直接检测到计算属性中数据的变化的

7. 通过props可以传递很多的属性; 通常传递的属性都是一整个遍历对象上面的;


