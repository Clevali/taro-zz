export default defineAppConfig({
  pages: ["pages/list/index", "pages/index/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/list/index",
        text: "列表页",
      },
      {
        pagePath: "pages/index/index",
        text: "首页",
      },
    ],
  },
});
