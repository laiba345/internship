# day46
- 展开运算符 ...
1. 用于数组或对象时，可以展开数组或对象，将其元素或属性扩展到另一个数组或对象中。
2. 应用
    - 合并数组
    ```
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const combined = [...arr1, ...arr2];
    console.log(combined); // 输出: [1, 2, 3, 4, 5, 6]
    ```
    - 复制数组
    ```
    function sum(a, b, c) {
        return a + b + c;
    }

    const numbers = [1, 2, 3];
    const result = sum(...numbers);
    console.log(result); // 输出: 6
    ```
    - 传递数组元素作为参数
    ```
    function sum(a, b, c) {
        return a + b + c;
    }

    const numbers = [1, 2, 3];
    const result = sum(...numbers);
    console.log(result); // 输出: 6
    ```
    - **剩余参数运算符**
        - 表示接收多个参数，并将它们作为数组保存在一个变量中
        ```
        function sum(...numbers) {
            let total = 0;
            for (let num of numbers) {
                total += num;
            }
            return total;
        }

        console.log(sum(1, 2, 3)); // 输出: 6
        console.log(sum(4, 5, 6, 7)); // 输出: 22
        ```
3. 等UI图纸