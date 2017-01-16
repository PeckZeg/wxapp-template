App({
  onLaunch: function onLaunch() {
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);
  },

  getUserInfo: function getUserInfo(cb) {
    var that = this;
    if (this.globalData.userInfo) {
      if (typeof cb == 'function') {
        cb(this.globalData.userInfo);
      }
    } else {
      wx.login({
        success: function success() {
          wx.getUserInfo({
            success: function success(res) {
              that.globalData.userInfo = res.userInfo;

              if (typeof cb == 'function') {
                cb(that.globalData.userInfo);
              }
            }
          });
        }
      });
    }
  },

  globalData: {
    userInfo: null
  }
});
