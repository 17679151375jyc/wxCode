// pages/footPrint/footPrint.js
const app = getApp();
const urlHost = app.globalData.urlHost;
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleText: '点亮星星签到',
    titleColoe: '#CDCDCD',
    heightValue: app.globalData.heightValue,
    urlHost: urlHost,
    imgFlag: false,
    imgFlag1: true,
    xing2: '',
    jia1: '',
    listData: []
  },
  imageClick: function (e){
    let that = this
    that.setData({
      xing2: 'xing2',
      imgFlag: true,
      jia1: 'jia1'
    })
    if (that.data.imgFlag1) {
      wx.getUserInfo({
        success: function (res) {
          if (res.userInfo) {
            console.log(res.userInfo)
            let {
              nickName,
              avatarUrl,
              gender
            } = res.userInfo
            let list = {
              num: 1,
              name: nickName,
              pathImg: avatarUrl,
              gender: gender,
            }
            console.log(list)
            that.setData({
              listData: that.data.listData.concat(list),
              titleText: '欢迎你的到来',
              titleColoe: '#FFAD01'
            })
            console.log(that.data.listData)
          }
        }
      })
    }
    setTimeout(()=>{
      that.setData({
        xing2: '',
        imgFlag1: false,
        jia1: '',
      })
    }, 1000)

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    setInterval(() => {
      let time = util.formatTime('hourTime', new Date());
      if (time == '00:00:00') {
          that.setData({
            imgFlag: false,
            imgFlag1: true,
            xing2: '',
            jia1: '',
            titleText: '点亮星星签到',
            titleColoe: '#CDCDCD'
          })
      }
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})