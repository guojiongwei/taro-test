import Taro, { Component, createContext } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import Header from '@/components/Kind/header/Header.js'
import './list.scss'
import { HeaderContext } from '@/store/contexts/index' 
class List extends Component {
  config = {
    transparentTitle: 'auto',
    titleBarColor: '#00ff00',
    navigationBarTitleText: '列表',
    enablePullDownRefresh: true,
    backgroundTextStyle: 'dark'
  }
  state = {
    list: [],
  }
  params = {
    tabIndex: 1,
    type: 1,
    page: 1
  }
  async componentDidMount() {
    this.params.type = this.$router.params.id
    this.getListData()
  }
  getChildContext(){
    return {
      aaa: 'aaa',
      bbb: 'bbb'
    }
  }
  // 获取初始数据
  getListData = async () => {
    let { data } = await Taro.request({ url: `http://read.xiaoshuo1-sm.com/novel/i.php?do=is_novelrank&p=1&page=${this.params.page}&size=10&onlyCpBooks=1&gender=${this.params.gender}&type=${this.params.type}` })
    if(this.params.page === 1) {
      this.setState({ list: data.data })
    } else {
      this.setState({ list: this.state.list.concat(data.data) })
    }
    Taro.stopPullDownRefresh()
  }
  // 子组件tab切换
  change = (tabIndex) => {
    this.params.page = 1
    this.params.gender = tabIndex
    this.getListData()
  }
  // 下拉刷新
  onPullDownRefresh(){
    setTimeout(() => {
      Taro.stopPullDownRefresh()
    }, 1000)
  }
  // 上拉加载更多
  onReachBottom(){
    this.params.page++
    this.getListData()
  }
  render() {
    const { list } = this.state
    console.log('渲染')
    return (
      <View className='list-wrap'>
        <HeaderContext.Provider value={this.params}>
          <Header tab-wrap='tab-wrap' tab-item='tab-item' tab-active='tab-active' onChange={this.change} />
        </HeaderContext.Provider>
        <View className='list'>
          {
            list.map((item, index) => {
              return (
                <View className='list-item' key={item.id}>
                  <View className='l-left'>
                    <Image src={item.cover}></Image>
                  </View>
                  <View className='l-right'>
                    <Text className='t-title'>{item.title}</Text>
                    <View className='l-info'>
                      <Text>{item.author}</Text>
                      <View>
                        <AtIcon value='eye' size='18' color='#999'></AtIcon>
                        <Text className='l-reads'>{item.reads}</Text>
                      </View>
                    </View>
                    <View className='l-tag'>
                      <Text className={['l-text', item.status === 0 ? 'l-lz' : 'l-wj']}>{item.status === 0 ? '连载' : '完结'}</Text>
                      <Text className='l-size l-text'>{(item.words / 10000).toFixed(2)}万字</Text>
                      {item.tags.split(',').filter((item, index) => index < 2).map(item1 =>
                        (<Text className='l-text' key={item1}>{item1}</Text>)
                      )}
                    </View>
                  </View>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}
export default List