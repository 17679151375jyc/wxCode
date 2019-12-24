// pages/blessing/blessing.js
const app = getApp();
const urlHost = app.globalData.urlHost;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    valueText: '',
    current: 0,
    urlHost: urlHost,
    textList: []
  },
  xinClick: function(e){//页面切换
    let that = this;
    let index = e.currentTarget.dataset.num
    this.setData({
      current: index
    })
  },
  bindFormSubmit: function (e) {
    let that = this
    let text = e.detail.value.textarea
    if (text) {      
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
              text: text,
              name: nickName,
              pathUrl: avatarUrl,
              gender,
            }
            that.data.textList.unshift(list)
            wx.setStorage({
              key: 'textList',
              data: that.data.textList,
              success(res){
                that.getList()
              }
            })
          }
        },
        complete(err){
          console.log(err)
        }
      })
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 1000
      })
      // setTimeout((e) => {
        that.setData({
          current: 0,
          valueText: ''
        })
      // }, 1000)
    }else{
      wx.showToast({
        title: '请输入你要分享的祝福',
        icon: 'none',
        duration: 2000
      })
    }
  },
  qingClick: function(){//清空
    this.setData({
      valueText: ''
    })
  },  
  bindchangeClick: function(e){//滑动切换
    let index = e.detail.current
    this.setData({
      current: index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    that.getList()
    
  },
  getList() {
    let that = this
    wx.getStorage({
      key: 'textList',
      success: function (res) {
        that.setData({
          textList: res.data
        })
      }
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