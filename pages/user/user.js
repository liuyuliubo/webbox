// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')

  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },


  onLoad: function () {
    // 查看是否授权wei
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userLocation']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              wx.getLocation
              console.log(res.userInfo)
            }
          })
        }
      }
    }),
      wx.getSetting({
        success(res) {
          if (!res.authSetting['scope.userLocation']) {
            wx.authorize({
              scope: 'scope.userLocation',
              success() {
                // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                wx.chooseLocation({})
              }
            })
          }
        }
      })
  },
  bindGetUserInfo: function (e) {
    console.log(e.detail.userInfo)
  },
  

})
// 查看是否授权
// wx.getSetting({
//   success(res) {
//     wx.getLocation({
//       type: 'wgs84',
//       success: function (res) {
//         var latitude = res.latitude
//         var longitude = res.longitude
//         var speed = res.speed
//         var accuracy = res.accuracy
//       }
//     })

//   }

// })


// Page({
//   data: {
//     markers: [{
//       iconPath: "/resources/others.png",
//       id: 0,
//       latitude: 23.099994,
//       longitude: 113.324520,
//       width: 50,
//       height: 50
//     }],
//     polyline: [{
//       points: [{
//         longitude: 113.3245211,
//         latitude: 23.10229
//       }, {
//         longitude: 113.324520,
//         latitude: 23.21229
//       }],
//       color: "#FF0000DD",
//       width: 2,
//       dottedLine: true
//     }],
//     controls: [{
//       id: 1,
//       iconPath: '/resources/location.png',
//       position: {
//         left: 0,
//         top: 300 - 50,
//         width: 50,
//         height: 50
//       },
//       clickable: true
//     }]
//   },
//   regionchange(e) {
//     console.log(e.type)
//   },
//   markertap(e) {
//     console.log(e.markerId)
//   },
//   controltap(e) {
//     console.log(e.controlId)
//   }
// })