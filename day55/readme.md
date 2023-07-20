# day55
- 对于模板系列还需要进一步处理
- 论文的撰写
- 对于id的设置唯一性，一级和二级的id不要重复即可，因为如果重复可能会导致数组循环发生错误
    - 使用下面这种形式即可
```
firstItem: [
    {
        id: 0,
        text: '我的收藏',
        isShowSecond: false,
        isShowBorder: false,
        nextArr: []
    },
    {
        id: 1,
        text: '最近使用',
        isShowSecond: false,
        isShowBorder: false,
        nextArr: []
    },
    {
        id: 2,
        text: '热门工具',
        isShowRemen: true,
        isShowSecond: true,
        isShowBorder: true,
        nextArr: [
        {
            id: 100,
            text: '小红书文案',
            ExtraIcon: false,
            isCollect: false,
        },
        {
            id: 101,
            text: '公众号文案',
            ExtraIcon: false,
            isCollect: false,
        },
        {
            id: 102,
            text: '知乎文案',
            ExtraIcon: false,
            isCollect: false,
        },
        {
            id: 103,
            text: '百家号文案',
            ExtraIcon: false,
            isCollect: false,
        },
        {
            id: 104,
            text: '微博',
            ExtraIcon: false,
            isCollect: false,
        },
        {
            id: 105,
            text: '大众点评',
            ExtraIcon: false,
            isCollect: false,
        },
        ]
    },
    {
        id: 3,
        text: '视频',
        isShowSecond: false,
        isShowBorder: false,
        nextArr: [
        {
            id: 106,
            text: '视频拍摄大纲',
            ExtraIcon: false,
            isCollect: false,
        },
        {
            id: 107,
            text: '分镜脚本',
            ExtraIcon: false,
            isCollect: false,
        },
        {
            id: 108,
            text: '视频介绍脚本',
            ExtraIcon: false,
            isCollect: false,
        },
        {
            id: 109,
            text: '拍摄剧本',
            ExtraIcon: false,
            isCollect: false,
        },
        {
            id: 110,
            text: '视频说明',
            ExtraIcon: false,
            isCollect: false,
        },
        {
            id: 111,
            text: '频道说明',
            ExtraIcon: false,
            isCollect: false,
        },
        ]
    },
    {
        id: 4,
        text: '市场文案',
        isShowSecond: false,
        isShowBorder: false,
        nextArr: [
        {
            id: 112,
            text: '营销节点推广',
            ExtraIcon: false,
            isCollect: false,
        },
        {
            id: 113,
            text: '公司介绍',
            ExtraIcon: false,
            isCollect: false,
        },
        {
            id: 114,
            text: '品牌介绍',
            ExtraIcon: false,
            isCollect: false,
        },
        {
            id: 115,
            text: '广告slogan',
            ExtraIcon: false,
            isCollect: false,
        },
        ]
    },
    {
        id: 5,
        text: '电商文案',
        isShowSecond: false,
        isShowBorder: false,
        nextArr: [
        {
            id: 116,
            text: '海报文案',
            ExtraIcon: false,
            isCollect: false,
        },
        {
            id: 117,
            text: '产品描述',
            ExtraIcon: false,
            isCollect: false,
        },
        {
            id: 118,
            text: '售后说明',
            ExtraIcon: false,
            isCollect: false,
        },
        {
            id: 119,
            text: '售后评论',
            ExtraIcon: false,
            isCollect: false,
        },
        ]
    },
    {
        id: 6,
        text: '工作与学习',
        isShowSecond: false,
        isShowBorder: false,
        nextArr: [
        {
            id: 120,
            text: '作业解答',
            ExtraIcon: false,
            isCollect: false,
        },
        {
            id: 121,
            text: '论文灵感',
            ExtraIcon: false,
            isCollect: false,
        },
        {
            id: 122,
            text: '编程',
            ExtraIcon: false,
            isCollect: false,
        },
        // {
        //   id: 123,
        //   text: '归纳总结',
        //   ExtraIcon: false,
        //   isCollect: false,
        // },
        ]
    },
 ],
```

- 最近使用这一块的制作，相关数据的保存放在浏览器当中
- 最近使用这一块，添加前和添加后都需要相关逻辑来判断某个位置的数据是否已经存在
```
goTemplate(index1, index2, itemNext) {
    if (!this.userId) {
    this.$set(this.firstItem[1], 'nextArr', [])
    }
    this.getTemplate(itemNext.text)
    if (index1 === 1) return
    let isLive = this.firstItem[1]?.nextArr?.find(item => item.text === itemNext.text)
    let firstItemLength = this.firstItem[1]?.nextArr?.length
    if (firstItemLength === 6 && !isLive) {
    this.firstItem[1]?.nextArr?.splice(5, 1)
    } 
    let secondItemLength = this.firstItem[1]?.nextArr?.length
    let isLiveSecond = this.firstItem[1]?.nextArr?.find(item => item.text === itemNext.text)
    if ((index1 === 0 || index1 > 1) && !isLiveSecond && secondItemLength < 6) {
    this.firstItem[1]?.nextArr.unshift(itemNext)
    } 
    setProjectHistoryPlus(this.firstItem[1]?.nextArr)
},
```



