# day24
1. 父子组件之间通信的方式
- 父 => 子；通过props属性
    - 父组件中包含子组件
    ```
    <div>
        <show-message title="哈哈哈" content="我是哈哈哈"></show-message>
    </div>
    ```
    - 子组件通过props进行接收；props:['title', 'content]形式接收
- 子 => 父；通过$emit触发事件
    - 父组件通过@atguigu="xxx"
    - 子组件通过this.$emit('atguigu', data)
        - 父组件通过xxx方法来回调，其中参数可以获取到data
        - 然后通过this.某变量 = data;来将子组件获取到的数据
        保存到父组件中，供给变量使用
2. vue中实时进行数据绑定通过v-model实现，react需要调用this.$state({})




