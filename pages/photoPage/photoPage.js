// pages/photoPage/photoPage.js
const app = getApp();
const urlHost = app.globalData.urlHost;
const util = require('../../utils/util.js')
const dataValue = require('../../utils/data.js').data
Page({

  /**
   * 页面的初始数据
   */
  data: {
    urlHost: urlHost,
    heightValue: app.globalData.heightValue,
    radioShow: 0,
    name: null,
    addressName: null,
    peopleNum: null,
    dateVal: "你想啥时候去呢",
    dateVal1: "你想啥时候回来",
    colorVal: '818285',
    colorVal1: '818285',
    dateArray: [],
    dateArray1: [],
    otherList: {},
  },
  bindinputNameClick(e){
    this.setData({
      name: e.detail.value
    })
  },
  bindinputAddressClick(e){
    this.setData({
      addressName: e.detail.value
    })
  },
  bindinputNumClick(e){
    this.setData({
      peopleNum: e.detail.value
    })
  },
  butClick(){
    let that = this
    wx.showModal({
      title: '提示',
      content: '确定要提交吗？',
      success (res) {
        if (res.confirm) {
          let { name, addressName, peopleNum, dateVal, radioShow, dateVal1 } = that.data
          let data = {
            name,
            addressName,
            peopleNum,
            startDate: dateVal,
            haveCar: radioShow,
            endDate: dateVal1
          }
          console.log(data)
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  othercCick: function(e){
    let index = e.currentTarget.dataset.indexval
    switch(+index){
      case 0:
        wx.makePhoneCall({
          phoneNumber: '17679151375',    
        })
        break;
      case 1:
          wx.navigateTo({
            url: './myHomeMap/myHomeMap',
            success(){
              console.log('跳转到地图页')
            }
          })
          break;
      case 2:
          wx.setClipboardData({
            data: "15770574776jyc",
            success: function (res) {
              wx.getClipboardData({
                success: function (res) {
                  wx.showToast({
                    title: '复制成功'
                  })
                }
              })
            }
          })
          break;
      case 3:
        wx.navigateTo({
          url: './myHomeDetail/myHomeDetail',
          success() {
            console.log('跳转到家乡页')
          },
          complete(err){
            console.log(err)
          }
        })
        break;
    }
  },
  bindDate: function(e){
    let that = this
    let array = e.detail.value
    if(array[1]!==0&&array[0]!==0){
      that.setData({
        dateVal: that.data.dateArray[0][array[0]]+that.data.dateArray[1][array[1]],
        colorVal: '000'
      })
    }else{
      that.setData({
        dateVal: that.data.dateArray[0][array[0]],
        colorVal: '000'
      })
    }
  },
  bindDate1: function(e){
    let that = this
    let array = e.detail.value
    if(array[1]!==0&&array[0]!==0){
      that.setData({
        dateVal1: that.data.dateArray1[0][array[0]]+that.data.dateArray1[1][array[1]],
        colorVal1: '000'
      })
    }else{
      that.setData({
        dateVal1: that.data.dateArray1[0][array[0]],
        colorVal1: '000'
      })
    }
  },
  radioChange: function(e){
    let that = this
    that.setData({
      radioShow: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    let timeValue = util.formatTime('dateTime', new Date());
    that.setData({
      startDate: timeValue,
      dateArray: dataValue.dateArray,
      dateArray1: dataValue.dateArray1,
      otherList: dataValue.otherList
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