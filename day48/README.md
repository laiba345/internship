# day48
- UI给了图纸
- 对工具那一栏收藏功能改造

1. 工具栏那一块的想法
- 其实只需要将vuex中的数据取出来进行相关展示即可
- 因为你本身进行点击操作的话，也会将数据传送过去

2. 对data中某一块数据的属性进行修改
```
this.$set(item, 'isCollect', true)
```

3. forEach的操作，其实就是对数据进行相关操作