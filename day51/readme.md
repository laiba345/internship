# day51
1. localStorage的使用
- localStorage是web浏览器提供的一种持久化存储数据的机制，可以用于在浏览器中**存储和检索键值对数据**
- 用法
    - 存储数据
    ```
    localStorage.setItem('key', 'value');
    ```
    - 检索数据; 通过直接获取来拿到； 
    ```
    const value = localStorage.getItem('key');
    ```
    - 更新数据
    ```
    localStorage.setItem('key', 'new value');
    ```
    - 删除数据
    ```
    localStorage.removeItem('key');
    ```
    - 清空所有数据
    ```
    localStorage.clear();
    ```
2. localStorage 和 sessionStorage有什么区别？
- 生命周期不同
    - localStorage：存储在localStorage中的数据**没有过期时间**，除非手动清除或通过代码删除，否则数据将一直存在。**即使关闭浏览器或重新启动计算机，数据也会保留**
    - sessionStorage：存储在sessionStorage中的数据**仅在当前浏览器会话（即打开的浏览器标签或窗口）期间有效**。当关闭浏览器标签或窗口时，sessionStorage中的数据将被清除。
- 作用域
    - localStorage：localStorage中的数据在同一个域名下的所有页面之间共享。即使在不同的页面上打开同一域名下的不同标签或窗口，它们可以访问和操作相同的localStorage数据
    - sessionStorage：sessionStorage中的数据仅在同一个浏览器标签或窗口中共享。不同的标签或窗口之间无法直接访问对方的sessionStorage数据
- 存储容量
    - localStorage和sessionStorage的存储容量通常相同，通常为几MB。
    - 可以自己进行相关配置
- 数据访问

3. 会话技术在项目中的使用
- 在公共暴露的方法JS中书写相应的方法
- localStorageUtil.js
- 
```
export function setProjectHistory(history) {
    window.localStorage.setItem(projectHistory, JSON.stringify(history))
}
export function getProjectHistory() {
    let o = window.localStorage.getItem(projectHistory)
    return o ? JSON.parse(o) : []
}
```

- 在组件中进行使用; 一般我们放在浏览器中的东西都是需要在页面进行直接展示的，**一般放在生命周期created()中**
```
let items = getProjectHistoryPlus()
items = items.map(o => JSON.stringify(o))
items = [...new Set(items)]
items = items.map(o => JSON.parse(o))
this.habit = items
this.firstItem[1].nextArr.push(...this.habit)
this.$nextTick(() => {
    this.firstItem[0]?.nextArr?.forEach(itemFirst => {
    this.firstItem[1]?.nextArr?.forEach(itemSecond => {
        if (itemFirst.text === itemSecond.text) {
        this.$set(itemSecond, 'isCollect', true);
        }
    })
    })
})
```

