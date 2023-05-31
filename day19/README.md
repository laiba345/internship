# day19
1. 一些全局公用的方法,如手机号验证,验证码验证,密码验证等方法;可以书写在Util文件夹下,然后在js文件中使用分别暴露的形式; 其中分别暴露的形式可以在引入的时候将方法另取一个名字
```
export function isPhone(phone) {
    return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(phone)
}
```
2. 然后在别的组件当中可以进行相关的引入操作
```
import { isPhone, isVeri, isPwd } from '@/util/common'
```

3. CSS中transform的使用
- transform是一个CSS属性,用于在元素上应用转换效果,可以改变元素的位置、大小、旋转角度和形状等
    - 平移; transfo rm: translate(50px, 100px) / transform: translateY(5%)
    - 缩放; transform: scale(1.5)
    - 旋转; transform: rotate(45deg)
    - 斜切; transform: skew(30deg, 15deg)

4. 可以将某一个某一个需要展示的内容,抽取成一个组件,**需要展示的具体位置**可以通过绝对定位和相对定位的操作来决定组件具体在哪一个位置进行呈现展示

5. CSS当中的, "&"是一个特殊的符号,用于表示父级别选择器,通常用于嵌套的选择器中,用于引用父级选择器的上下文
```
.button {
    background-color: #fff;
    color: #000;

    &:hover {
        background-color: #caecea;
        color: #6ea8a4;
    }
}
```
**解释**:在这个例子中，.button 是一个类选择器，它定义了按钮的默认样式。而 &:hover 则是 .button 的父级选择器（也就是自身）加上 :hover 伪类选择器。这意味着当鼠标悬停在 .button 元素上时，应用 &:hover 中定义的样式，从而改变背景颜色和文字颜色。
因此，**& 在这个上下文中可以被看作是父级选择器的占位符**，用于将样式与父级选择器进行关联。这样可以方便地在嵌套的选择器中引用父级选择器的样式，避免重复书写选择器名称。

6. 将display:flex; 其默认的flex-direction:row; 表示弹性容器的子元素将水平排列
7. align-item: xxx; 其用于设置弹性容器中子元素的垂直对齐方式的CSS属性
8. cursor:pointer; 用于指定元素在鼠标悬停时显示的光标形状的属性,**将鼠标光标的样式设置为一个小手指形状,以提示用户该元素可以响应点击或交互操作**
9. z-index:200; 其是一个CSS属性,用于控制元素在堆叠上下文中的层级顺序;**具体而言, 其值越大表示元素在堆叠顺序中较高的层级**
    - 需要注意的是,z-index属性只对设置了position属性值为absolute、relative、fixed的元素起作用
10. vue组件中,可以data中配置相关数据的时候,其中某一个数据,某一个数据属性可以放入函数
```
items: [
    {
        icon: 'icon-yonghu2',
        title: '个人信息',
        size: 17,
        onClick: () => { }
    },
    {
        icon: 'icon-mima',
        title: '修改密码',
        size: 17,
        onClick: () => { }
    },
    {
        icon: 'icon-tuichu',
        title: '退出登录',
        size: 17,
        onClick: () => {
        clearToken()
        location.reload()
        }
    }
]
```
