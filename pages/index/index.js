//index.js
//获取应用实例
const app = getApp();
const backgroundAudioManager = wx.getBackgroundAudioManager();
const urlHost = app.globalData.urlHost;
const util = require('../../utils/util.js')
const dataValue = require('../../utils/data.js').data
Page({
  onReady: function (e) {
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    animaText: '',
    zhuFuListValue: '',
    purpleShow: false,
    hengfuShow: false,
    muShow: true,
    timeValue: '',
    hourValue: '',
    textValueTime: '',
    urlHost: urlHost,
    myAudio: {
      method: 'pause',
    },  
    verse: [],
    listImg: [],
    listImg1: [
      urlHost + 'img/' + 'nian1.jpg',
      urlHost + 'img/' + 'nian2.jpg',
      urlHost + 'img/' + 'nian3.jpg',
      urlHost + 'img/' + 'nian4.jpg',
      urlHost + 'img/' + 'nian5.jpg',
    ],
    zhuFuList: {},
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
  shuJuPaiClick: function(e){//点击出现弹窗
    let that = this;
    let val = parseInt(Math.random() * 30 + 1); 
    that.setData({
      zhuFuListValue: that.data.zhuFuList[val].name,
      purpleShow: true,
    })
  },
  tankuang: function(e){//出现弹窗并获取随机一条祝福
    let that = this;
    that.setData({
      purpleShow: false
    })
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
    console.log('执行了')
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
  bindVideoplayClick1: function(e){//视频播放时暂停背景音乐
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
        let num = dataValue.listImg.length
        console.log(dataValue.listImg.length)
        that.setData({   
          animaText: dataValue.animaText,//移动的横幅文字
          zhuFuList: dataValue.zhuFuList,//随机祝福
          verse: dataValue.verse,//诗句
          listImg: dataValue.listImg,//图片组
          widthValue: num * 34.333 + 1, 
        })
          wx.playBackgroundAudio({//背景音乐
            dataUrl: urlHost + 'mp3/juhao.mp3',
            title: '句号',
            coverImgUrl: urlHost + 'img/juhao.jpg',
            success(res) {
              that.setData({
                aniStatus: 'running'
              })
            }
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
      // 获取数据
      that.setData({
        timeValue: timeValue,
        hourValue: hourValue,
      })
    }, 1000)
    setTimeout(()=>{
      that.setData({
        muShow: false
      })
    }, 2500)
    setTimeout(()=>{
      that.setData({
        hengfuShow: true
      })
    }, 5000)
  }
})
