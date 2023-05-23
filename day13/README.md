# day13
1. 经常使用v-if容易引起页面的重绘；应该尽可能少的使用
- 不推荐
```
<i class="iconfont icon-xingxingshixin" v-if="itemNext.isCollect"></i>
<i class="iconfont icon-xingxingkongxin" v-else></i>
```
- 推荐
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



