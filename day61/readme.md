# day61
- 实习的最后一天

- 学习完react
- flex布局可以让块级元素水平排列

- 优化代码，避免多层循环出来

- 可以将一些主要信息保存在一些数据结构中，比如多层次对象，把相关的id和title联系起来，构成Map结构。
    - 键值对的形式即可
```
const templatesMap = new Map();
    this.navs.forEach(nav => {
        nav.templates?.forEach(template => {
        templatesMap.set(template.id, template.title);
    });
});
```
- 而在进行循环遍历操作的时候就可以直接用到上述的结构元素
```
this.lickTempData?.forEach(item => {
    if (templatesMap.has(item.tempId)) {
    this.firstItem.forEach(iNext => {
        iNext.nextArr.forEach((oNext) => {
        const exists = this.firstItem[0].nextArr.some((item) => item.text === oNext.text);
        if (oNext.text === templatesMap.get(item.tempId) && !exists) {
            this.firstItem[0].nextArr.push(oNext);
            this.firstItem[0].nextArr.forEach(nextItem => {
            Vue.set(nextItem, 'isCollect', true);
            });
        }
        });
    });
    }
})
```