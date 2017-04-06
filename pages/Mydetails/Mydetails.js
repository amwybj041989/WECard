var app = getApp();
Page({
  data:{
    user_name: "",
     company: "",
    mobile: "",
    thumb: "",
    modalHidden: true
  },
  // 跳转
  toMyfans: function () {
    this.setData({
      token: wx.getStorageSync('token')
    })
    wx.navigateTo({
     url: '../myfans/myfans'
       })
},
  toHelp: function () {
    this.setData({
      token: wx.getStorageSync('token')
    });
   wx.navigateTo({
     url: '../help/help'
   })
  },
  toMyFocus: function () {
    this.setData({
      token: wx.getStorageSync('token')
    });
     wx.navigateTo({
     url: '../myfocus/myfocus'
   })
  },
  toPersonEdit:function(){
     this.setData({
      token: wx.getStorageSync('token')
    });
   wx.navigateTo({
     url: '../personEdit/personEdit'
   })
  },

  onLoad: function (options) {
    // 生命周期函数--监听页面加载

    var router = getCurrentPages()[0].__route__;
    console.log(router);
    switch (router) {
      case "pages/release/release":
        this.setData({ isRelease: "footerOn" });
        break;
      case "pages/index/index":
        this.setData({ isIndex: "footerOn" });
        break;
      case "pages/index/index":
        this.setData({ isIndex: "footerOn" });
        break;
      case "pages/mydetails/mydetails":
        this.setData({ isMyDetails: "footerOn" });
        break;
    }

    let _this = this;
    wx.request({
      url: app.globalData.apiHost+'/mydetails',
      data: {
          token: wx.getStorageSync('token')
      },
      method: 'GET', 
      header: {
        'content-type': 'application/json'
      },
      success: function(res){
          if(res.data.err==1){
              console.log("1");
          }else{
              _this.setData({
                  company: res.data.data.name,
                  user_name:res.data.data.user_name,
                  mobile:res.data.data.mobile,
                  thumb:res.data.data.thumb,
                });			
          }        
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })

  }

})