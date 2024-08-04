import { View, Text } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import "./index.less";
import { useRequest } from "ahooks";

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
      {data?.length ? data?.map((item) => <view style={{
        display:'block',
        color:'red'
      }} key={item}
      >{item.title}</view>) : null}
    </View>
  );
}
