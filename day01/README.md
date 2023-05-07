# 今天主要是实现这个界面
# 使用原生的CSS和JS来实现这些操作(因为如果直接使用)
- 知识点
1. Flex布局(非常重要)
2. 阿里图标的使用
- 字体图标的下载
    - 添加项目
    - 将项目添加到购物车
    - 将相关文件下载到本地，放到同一层文件夹下面，通过link来链接使用
    - **然后在相关的html标签中通过class引入相关的图标即可
- 字体图标的引入(两种方式)
```
<body>
    <div>
        <span class="iconfont">&#xe620;</span>  Unicode方式
        <span class="iconfont icon-shiyan"></span>  Font class方式
    </div>
</body>
```
- 字体图标的追加(以后添加新的小图标)
    - 需要追加的时候，把相关的文件下载下来
    - 然后将那几个文件重新关联下载即可
3. 项目在命名的时候使用的是驼峰式命名(除了第一个单词首字母不大写，其他字母开头都是大写的)

# 复习CSS
1. 简洁版小米侧边栏
- 去除链接下划线
```
text-decoration: none;
```
- 缩进两个效果图
```
text-indent: 2em;
```
- 让文字的行高等于盒子的高度，让文字在当前盒子垂直居中
```
line-height: 40px
```
# 创建Vue2 ～ webpack
1. npm install -g @vue/cli
2. vue create xxxx 【切换到你要创建项目的目录，然后使用命令创建项目】
    - 项目的名称 一般起名；vue_page等
3. npm run serve 【启动】



