var app = getApp();

Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },

  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    });
  },

  onLoad: function() {
    var that = this;

    console.log('onLoad');

    app.getUserInfo(function(userInfo) {
      that.setData({ userInfo });
    });
  }
});
