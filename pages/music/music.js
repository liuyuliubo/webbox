// pages/music/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Ips: 'http://192.168.43.151:3000',
    Ip: 'http://192.168.43.151:3333',
    song: [],
    img:'',
    title:''

  },
  onLoad: function (options) {
    var id = options.id;
    wx.request({
      url: this.data.Ip + '/songList/find', //仅为示例，并非真实的接口地址
      data: {
        submitType: 'findJoin',
        ref: ['song', '']
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: ((res) => {
        console.log(res.data)
        for (let item of res.data) {
          console.log(item)
          if (item._id == id) {
            this.setData({
              song: item.song,
              img:item.img,
              title:item.title
            })

          }

        }

      })
    })

  },
})