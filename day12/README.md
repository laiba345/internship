# day12
1. 事件委托
- 用于处理动态添加或移除的元素上的事件监听
- 原理：将事件监听器添加到元素的共同祖先元素上，然后通过`事件冒泡机制`捕获事件,并在合适的时候执行相应的处理函数

2. 事件冒泡
- 是指在页面中触发某个元素上的特定事件后，该事件会向上层元素逐级传播，直到传播到文档根节点或被阻止
- 事件冒泡是浏览器实现的一种事件传播机制，基于文档树结构
- 当一个元素触发某个事件时，比如点击事件，首先会触发该元素上绑定的事件处理函数，然后该事件会继续传播到该元素的父元素，再传播到父元素的父元素，依此类推，直到传播到文档根节点。
- 通过事件冒泡机制，我们可以实现事件委托和事件监听的优化。例如，当有大量的列表项需要绑定点击事件时，我们可以将事件监听器添加到列表的父元素上，并通过事件冒泡来处理每个列表项的点击事件，避免为每个列表项都添加事件监听器，减少了代码量和内存消耗。
- 要阻止事件冒泡，可以在事件处理函数中调用事件对象的stopPropagation() 方法。这样会阻止事件继续向上层元素传播，从而停止事件冒泡。

3. 在某一个div上同时绑定两个点击事件；第二种写法；只需要中间通过分号隔开
```
<div v-for="(o, i) in topNav" :key="i" @click="rotateClick(o.id); active(o, i, activeIndex)":class="topNavItemClass(i)">
```
4. google字体中，可能某些字体只适用于英文；选中文；在Vue中使用的话，可以直接通过在APP.vue中使用
```
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@500&family=Source+Sans+Pro:wght@900&display=swap');

body {
  font-family: 'Noto Sans SC', sans-serif !important;
}
</style>
```
5. ?.符号
- 表示可选链操作符，
- 作用：用于访问对象的属性或调用对象的方法时，可以在`链式访问中处理可能为空或未定义的中间值`，避免引发错误
- 通常，在访问对象属性或调用对象方法时，如果中间某个属性为 null 或 undefined，在不使用可选链操作符的情况下，访问该属性或调用该方法会导致 TypeError 错误。
- 而使用可选链操作符 ?.，如果链式访问中的某个属性为 null 或 undefined，则表达式会短路并直接返回 undefined，而不会引发错误。
```
const obj = {
  prop1: {
    prop2: {
      prop3: 'value'
    }
  }
};

// 使用可选链操作符
console.log(obj?.prop1?.prop2?.prop3); // 输出: "value"

// 避免错误，当中间属性为 null 或 undefined 时返回 undefined
console.log(obj?.prop1?.prop2?.prop4); // 输出: undefined

// 可选链操作符还可以用于函数调用
const func = obj?.method?.(); // 如果 obj.method 存在且为函数，则调用它
```
- 总结：处理对象的深层次属性访问时特别有用，减少了需要编写大量的条件语句来检查属性的存在性的情况。
