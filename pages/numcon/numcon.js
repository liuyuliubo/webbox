// pages/numcon/numcon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 0,
    name:'张三',
    arr:[]
  },
  addclick() {
    this.setData({
      num: this.data.num + 1,
 
    })
  },

  nexclick() {
    wx.request({
      url: 'http://192.168.43.151:3333/song/find', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        this.setData({
          arr: res.data

        })

        console.log(res.data)
  
      }
    })

  },

  

})