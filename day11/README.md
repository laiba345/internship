# day11
- 在使用Vue2中的时候,如果传入的json数据是有两层的时候,在template模版中书写方法的时候,可以通过遍历的时候;(item, index) in arrData, 通过传入index1和index2来精确定位到json当中的数据
- 使用js获取到一个字符串中第一个空格前的内容
```
let str = "Hello World"
let firstSpaceIndex = str.indexOf(" ")
let result = firstSpaceIndex !== -1 ? str.substring(0, firstSpaceIndex) : str
```
- 对于一种数据类型;是一个数组,数组里面是一个个对象,每一个对象里面有个属性又是一个数组.在对最内侧数组中的属性进行相关操作的时候;可以使用forEach() 来进行相关操作
```
this.data.forEach(i => i.nextData.forEach((o) => {
    if(o.title === innerText) {
        this.activeItem = o
    }
}))

