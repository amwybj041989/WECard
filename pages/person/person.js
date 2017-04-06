// pages/person/person.js
Page({
  data:{
    user:[]
  },
  onLoad:function(options){
    let _this=this
    wx.request({
      url: 'http://123.206.120.120:8080/MicroBusinessCard/app/business/login.html?userName=admin',
      data: {

      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
         'content-type': 'application/json'
      }, // 设置请求的 header

      success: function(res){
        // success
        _this.setData({
          user:res.data.rows
        })
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })

  },
  onReady:function(){
   
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})