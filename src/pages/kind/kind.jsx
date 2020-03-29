import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Navigator } from '@tarojs/components'
import './kind.scss'
class Kind extends Component {
  config = {
    transparentTitle: 'auto',
    titleBarColor: '#00ff00',
    navigationBarTitleText: '分类'
  }
  state = {
    name: '郭炯韦',
    list: []
  }
  async componentDidMount(){
    let { data } = await Taro.request({ url: 'http://bookstoreapi.shuqireader.com/eva_bookstore/v1/stencil/query?appId=1&pageId=4&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=888154902&timestamp=1510995729&type=2&resetcache=&sign=684170D8D0FDF838181A40368FCF1EE0&key=shuqiapi' })
    this.setState({ list: data.data.module.filter(item => item.m_s_name) })
  }
  change = (name) => {
    console.log(1111, name, this)
    this.setState({
      name: name+'1'
    })
  }
  render(){
    const { name, list } = this.state
    console.log(list)
    return (
      <View className='kind-wrap'>
        {
          list.map((item, index) => {
            return (
              <Navigator url={`/pages/list/list?id=${index*1+1}`} className='k-list' key={item.id}>
                <View className='k-title'>{ item.content.title }</View>
                <Text className='k-desc'>{ item.content.desc }</Text>
              </Navigator>
            )
          })
        }
      </View>
    )
  }
}
export default Kind