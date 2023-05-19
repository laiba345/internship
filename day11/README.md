# day11

- 分支上的内容想拿到主分支上的内容

1. 首先,确保你在当前分支上工作,可以使用 git branch 命令查看
2. 更新你的主分支,确保与远程仓库上的最新内容保持同步

```
git checkout mian # 切换到主分支
git pull origin/master main # 拉取最新的主分支代码
```

3. 切换回你的目标分支,将主分支上的内容合并到当前分支

```
git checkout your-branch # 切换回你的目标分支
git merge main # 将主分支的内容合并到当前分支
```

4. git 会尝试自动合并主分支的更改到当前分支,如果有冲突,需要解决冲突并手动提交合并的更改

- 对于一些用于控制组件的属性,比如 isShow 等,如果在组件中过于深入,可以通过监视属性的值,来根据某些条件,进而来判断相关的属性;进而控制更多的属性是否进行展示
  - 其中 oldValue 和 newValue 如果没有用到是可以不写的

```
watch: {
    isShowSfq: {
      handler() {
        this.firstItem.forEach((item) => {
          item.isShowSecond = false
        })
      }
    },
    findToolsStr: {
      handler() {
        if (this.findToolsStr.length === 0) {
          this.firstItem.forEach((item) => {
            item.isShowSecond = false
          })
        }
      }
    }
  },
```

- 复习 Vue2 中的 watch 事件

1. 当被监视的属性变化时,回调函数自动调用,进行相关操作
2. 监视的属性必须存在,才能进行相关的监视操作
3. 监视的两种写法
   - new Vue 时传入 watch 配置
   - 通过 vm.$watch() 进行相关的监视操作

```
watch:{
    // 监视的属性就是data中存在的,这一点还是很关键的
    isHot:{
        // 初始化时候马上执行一次
        immediate: true, 
        handler(newValue, oldValue) {
            console.log('isHot被修改了', newValue, oldValue)
        }
    },
    // 可以一次性监视多个值;
    numbers: {
        deep: true, 
        handler() {
            console.log('numbers改变了')
        }
    },
    // 如果不开启深度监视的话,可以使用简写的形式
    isHot(newValue, oldValue) {
        console.log('isHot被修改了', newValue, oldValue)
    }
}
```
- computed 和 watch之间的区别
1. computed可以完成的,watch都可以完成(可以进行异步操作)
2. 原则
    - 所有被Vue管理的函数,最好写成普通函数,这样this的指向才是vm或组件实例对象
    - 所有不被Vue管理的函数(定时器的回调函数、ajax回调函数、Promise的回调函数等),最好写成`箭头函数`,这样this的指向才是vm或组件实例对象

- 使用template绑定在我们主要元素的外面,在template上是不可以绑定点击事件等相关的内容

- 点击父亲元素做相关的动作,但是不想点击内部的元素, 造成页面的点击效果,可以在相应的子元素上添加上@click.stop

- 点击某个事件进行相关路由的跳转
```
this.$router.push({ name:'template', params:this.activeItem })
```

