# day13
1. 经常使用v-if容易引起页面的重绘；应该尽可能少的使用
- 不推荐
```
<i class="iconfont icon-xingxingshixin" v-if="itemNext.isCollect"></i>
<i class="iconfont icon-xingxingkongxin" v-else></i>
```
- 推荐;使用:class的书写方式就是里面可以书写一些表达式会自动计算
```
<i :class="['iconfont', itemNext.isCollect ? 'icon-xingxingshixin' : 'icon-xingxingkongxin']"></i>
···
2. 将字体设置为斜体；font-style: italic;

3. 一个类下面有很多重复的元素，想要对某个重复的元素进行选择，可以通过`伪类选择器`来进行
- 如某个类下面有很多个span，想要根据不同位置的span设置不同的字体颜色
```
.text-style span:nth-child(1n) {
          color: #340c65;
}

.text-style span:nth-child(2n) {
    color: blue;
}

.text-style span:nth-child(3n) {
    color: rgb(247, 200, 147);
}

.text-style span:nth-child(4n) {
    color: rgb(55, 142, 55);
}
```
4. 本地的git无法获取到别人新创建的分支,可能的情况
- `远程分支未拉取到本地`：在执行 git branch -a 命令时，可以查看本地和远程的分支列表。如果远程分支没有被拉取到本地，你可以使用 git fetch 命令来获取最新的远程分支信息，然后再执行 git branch -a 查看是否能够获取到远程分支
- `远程仓库未关联`：如果你在本地克隆了一个全新的仓库，并且还没有与远程仓库建立关联，那么你是无法获取到远程分支的。你可以使用 git remote add origin <远程仓库地址> 命令将本地仓库与远程仓库关联起来，然后再执行 git fetch 命令获取远程分支信息
- `访问权限限制`：如果你没有权限访问远程仓库或者对应的分支，那么你将无法获取到远程分支。确保你有正确的权限，并且已经使用正确的认证方式（如用户名和密码、SSH 密钥等）进行了身份验证



