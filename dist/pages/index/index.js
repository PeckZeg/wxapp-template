var app = getApp();

Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },

  bindViewTap: function bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    });
  },

  onLoad: function onLoad() {
    var that = this;

    console.log('onLoad');

    app.getUserInfo(function (userInfo) {
      that.setData({ userInfo: userInfo });
    });
  }
});
