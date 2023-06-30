/* 
    1、用于检查数组是否包含特定元素,并返回一个布尔值
*/
// const array = [1, 2, 3, 4, 5];

// console.log(array.includes(3));  // 输出: true
// console.log(array.includes(6));  // 输出: false


/* 
    2、JS中的forEach方法
        - 用于对数组中的每个元素执行指定的函数
*/
const array = [1, 2, 3, 4, 5];

array.forEach(function(element, index, array) {
  console.log("Element:", element);
  console.log("Index:", index);
  console.log("Array:", array);
});

