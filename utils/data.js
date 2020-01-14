//随机30条祝福
const urlHost = getApp().globalData.urlHost;
let zhuFuList = {
  1: {
    name: "茶要浓的，细细品尝；酒要香的，痛快畅饮；爱要真的，轰烈无悔；朋友要知心的，互爱互助！嘿，拿手机的这个就很不错！新年快乐！"
  },
  2: {
    name: "春夏秋冬，四季轮回，春节来到，新春伊始，祝愿朋友：燃希望之火，保一腔热情；树远大目标，增一股动力；立坚定信念，创一番事业；持平和心态，守一生幸福！"
  },
  3: {
    name: "爆竹声声打破旧日的烦恼，礼花缤纷迎来新年的吉兆。大红的灯笼映照在每个喜悦的脸庞。新年到了，愿你事事顺心，快乐常在！"
  },
  4: {
    name: "人生是一道解析题，每个阶段是判断题，每天的生活是选择题。完成了选择题，才有判断的权利，做好了判断题才有解析的意义。愿你新年做出完美答卷!"
  },
  5: {
    name: "敲响的是钟声，走过的是岁月，留下的是故事，带走的是希望，盼望的是美好，送来的是祝福，愿我的朋友在2020新的一年里;幸福快乐!"
  },
  6: {
    name: "我要把一切喜庆变成奶油，所有祝福揉成巧克力，永远快乐做成蛋糕砸向你，然后说声：鼠年笑口常开。"
  },
  7: {
    name: "圣诞过了，春节走了，新年来啦，这些日子你快乐吗?愿这些快乐、开心永驻于你年的每一天中。"
  },
  8: {
    name: "自然界中最少的元素是爱(砹)，最多的是情(氢)。两者的结合就是爱情。祝你新年爱情美满。千纸鹤，千颗心，永远祝福你。祝大家新年快乐!"
  },
  9: {
    name: "神说，要有光，于是世界有了光。神说，要有大地，于是世界有了大地，神看着是好的。神说，要有春节，这样你才会万事如意。神看着更是好的。祝春节快乐!"
  },
  10: {
    name: "愁烦随着缓缓时光，慢慢溜走，悲伤随着辞岁迎新，彻底消失;快乐伴着璀璨烟花，彻底绽放;好运伴着美酒，绵绵无期;问候随着短信，温馨送到;祝福伴着真挚，甜你心间。亲爱的朋友，祝你春节快乐，福星高照!"
  },
  11: {
    name: "新的一年开启新的希望，新的空白承载新的梦想，拂去岁月之尘，让欢笑和泪水，爱与哀愁在心中凝成一颗厚重的晶莹的琥珀，新年快乐!"
  },
  12: {
    name: "祝你在鼠年的日子里，“钱”程似锦，“富”如东海，“瘦”比南山，“性”福美满、“鸡”洋得意，“鑫”春快乐!"
  },
  13: {
    name: "春节来了，你要把好运紧紧拥抱，把爱情彻底抓牢，把快乐时刻来瞄，把幸福追着狂跑，至于那钞票，别不拔一毛，请我吃饭唠叨，哈哈，春节快乐!"
  },
  14: {
    name: "事如意包围了，乖乖接受祝福才是唯一的出路!否则将有更多的鼠年大发雨天天开心射向你!新年愉快!"
  },
  15: {
    name: "今年春节不收礼，要是给点也可以;十块八块不嫌少，一千两千过得去;要是真的没有礼，微信一条也可以;即使一句祝福语，开心一下成知己。新年快乐！"
  },
  16: {
    name: "过年了，送您一副对联！上联：该吃吃，该喝喝，遇事别往心里搁。下联：泡着澡，看着表，舒服一秒是一秒。横批：开心就好！"
  },
  17: {
    name: "鼠年快乐!合家幸福!在新的一年里好事多多!笑容多多!开心每一秒，快乐每一天，幸福每一年，健康到永远!"
  },
  18: {
    name: "过年了，送您一副对联！上联：该吃吃，该喝喝，遇事别往心里搁。下联：泡着澡，看着表，舒服一秒是一秒。横批：开心就好！"
  },
  19: {
    name: "有句话一直没敢对你说，可是新年再不说就没机会了：你真的好讨厌——（讨）人喜欢，百看不（厌）！最后再加上一句——新年快乐！"
  },
  20: {
    name: "圣诞连着元旦，元旦连着新年，祝福密似子弹，问候如同重磅炸弹。我的短信是飞毛腿导弹，释放快乐原子乐翻天;我的祝福是糖衣炮弹，愿你的生活比蜜甜!"
  },
  21: {
    name: "高山上的人总能最先看到新一年的日出，有了您的高瞻远瞩，您的事业必然前景辉煌。祝您鹏程万里!"
  },
  22: {
    name: "祝你：生活越来越好，年龄越看越小，经济再往上跑，别墅钻石珠宝，开着宝马炫耀，挣钱如同割草，感觉贼好!哈哈，为你这样的朋友骄傲!"
  },
  23: {
    name: "零时的钟声响彻天涯，新年的列车准时出发。它驮去一个难忘的岁月，迎来了又一度火红的年华。祝你春节快乐!"
  },
  24: {
    name: "将一年的晦气，装进爆竹，带到九霄云外，炸它个粉身碎骨。把来年的运气，装进礼花，让幸福满地的萌发，漫天的飘洒。祝您春节快乐!"
  },
  25: {
    name: "送走了一年的辛劳，迎来了又一个崭新的年月，祝您在新的一年里，大展宏图，财源广进!"
  },
  26: {
    name: "人生忙忙碌碌，日子酸酸甜甜，给自己一个健康，快乐的心理暗示，快快乐乐地过好每一天，人生平平淡淡才是真!春节快乐!"
  },
  27: {
    name: "痛苦最好是别人的，快乐才是自己的;麻烦将是暂时的，朋友总是永恒的;爱情是用心经营的，世界上没有什么大不了的。2020新年快乐！"
  },
  28: {
    name: "岁月可以褪去记忆，却褪不去我们一路留下的欢声笑语。祝你2020年新春快乐，岁岁安怡!"
  },
  29: {
    name: "新年快乐!新的1年：祝好事接2连3心情4季如春生活5颜6色7彩缤纷偶尔8点小财烦恼抛至9霄外!请接受我10心10意的祝福！"
  },
  30: {
    name: "今年是2020年，你将很有钱，多得拿不住，憋烂小金库，银行是你家，钱你随便花，赚遍全世界，到哪哪就发!记住这号码，准会一路发"
  }
}
//关于的的秒速
let aboutMeText = "本程序由本程序管理员自主开发，无任何商业盈利目的，谨以此小程序向各位亲朋好友拜个年并且索要个拜年话红包哈哈哈，如有图片侵权请联系删除。（在开发的过程中也感谢一些朋友的帮助，在这里表示感谢），祝大家新年快乐！"
//移动的横幅文字
let animaText = "2020年到了，蒋雨成祝你在新的一年新里:前途平坦，甜长苦短，薪水翻番，好吃好穿，追求的路程越走越宽！"
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
// 滚动的图片组
let listImg = [
  urlHost + 'img_index/' + 'nian1.jpg',
  urlHost + 'img_index/' + 'nian4.jpg',
  urlHost + 'img_index/' + 'nian5.jpg',
  urlHost + 'img_index/' + 'nian2.jpg',
  urlHost + 'img_index/' + 'nian3.jpg',
  urlHost + 'img_index/' + 'nian6.jpg',
  urlHost + 'img_index/' + 'nian7.jpg',
  urlHost + 'img_index/' + 'nian8.jpg',
]
let dateArray = [
  ['不定','今天','明天','后天','大后天',''], 
  ['不定','01点','02点','03点','04点','05点','06点','07点','08点','09点','10点','11点','12点',
      '13点','14点','15点','16点','17点','18点','19点','20点','21点','22点','23点','00点',]
]
let dateArray1 = [
  ['不定','今天','明天','后天','大后天',''], 
  ['不定','01点','02点','03点','04点','05点','06点','07点','08点','09点','10点','11点','12点',
      '13点','14点','15点','16点','17点','18点','19点','20点','21点','22点','23点','00点',]
]
let otherList = {
  0:{
   id: 0,
   name: "联系我",
   url: urlHost + 'img/dianhua.png' 
  },
  1:{
    id: 1,
    name: '我家在哪',
    url: urlHost + 'img/ditu.png'
  },
  2:{
    id: 2,
    name: '获取微信',
    url: urlHost + 'img/weixin.png' 
  },
  3:{
    id: 3,
    name: '我的家乡',
    url: urlHost + 'img/xiu.png' 
  }
}
let otherList1 = {
  0:{
   id: 0,
   name: "获取公众号",
   url: urlHost + 'img/dingyue.png' 
  }
}
module.exports.data = {
  zhuFuList,
  aboutMeText,
  animaText,
  verse,
  textList,
  listImg,
  dateArray,
  dateArray1,
  otherList,
  otherList1
};