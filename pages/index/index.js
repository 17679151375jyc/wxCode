//index.js
//获取应用实例
const app = getApp();
const backgroundAudioManager = wx.getBackgroundAudioManager();
const urlHost = app.globalData.urlHost;
const util = require('../../utils/util.js')
Page({
  onReady: function (e) {
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    muShow: true,
    timeValue: '',
    hourValue: '',
    textValueTime: '',
    urlHost: urlHost,
    myAudio: {
      method: 'pause',
    },    
    verse1: '律转鸿钧佳气同', 
    verse2: '肩摩毂击乐融融',
    verse3: '不须迎向东郊去', 
    verse4: '春在千门万户中',
    listImg: [
      urlHost + 'img/' + 'nian1.jpg',
      urlHost + 'img/' + 'nian2.jpg',
      urlHost + 'img/' + 'nian3.jpg',
      urlHost + 'img/' + 'nian4.jpg',
      urlHost + 'img/' + 'nian5.jpg',
      urlHost + 'img/' + 'nian6.jpg',
      urlHost + 'img/' + 'nian7.jpg',
      urlHost + 'img/' + 'nian8.jpg',
      urlHost + 'img/' + 'nian3.jpg'
    ],
    listImg1: [
      urlHost + 'img/' + 'nian1.jpg',
      urlHost + 'img/' + 'nian2.jpg',
      urlHost + 'img/' + 'nian3.jpg',
      urlHost + 'img/' + 'nian4.jpg',
      urlHost + 'img/' + 'nian5.jpg',
    ],
    heightValue: app.globalData.heightValue,
    widthValue: 0,
    page2Animation: '',
    page3Animation: '',
    pageShow: true,
    page1: true,
    page2: false,
    page3: false,
    page4: true,
    yinyueShow: false,
    yinyueAni: '',
    tiperShow: false,
    rightValue: 100,
    aniStatus: 'paused',
    yinStatus: false
  },
  imgClick: function (e){  //图片预览
    let that = this;
    let index = e.currentTarget.dataset.index
    wx.previewImage({
      current: that.data.listImg[index], // 当前显示图片的http链接  
      urls: that.data.listImg // 需要预览的图片http链接列表  
    })
  },
  imgClick1: function (e) {
    let that = this;
    let index = e.currentTarget.dataset.index
    wx.previewImage({
      current: that.data.listImg1[index], // 当前显示图片的http链接  
      urls: that.data.listImg1 // 需要预览的图片http链接列表  
    })
  },
  yinClick: function(e){//点击播放
    let that = this;
    backgroundAudioManager.play();
    that.setData({
      aniStatus: 'tunnong',
      yinStatus: false
    })
  },
  yinyueClick: function(e){//点击暂停
    let that = this;
    backgroundAudioManager.pause();
    that.setData({
      aniStatus: 'paused',
      yinStatus: true
    })
    that.setData({    //消失播放器（废弃）
      rightValue: 0,
      tiperShow: true
    })
  },
  bindVideoplayClick1: function(e){
    this.yinyueClick()
  },
  bindVediopauseClick1: function (e) {
    console.log('暂停时触发')
  },
  tiperClick: function (e) {//点击蒙版隐藏播放器（废弃）
    let that = this;
    that.setData({
      rightValue: 100,
      tiperShow: false
    })
  },
  bindplayClick: function (e) {//点击音乐符动画继续（废弃）
    let that = this;
    that.setData({
      aniStatus: 'running'
    })
  },
  bindpauseClick: function (e) {//点击音乐符动画停止（废弃）
    let that = this;
    that.setData({
      aniStatus: 'paused'
    })
  },
  link_path: function(e){
    wx.navigateTo({
      url: '../home/home',
      success: function(e){
        console.log('跳转到home')
      }
    })
  },
  bindchangeClick: function (e){  //页面变化
    let that = this
    console.log(e.detail.current)
    if (e.detail.current == 0) {  //页面1
      that.setData({
        page1: true
      })
    } else {
      that.setData({
        page1: false
      })
    }
    if (e.detail.current == 1){ //页面2
      that.setData({
        page2: true,
        page2Animation: 'cai2',
        page1: false
      })
    }else{
      that.setData({
        page2: false,
        page2Animation: ''
      })
    }
    if (e.detail.current == 2) { //页面3
      that.setData({
        page3: true,
        page3Animation: 'zi1',
        pageShow: false,
      })
    } else {
      that.setData({
        page3: false,
        page3Animation: '',
        pageShow: true
      })
    }
  },
  bindscrollClick: function(e){ //主页图片滑块
    // console.log(e.detail.scrollLeft)
  },
  onLoad: function () {
    let that = this;
    wx.getSystemInfo({
      success: function(res){
        console.log(res.safeArea)
        that.setData({
          widthValue: that.data.listImg.length * 33.333 + (that.data.listImg.length+1)
        })
          // wx.playBackgroundAudio({//背景音乐
          //   dataUrl: that.data.urlHost + 'mp3/邓紫棋-句号.mp3',
          //   title: '句号',
          //   coverImgUrl: that.data.urlHost + 'img/juhao.jpg',
          //   success(res) {
          //     that.setData({
          //       aniStatus: 'running'
          //     })
          //   }
          // })
          wx.setBackgroundColor({
            // backgroundColor: '#F60303', // 默认窗口的背景色
          })
          that.setData({//播放器（废弃）
            myAudio: {
              method: 'play'
            }
          })
      }
    }),
      setInterval(() => {
      let timeValue = util.formatTime('dateTime', new Date());
      let hourValue = util.formatTime('hourTime', new Date());
      that.setData({
        timeValue: timeValue,
        hourValue: hourValue
      })
    }, 1000)
    setTimeout(()=>{
      that.setData({
        muShow: false
      })
    }, 2500)
  }
})
