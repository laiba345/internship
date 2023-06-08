# day25
- 分别暴露的形式,在进行接收的话
```
是的，在 JavaScript 中，可以在接收模块导出内容时为其指定不同的名称。这样做有几种方式，具体取决于模块的导出方式。

假设你有一个模块文件 `module.js`，其中使用不同的导出方式：

1. 默认导出（单一导出）：
```javascript
// module.js
export default function myFunction() {
  // ...
}

// 导入并重命名
import renamedFunction from './module.js';
```

在这种情况下，你可以为默认导出的函数指定一个新的名称，这里将其命名为 `renamedFunction`。

2. 命名导出：
```javascript
// module.js
export function myFunction() {
  // ...
}

// 导入并重命名
import { myFunction as renamedFunction } from './module.js';
```

在这种情况下，你可以使用 `as` 关键字为要导入的函数指定一个新的名称，这里将其命名为 `renamedFunction`。

无论是默认导出还是命名导出，你都可以根据需要为导入的模块成员指定新的名称。
```

- &表示当前元素标签

- 如何想要在当前元素以外的地方进行相关的点击事件操作,可以使用vue封装的事件
    - v-click-outside="close" 
    - 针对close书写相关的回调即可

- 针对input框的两个样式操作
    - focus
    - hover
    
# day25(晚上复盘)
1. 父子组件之间通信的方式
- 父 => 子；通过props属性
    - 父组件中包含子组件
    ```
    <div>
        <show-message title="哈哈哈" content="我是哈哈哈"></show-message>
    </div>
    ```
    - 子组件通过props进行接收；props:['title', 'content]形式接收
- 子 => 父；通过$emit触发事件
    - 父组件通过@atguigu="xxx"
    - 子组件通过this.$emit('atguigu', data)
        - 父组件通过xxx方法来回调，其中参数可以获取到data
        - 然后通过this.某变量 = data;来将子组件获取到的数据
        保存到父组件中，供给变量使用
2. vue中实时进行数据绑定通过v-model实现，react需要调用this.$state({})




