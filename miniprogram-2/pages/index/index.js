// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    region: ['北京市','北京市','东城区'],
    now: '',
    // 城市名和ID对应表（只放了几个示例，你可以继续扩展）
    cityIdMap: {
      '北京市': '101010100',
      '上海市': '101020100',
      '广州市': '101280101',
      '深圳市': '101280601',
      '杭州市': '101210101'
    }
  },

  changeRegion: function(e) {
    this.setData({
      region: e.detail.value
    })
    this.getWeather();
  },

  getWeather: function() {
    var that = this;
    // 根据城市名找到城市ID
    var cityName = that.data.region[1];
    var cityId = that.data.cityIdMap[cityName];

    if (!cityId) {
      wx.showToast({
        title: '暂不支持该城市',
        icon: 'none'
      })
      return;
    }

    wx.request({
      url: 'https://pu63yvybtu.re.qweatherapi.com/v7/weather/now',
      data: {
        location: cityId, // 用城市ID代替
        key: '3308c3dba7804f1383de29717dd718a7'
      },
      success: function(res) {
        console.log(res.data)
        that.setData({ now: res.data.now }) // v7 API 直接返回 now
      }
    })
  },

  onLoad(options) {},
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
  onPullDownRefresh() {},
  onReachBottom() {},
  onShareAppMessage() {}
})
