# day21
1. 在设置样式的时候，想要设置的样式在下拉的时候不覆盖原有的样式，
可以使用绝对定位和相对定位 + z-index属性的值来确定
2. 兄弟组件传递数据：**注册全局事件总线**的形式
- 全局事件总线的使用，组件结构不复杂的时候，可以使用全局事件总线
的形式来处理
- 全局事件总线的使用步骤
    - 先在main.js中，安装全局事件总线
    ```
    //创建vm
    new Vue({
        el:'#app',
        render: h => h(App),
        beforeCreate() {
            Vue.prototype.$bus = this //安装全局事件总线
        },
    })
    ```
    - 发送数据的组件，通过$emit触发事件，传递参数
    ```
    methods: {
        sendStudentName(){
            this.$bus.$emit('hello',this.name)
        }
    },
    ```
    - 接收数据的组件，通过$on来接收参数
    ```
    mounted() {
			// console.log('School',this)
			this.$bus.$on('hello',(data)=>{
				console.log('我是School组件，收到了数据',data)
			})
		},
    ```
    - 在组件接收数据以后，不用的时候，需要将注册的该数据取消
    ```
    beforeDestroy() {
			this.$bus.$off('hello')
		},
    ```
3. vuex的使用
- 组件想取到不同的store中的数据，可以通过计算属性来进行获取，
然后通过this.$store.
