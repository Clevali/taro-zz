// 云函数入口文件
const cloud = require("wx-server-sdk");

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }); // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  // const db = cloud.database()
  // const todos = db.collection("device_list");
  // const list = await todos.where({}).get();
  // console.log("list", list);
  return {
    test: list,
  };
};
