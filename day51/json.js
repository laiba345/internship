const obj = {
    name: "John",
    age: 30,
    city: "New York"
};

const jsonString = JSON.stringify(obj);
console.log('jsonString', jsonString); //  {"name":"John","age":30,"city":"New York"}
console.log(typeof jsonString); // string 字符串的形式

const objNext = JSON.parse(jsonString)
console.log(objNext)
// typeof 直接使用即可 typeof something
console.log(typeof objNext) // object 