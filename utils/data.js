//随机30条祝福
const urlHost = getApp().globalData.urlHost;
let zhuFuList = {
  1: {
    name: "内容1"
  },
  2: {
    name: "内容2"
  },
  3: {
    name: "内容3"
  },
  4: {
    name: "内容4"
  },
  5: {
    name: "内容5"
  },
  6: {
    name: "内容6"
  },
  7: {
    name: "内容7"
  },
  8: {
    name: "内容8"
  },
  9: {
    name: "内容9"
  },
  10: {
    name: "内容10"
  },
  11: {
    name: "内容11"
  },
  12: {
    name: "内容12"
  },
  13: {
    name: "内容13"
  },
  14: {
    name: "内容14"
  },
  15: {
    name: "内容15"
  },
  16: {
    name: "内容16"
  },
  17: {
    name: "内容17"
  },
  18: {
    name: "内容18"
  },
  19: {
    name: "内容19"
  },
  20: {
    name: "内容20"
  },
  21: {
    name: "内容21"
  },
  22: {
    name: "内容22"
  },
  23: {
    name: "内容23"
  },
  24: {
    name: "内容24"
  },
  25: {
    name: "内容25"
  },
  26: {
    name: "内容26"
  },
  27: {
    name: "内容27"
  },
  28: {
    name: "内容28"
  },
  29: {
    name: "内容29"
  },
  30: {
    name: "内容30"
  }
}
//关于的的秒速
let aboutMeText = "这是是关于次小程序的由来，创造经历， 以及开发人员的描述"
//移动的横幅文字
let animaText = "？？？给你拜年啦！祝您在新的一年新里:前途平坦，兜里有款，甜长苦短，薪水翻番，好吃好穿，常有新欢，追求的路程越走越宽！"
//四句诗
let verse = [
  '律转鸿钧佳气同',
  '肩摩毂击乐融融',
  '不须迎向东郊去',
  '春在千门万户中'
]
//写下的祝福 
let textList = [
  {
    gender: 1,
    text: '除夕盛宴，温馨话甘甜，欢乐喜庆笑颜，新春吉祥共祝愿，万事如意勤劳挣钱，福禄寿禧康泰艳阳天，歌盛世幸福生活乐无边！',
    name: 'Jyc',
    pathUrl: "https://wx.qlogo.cn/mmopen/vi_32/mh49eDyqRE4R346DzcbWrtlXY0fNbPkz7a4ytWiaibwtVumMQ8VbLmvrl3qONrVuQxxjqxqWbf2NPk4G4M8aWMvA/132",
  }, {
    gender: 0,
    text: '鼠年运气好，财源滚滚到。拼打人生路，成功业绩高。人财双丰收，步入顺利桥。美好前程在，和谐最重要。祝你们一路运气处处招!',
    name: 'Fjh',
    pathUrl: urlHost + 'img/' + 'back_div' + '.jpg',
  }, {
    gender: 0,
    text: '新年钟声敲，鼠年来报到;鸡子，好事准来到;鸡子跳一跳，鸿运当头照;鸡子抱一抱，幸福紧紧来围绕。短信到，提前祝你新年好!',
    name: 'Glz',
    pathUrl: urlHost + 'img/' + 'back_div' + '.jpg',
  }
]
//
module.exports.data = {
  zhuFuList,
  aboutMeText,
  animaText,
  verse,
  textList
};