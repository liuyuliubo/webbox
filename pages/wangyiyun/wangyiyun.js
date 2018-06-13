// pages/wangyiyun/wangyiyun.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Ips: 'http://192.168.43.151:3000',
    Ip:'http://192.168.43.151:3333',
    arr:[]
  
  },
  nexclick(){
    wx.request({
      url: this.data.Ip+'/songList/find', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:((res)=>{
        this.setData({
          arr:res.data

        })
        console.log(res.data)
      })
      
    })
  },
  onTap(event){
    var id = event.currentTarget.dataset.id;
    console.log(id);
    wx.redirectTo({
      url: '../music/music?id=' +id,
    })
  }
})