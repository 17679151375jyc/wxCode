// pages/aboutMe/aboutMe.js
const app = getApp();
const urlHost = app.globalData.urlHost;
const dataValue = require('../../utils/data.js').data
Page({

  /**
   * 页面的初始数据
   */
  data: {
    urlHost: urlHost,
    heightValue: app.globalData.heightValue,
    aboutMeText: '',
    otherList: {},
    purpleShow: false
  },
  tankuang(){
    this.setData({
      purpleShow: false
    })
  },
  imgClick(){
    wx.previewImage({
      current: urlHost + 'img/erweima.jpg', // 当前显示图片的http链接  
      urls: [urlHost + 'img/erweima.jpg'] // 需要预览的图片http链接列表  
    })
  },
  othercCick(e){
    let that = this
    let index = e.currentTarget.dataset.indexval
    switch(+index){
      case 0:
        that.setData({
          purpleShow: true
        })
        break;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    that.setData({
      aboutMeText: dataValue.aboutMeText,
      otherList: dataValue.otherList1
    })
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