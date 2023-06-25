# day03总结
- 今天对首页的轮播图大致做完了，效果还不错，明天对结构里面的内容进行抽取 (对结构进行相应的抽取工作~简化代码)
- 使用swiper插件进行轮播图的构建操作
- swiper插件有很多的模版，其中这些模版可以套用，
- 当中的属性和方法可以混用等，查看文档
- 明天对轮播图进行优化 + day01做的个人中心进行优化操作

对于文件的操作
- 下拉和上传项目的时候，都需要进入到整个项目
- npm run build打包的时候，进入到admin文件夹即可(进入到admin文件夹即可)
- **进入项目的时候，直接到admin即可**

轮播图相关的概念
```
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 5.5, // 显示多少个splid
    spaceBetween: 30,
    autoHeight: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    loop: true, // 轮回播放
    autoplay: {
    delay: 2500,
    disableOnInteraction: false
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    navigation: {
    // 给哪个按钮绑定，点击的话就会播放
    prevEl: ".prev_arrow", 
    nextEl: ".next_arrow",
    },
});
```





