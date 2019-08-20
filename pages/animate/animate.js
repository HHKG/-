// pages/animate/animate.js
let timer=null;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        animateLeft: {},
        i: 0

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
     timer=setInterval(()=>{
        this.animateLeft()
     },4000)
    },
    // 向右转
    turnLeft() {
        clearInterval(timer);
        timer=null;
        timer = setInterval(() => {
            this.animateLeft();
        }, 4000)
        this.animateLeft();
    },
    animateLeft(){
        let animation = wx.createAnimation({
            timingFunction: 'linear',
            duration: 1000,
            delay: 0
        })
        let i = this.data.i
        i--
        console.log(i);
        this.animation = animation;
        animation.rotate(90 * i).step();
        this.setData({
            animateLeft: animation.export()
        })
        this.setData({
            i: i
        })
    },
    animateRight(){
        let animation = wx.createAnimation({
            timingFunction: 'linear',
            duration: 1000,
            delay: 0
        })
        let i = this.data.i
        i++
        console.log(i);
        this.animation = animation;
        animation.rotate(90 * i).step();
        this.setData({
            animateLeft: animation.export()
        })
        this.setData({
            i: i
        })
    },
    // 向左转
    turnRigth() {
        clearInterval(timer);
        timer = null;
        timer = setInterval(() => {
            this.animateLeft();
        }, 4000)
        this.animateRight();
    },
})