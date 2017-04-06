var app = getApp();

Page({
  data: {
    username: "",
    company: "",
    userjob: "",
    useremail: "",
    userphone: "",
    useravatar: "",
    business: "",
    useraddress: "",
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  upImg: function () {
    let _this = this
    wx.chooseImage({
      count: 1, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        let tempFilePaths = res.tempFilePaths
        _this.setData({
          useravatar: tempFilePaths
        })
        wx.saveFile({
          tempFilePath: tempFilePaths[0],
          success: function (res) {
            var savedFilePath = res.savedFilePath
          }
        })
      }
    })
  },
  chooseAddress: function () {
    let _this = this
    wx.chooseLocation({
      success: function (res) {
        // success
        _this.setData({
          useraddress: res.address
        })
      }

    })
  },
  updatausername: function (e) {
    let _this = this
    _this.setData({
      username: e.detail.value
    })
  },
  updatauserphone: function (e) {
    let _this = this
    _this.setData({
      userphone: e.detail.value
    })
  },
  updatauseremail: function (e) {
    let _this = this

    _this.setData({
      useremail: e.detail.value
    })
  },
  updatcompany: function (e) {
    let _this = this
    _this.setData({
      company: e.detail.value
    })
  },
  updatabusiness: function (e) {
    let _this = this
    _this.setData({
      business: e.detail.value
    })
  },
  updatauserjob: function (e) {
    let _this = this
    _this.setData({
      userjob: e.detail.value
    })
  },
  chooseAddressChange:function(e){
    console.log(e)
    let _this=this
    let iptvalue=e.detail.value
  },
  submit: function () {
    let _this = this
    wx.request({
      url: 'http://123.206.120.120:8080/MicroBusinessCard/app/business/login.html',
      data: {
        userName: _this.username,
        userCompany: _this.company,
        userJob:_this.userjob,
        userEmail: _this.useremail,
        userPhone: _this.userphone,
        userAvatar: _this.useravatar,
        userBusiness: _this.business,
        userAddress: _this.useraddress
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type': 'application/json'
      }, // 设置请求的 header
      success: function (res) {
        // success
      },
      fail: function (res) {
        // fail
        // console.log(res.err)
      },
      complete: function (res) {
        // complete
      }
    })
  }
})