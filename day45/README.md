# day45
- 第一次连接主分支上的内容时报错
```
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> master
```

- 解决方案；按照提示进行相关解决处理
```
git branch --set-upstream-to=origin/KangDemo master
```
- bind的两个作用
1. 生成新的函数; 想要验证可以用一个变量来进行接收
2. 改变this的指向

- react改变state的状态，需要使用到setState方法来进行处理

- react中初始化状态一般都是使用简写的形势，不需要在构造器中进行相关调用操作！ 

- 组件的自定义方法中this为undefined，如何解决
1. 强制绑定this,通过函数对象的bind()
2. 定义的方法，使用箭头函数来实现！ 

