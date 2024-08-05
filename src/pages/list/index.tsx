import { View, Text } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import { useRequest } from "ahooks";
import { Button } from "@taroify/core"
// import { ChatOutlined } from "@taroify/icons"
import "@taroify/core/button/style"

import "./index.less";

export default function List() {
  useLoad(() => {
    console.log("list  Page loaded.");
  });

  const { loading, run, data } = useRequest(
    async () => {
      const res = await Taro.request({
        url: `https://www.v2ex.com/api/topics/hot.json`,
      });
      const list = res.data || [];
      return list;
    },
    {
      manual: false,
    }
  );
      console.log("list", data);
      return (
    <View className='list-page'>
      <Text>周水莲！！</Text>
      {/* <ChatOutlined /> */}
      <Button color='primary'>主要按钮</Button>
      {data?.length ? data?.map((item) => <view style={{
        display:'block',
        color:'red'
      }} key={item}
      >{item.title}</view>) : null}
    </View>
  );
}
