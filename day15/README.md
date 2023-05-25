# day15
1. 没事少操作DOM,对于不同的类别,往往可以通过:class实现
2. vue模版中,template上面那一块,对于data中的值是可以直接获取的,`不需要使用this.`, 
3. 在Vue2中,要实时监听到页面宽度的变化,需要使用到`Vue中的watch`和`window.onresize`监听事件
- 一般事件监听是添加在mounted钩子上,而且当监听完成以后,需要在组件销毁之前解除事件监听
```
mounted() {
    window.addEventListener('resize', this.handleWindowResize)
}
beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowResize)
}
```
- 其中resize事件通常是用来监听页面窗口大小的

4. 密码在进行设置的时候,密码和确认密码不仅需要相同,而且要不为空,这样才能进行跳转操作;手机号和密码还需要进行相应的格式验证操作

5. 在进行密码的验证登录时候,进行匹配的时候都是使用正则表达式的形式来进行判断验证; 而且在根据不同形式的输入密码进行显示不同的提示信息的话;需要控制好相关的变量; 如点击验证之后的操作
```
finishSetPD() {
    let hasLetter = /[a-zA-Z]/.test(this.newPD);
    let hasNumber = /\d/.test(this.newPD);
    let hasSymbol = /[!@#$%^&*]/.test(this.newPD);
    let validCombination = (hasLetter && hasNumber) || (hasLetter && hasSymbol) || (hasNumber && hasSymbol);
    if (this.newPD.length < 6 || !validCombination) {
        this.isShowOne = true
        this.isValidOne = false
    } else if (this.newPD !== this.confirmPD) {
        this.isShowOne = false
        this.isValidOne = true
        this.isShowTwo = true
        this.isValidTwo = false
    }
    if (this.newPD !== "" && this.confirmPD !== "" && this.newPD === this.confirmPD) {
        this.$router.push({ name: "mainLogin" })
    }
}
```
