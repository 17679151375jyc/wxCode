// pages/photoPage/myHomeMap/myHomeMap.js
const app = getApp();
const urlHost = app.globalData.urlHost;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    setList: {      
        longitude: 115.91940879821777, 
        latitude:28.0152410789583, //中心经纬度
        scale: 14,
        markers: [{//标记点
          iconPath: urlHost + "img/biaoji.png",
          id: 0,
          latitude: 28.0152410789583,
          longitude: 115.91940879821777,
          width: 25,
          height: 45,
          callout: {//气泡窗口
            display: 'ALWAYS',//BYCLICK':点击显示; 'ALWAYS':常显
            content: "我家在这",
            color: "#FFF",
            fontSize: 14,
            borderRadius: 2,
            borderWidth: 1,
            borderColor: "#01A41A",
            bgColor: "#01A41A",
            textAlign: "center",
            padding: 5
          }
        }],
        showScale: true,//比例尺
        showCompass: true,//指南针
        enableSatellite: false, //卫星图
        enable3D: true,//楼房模式
        enableOverlooking: false,//俯视*
        enableZoom: true,//是否可缩放
        enableScroll: true,//是否可拖动
        enableRotate: false,//是否可旋转
        enableTraffic: false,//实时路况,
        circles: [{
          latitude: 28.0152410789583,
          longitude: 115.91940879821777,
          fillColor: "#8001A41A",
          radius: 350,
          strokeWidth: 0.1
        }]
    },
    viewList:[{
      name: "卫星视觉",
      status: 0
    }]
  },
  checkboxChange(e){
    let that = this
    let array = e.detail.value
    console.log(array)
    if(array){
      that.setData({
        'setList.enableSatellite': array.indexOf('0')>-1 ? true:false,
        'setList.enableTraffic': array.indexOf('1')>-1 ? true:false,
        'setList.enable3D': array.indexOf('2')>-1 ? true:false
      })
    }    
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