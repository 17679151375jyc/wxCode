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
    heightValue: app.globalData.heightValue,
    textList: [{
        gender: 1,
        text: '除夕盛宴，温馨话甘甜，欢乐喜庆笑颜，新春吉祥共祝愿，万事如意勤劳挣钱，福禄寿禧康泰艳阳天，歌盛世幸福生活乐无边！',
        name: 'Jyc',
        pathUrl: "https://wx.qlogo.cn/mmopen/vi_32/mh49eDyqRE4R346DzcbWrtlXY0fNbPkz7a4ytWiaibwtVumMQ8VbLmvrl3qONrVuQxxjqxqWbf2NPk4G4M8aWMvA/132",
    },{
      gender: 0,
      text: '鼠年运气好，财源滚滚到。拼打人生路，成功业绩高。人财双丰收，步入顺利桥。美好前程在，和谐最重要。祝你们一路运气处处招!',
      name: 'Fjh',
      pathUrl: urlHost + 'img/' + 'back_div' + '.jpg',
    },{
      gender: 0,
      text: '新年钟声敲，鼠年来报到;鸡子，好事准来到;鸡子跳一跳，鸿运当头照;鸡子抱一抱，幸福紧紧来围绕。短信到，提前祝你新年好!',
      name: 'Glz',
      pathUrl: urlHost + 'img/' + 'back_div' + '.jpg',
  }]
  },
  xinClick: function(e){
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
            console.log(list)
            that.setData({
              textList: that.data.textList.concat(list)
            })
            console.log(that.data.textList)
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
  qingClick: function(){
    this.setData({
      valueText: ''
    })
  },  
  bindchangeClick: function(e){
    let index = e.detail.current
    this.setData({
      current: index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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