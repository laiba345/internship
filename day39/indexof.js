// indexOf用于查找字符串或数组中指定元素的方法，返回位置索引，没有找到返回-1
// const str = 'Hello World'
// const index = str.indexOf('World') // 6
// console.log(index)


// 2、用于判断某个元素是否在数组中，观察是否返回-1，不是-1说明在数组中
const arr = [1, 2, 3, 4, 5];
const element = 3;
const index = arr.indexOf(element);

if (index !== -1) {
    console.log("元素存在于数组中");
} else {
    console.log("元素不存在于数组中");
}
