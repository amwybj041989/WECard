//index.js
// import { Footer } from '../component/footer/footer.js';

//获取应用实例
var app = getApp()
Page({
  data: {
    modalHidden: true,
    actionSheetHidden: true,
    user:[],
    keywords: "",
    page: 1,
    size: 10,
    sortField: "default",
    sortOrder: "desc",
    sortFieldTxt: "综合排序",
    token: "",
    moreHidden: true
  },
  // 综合排序
  actionSheetTap: function (e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  actionSheetChange: function (e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  fnSortField: function () {
    this.setData({
      sortField: "default",
      actionSheetHidden: !this.data.actionSheetHidden,
      sortFieldTxt: "综合排序",
      page:1
    })

    let _this = this;
    wx.request({
      url: 'http://123.206.120.120:8080/MicroBusinessCard/app/business/login.html?userName=admin',
      data: {
        keywords: _this.data.keywords,
        page: _this.data.page,
        size: _this.data.size,
        sortField: _this.data.sortField,
        token: wx.getStorageSync('token')
      },
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res);
        if (res.data.err == 0) {
          _this.setData({
            user: res.data.rows
          });
          console.log(user)
        }
      },
      fail: function (res) {

      },
      complete: function () {

      }
    });
  },
  fnSortOrder: function () {
    this.setData({
      sortField: "input_time",
      sortOrder: "desc",
      actionSheetHidden: !this.data.actionSheetHidden,
      sortFieldTxt: "最近注册",
      page: 1
    })
    let _this = this;
    wx.request({
      url: 'http://123.206.120.120:8080/MicroBusinessCard/app/business/login.html?userName=admin',
      data: {
        keywords: _this.data.keywords,
        page: _this.data.page,
        size: _this.data.size,
        sortField: _this.data.sortField,
        sortOrder: _this.data.sortOrder,
        token: wx.getStorageSync('token')
      },
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res);
        if (res.data.err == 0) {
          _this.setData({
            user: res.data.rows
         
          });
             console.log(user)
        }
      }
    });
  },
  // 粉丝、关注
//   toMyfans:function(){
//      this.setData({
//       token: wx.getStorageSync('token')
//     });
//     wx.navigateTo({
//       url: '../myfans/myfans'
//     })
//   },
//  toMyFoucs:function(){
//     this.setData({
//       token: wx.getStorageSync('token')
//     });
//    wx.navigateTo({
//      url: '../myfocus/myfocus'
     
//    })
//  },
//  页面相关事件处理函数--监听用户下拉动作
onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作
    let _this = this;
    this.setData({page: 1});
    wx.request({
      url: 'http://123.206.120.120:8080/MicroBusinessCard/app/business/login.html?userName=admin',
      data: {
        keywords: _this.data.keywords,
        page: _this.data.page,
        size: _this.data.size,
        sortField: _this.data.sortField,
        sortOrder: _this.data.sortOrder,
        token: wx.getStorageSync('token')
      },
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res);
        if (res.data.err == 0) {
          _this.setData({
           user: res.data.rows
          });
          wx.stopPullDownRefresh();
        }
      }
    });
  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数
    this.setData({moreHidden: false});
    let _this = this;
    _this.data.page++;
    wx.request({
      url: 'http://123.206.120.120:8080/MicroBusinessCard/app/business/login.html?userName=admin',
      data: {
        keywords: _this.data.keywords,
        page: _this.data.page,
        size: _this.data.size,
        sortField: _this.data.sortField,
        sortOrder: _this.data.sortOrder,
        token: wx.getStorageSync('token')
      },
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res);
        if (res.data.err == 0) {
          _this.setData({
            user: _this.data.name.concat(res.data.persons)
          });
        }
      },
      fail:function(){

      },
      complete:function(){
        _this.setData({
          moreHidden: true
        })
      }
    });    
  },
  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    //new app.Footer();

    // let router = getCurrentPages()[0].__route__;
    // console.log(router);
    // switch (router) {
    //   case "pages/release/release":
    //     this.setData({ isRelease: "footerOn" });
    //     break;
    //   case "pages/index/index":
    //     this.setData({ isIndex: "footerOn" });
    //     break;
    // }

    let _this = this;
    wx.request({
      url: 'http://123.206.120.120:8080/MicroBusinessCard/app/business/login.html?userName=admin',
      data: {
        keywords: _this.data.keywords,
        page: 1,
        size: _this.data.size,
        sortField: _this.data.sortField,
        sortOrder: _this.data.sortOrder,
        token: wx.getStorageSync('token')
      },
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        _this.setData({
          user:res.data.rows
        });
        if (res.data.err == 0) {
          _this.setData({
            user: res.data
          });
        }
      }
    });

  }
})
