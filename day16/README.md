# day16
1. 某个条件如果不符合的话，不想逻辑继续往下面写的话，可以使用return终止
2. 想让某个标签属性过段时间消失，除了可以使用css，也可以使用js中的定时器，但是需要在组件销毁之前将定时器清除
```
export default {
    name: "ForgetPD",
    data() {
        return {
            iphoneNumber: '',
            isValid: true,
            isShowTip: false,
            timer: null
        }
    },
    methods: {
        goMain() {
            this.$router.push({ name: "mainLogin" })
        },
        goGetVeri() {
            const phoneNumberRegex = /^1[0-9]{10}$/
            this.isValid = phoneNumberRegex.test(parseInt(this.iphoneNumber))
            if (this.iphoneNumber.length > 0 && this.isValid) {
                this.$router.push({ name: "GetVeri" })
            }
            this.isShowTip = true
            this.timer = setTimeout(() => {
                this.isShowTip = false
            }, 3000);
        }
    },
    beforeDestroy() {
        clearTimeout(this.timer)
    }
}
</script>
```