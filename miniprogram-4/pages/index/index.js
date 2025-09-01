// pages/index/index.js
function getRandomColor(){
    let rgb=[]

    for(let i=0;i<3;++i){
        let color=Math.floor(Math.random()*256).toString(16)
        color=(color.length==1)?'0'+color:color 
        rgb.push(color)
    }
    return '#'+rgb.join('')
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
        {
            id:'123',
            title:'杨国宜先生口述校史实录',
            videoUrl:'http://arch.ahnu.edu.cn/__local/6/CB/D1/C2DF3FC847F4CE2ABB67034C595_025F0082_ABD7AE2.mp4?e=.mp4'
        },
        {
            id:'456',
            title:'唐成伦先生口述校史实录',
            videoUrl:'http://arch.ahnu.edu.cn/__local/E/31/EB/2F368A265E6C842BB6A63EE5F97_425ABEDD_7167F22.mp4?e=.mp4'
        },
        {
            id:'789',
            title:'倪光明先生口述校史实录',
            videoUrl:'hhttp://arch.ahnu.edu.cn/__local/9/DC/3B/35687573BA2145023FDAEBAFE67_AAD8D222_925F3FF.mp4?e=.mp4'
        },
        {
            id:'147',
            title:'吴仪兴先生口述校史实录',
            videoUrl:'http://arch.ahnu.edu.cn/__local/5/DA/BD/7A27865731CF2B096E90B522005_A29CB142_6525BCF.mp4?e=.mp4'
        }
    ],
    src:'',
    danmuTxt:''
  },
  getDanmu:function(e){
      this.setData({
          danmuTxt:e.detail.value
      })
  },
  sendDanmu:function(e){
        let text=this.data.danmuTxt
        this.videoCtx.sendDanmu({
            text:text,
            color:getRandomColor()
        })
  },
  playVideo: function(e) {
    this.setData({
        src: e.currentTarget.dataset.url
    })
    // 先设置src，再play
    this.videoCtx.stop()
    setTimeout(() => {
        this.videoCtx.play()
    }, 100) // 给系统一点时间处理 stop
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.videoCtx=wx.createVideoContext('myVideo')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})