/* 
    数组中的shift方法
        - 用来弹出数组的第一个元素
        - 返回删除数组的第一个元素
    - 会修改原来数组的值
*/
const arr1 = [1, 2, 3, 4, 5]
const firstElement = arr1.shift()
console.log(firstElement) // 1
console.log(arr1) // [ 2, 3, 4, 5 ]

/* 
    数组中的unshift()
        - 用于在数组的开头添加一个或多个元素
        - 并返回新数组的长度
*/
const arr2 = [2, 3, 4, 5]
const arr2Length = arr2.unshift(1, 3)
console.log(arr2Length)
console.log(arr2)