//index.js
// import { Footer } from '../component/footer/footer.js';

//获取应用实例
var app = getApp()
Page({
  data: {
    modalHidden: true,
    actionSheetHidden: true,
    name: [],
    isRelease: "",
    isIndex: "",
    isHeadline: "",
    isMyzone: "",
    keywords: "",
    page: 1,
    size: 10,
    sortField: "default",
    sortOrder: "desc",
    sortFieldTxt: "综合排序",
    token: "",
    moreHidden: true
  },
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
  toMyFoucs:function(){
    this.setData({
      token: wx.getStorageSync('token')
    });
    if (this.data.token) {
        wx.navigateTo({
          url: '..//myfoucs/myfoucs'
        })
    } else {
      this.setData({
        modalHidden: false
      })
    }
  },
  toMyFans:function(){
    this.setData({
      token: wx.getStorageSync('token')
    });
    if (this.data.token) {
        wx.navigateTo({
          url: '../myfans/myfans'
        })
    } else {
      this.setData({
        modalHidden: false
      })
    }
  }
})
