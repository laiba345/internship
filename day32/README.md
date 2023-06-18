# day32
1. @click方法除了调用传入数组下标以外,还可以直接把整个对象或者数组传过去
2. 查找某个元素是否存在的时候,可以使用数组some和find方法会比较好
3. 对于项目中在控制台没有必要的警告,可以通过在main.js中,添加一句代码
```
Vue.config,silent = true
```
4. 数组中的find方法;
    - 只会返回第一个符合条件的元素;有多个符合也只会返回第一个
    - 使用例子
    ```
    const arr = [1, 2, 3, 4, 5];
    const result = arr.find(num => num > 3);
    console.log(result); // 输出4
    ```
5. 数组中的some方法; 
    - 用于检查数组中是否至少有一个元素满足给定的条件
    - 返回布尔值
    ```
    const arr = [1, 2, 3, 4, 5];
    // 判断数组中是否存在偶数
    const hasEvenNumber = arr.some((element) => element % 2 === 0);
    console.log(hasEvenNumber);  // true
    ```
6. 数组中的filter方法
    - 用于过滤数组中的元素
    - **会返回一个新的数组**
    ```
    const numbers = [1, 2, 3, 4, 5];
    const oddNumbers = numbers.filter(number => number % 2 !== 0);
    console.log(oddNumbers);  // [1, 3, 5]
    ```
7. Vue2中的this.$set()方法
    - 其可以动态的添加或修改Vue实例中的响应式属性
    - 用法;后面两个必须是字符串的形式
    ```
    this.$set(this.someObject, 'newProperty', 'new value');
    ```
8. 对象和其中的相关属性进行合并操作; 其实就是解构赋值的写法;
```
this.firstItem[1]?.nextArr.push({ ...this.firstItem[index1]?.nextArr[index2], id: getUUID() })
```



