# day43
1. 倒计时方法的实现
```
<!-- 就是通过判断countdownActive的值是否应该出现 -->
this.countdownActive = true
const countdownTimer = setInterval(() => {
    this.countdown--
    if (this.countdown === 0) {
        clearInterval(countdownTimer)
        this.countdownActive = false
        this.countdown = 60
    }
}, 1000);
```
2. 拉取分支
- git clone 地址 （主分支）
- git clone 地址 --branch 分支名 （指定分支）

3. 新项目拉取分支以后，打印后主分支没有出现;
- git checkout -b master 
- git branch （查看所有分支；OK）