# day07总结
1. git pull
- git fetch; 从远程仓库下载最新的提交历史和对象,并将它们存储在本地仓库中的远程跟踪分支中.这个操作`不会影响`你本地仓库的任何文件,只是把最新的代码下载下来
- git merge; 将本地仓库中的当前分支与刚刚下载的远程跟踪分支进行合并.这会将远程仓库中最新的更改合并到你的本地仓库中,从而更新你的代码
**即: 下载最新的代码并将其合并到本地仓库中的当前分支中**

2. git push时报错error: failed to push some refs to ‘https://gitee.com/**.git‘的解决方案
- 原因: 可能是因为在手动修改了远程仓库的文件,导致一些文件在本地仓库与远程仓库上不一致,故而引发该错误; 
- 解决方法:git pull -rebase origin master 将远程仓库同步到本地,然后再重新add、commit、push即可

3. 在进行flex布局的时候
- 可能对某个元素进行flex布局以后, 对该元素使用width和height确定大小时,没有什么作用,可以考虑是不是宽度和高度作用的元素不生效,可能需要将宽高作用在其子元素上;通过子元素来撑起整个盒子

4. 点击某个按钮弹出某个组件显示,点击该除了该组件的别的位置,将该组件隐藏起来
- 通过ref来获取某个元素
```
this.$refs.modal
```
- 监听全局的点击事件四
```
document.addEventListener('click', Method)
```
- 再次点击的时候,可能不生效,不起作用;需要将全局点击事件移除
```
document.removeEventListener('click', this.hideModalOutSide)
```
- 整体实现
```
// 结构
<div v-if="isShowPersonMessage" class="modal" ref="modal">
    <PersonMessage />
</div>

// 逻辑
PopPersonMessage() {
    document.removeEventListener('click', this.hideModalOutside)
    if (this.isShowPersonMessage == false) {
    this.isShowPersonMessage = true
    } else {
    this.isShowPersonMessage = false
    }
    // this.isShowPersonMessage = true
    // this.$nextTick(() => {
    //   document.addEventListener('click', this.hideModalOutside)
    // })
    setTimeout(() => {
    document.addEventListener('click', this.hideModalOutside)
    }, 10);
},
closeModal() {
    this.isShowPersonMessage = false
    document.removeEventListener('click', this.hideModalOutside)
},
hideModalOutside(event) {
    const modalElement = this.$refs.modal
    if (modalElement && !modalElement.contains(event.target)) {
    this.closeModal()
    }
}
```





