export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/list/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar:{
    list:[
      {
        pagePath:'pages/index/index',
        text:'首页',

      },
      {
        pagePath:'pages/list/index',
        text:'列表页',
      },
    ]
  }
})
