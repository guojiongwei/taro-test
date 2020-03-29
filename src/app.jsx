import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'
import 'taro-ui/dist/style/index.scss' // 引入组件样式 - 方式一
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/kind/kind',
      'pages/cart/cart',
      'pages/user/user',
      'pages/list/list'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#878787',
      selectedColor: '#10bbb8',
      backgroundColor: '#ffffff',
      borderStyle: 'black',
      list: [
        {
          text: '首页',
          pagePath: 'pages/index/index',
          iconPath: 'assets/images/tabbar/home.png',
          selectedIconPath: 'assets/images/tabbar/home-hover.png'
        },

        {
          text: '分类',
          pagePath: 'pages/kind/kind',
          iconPath: 'assets/images/tabbar/classification.png',
          selectedIconPath: 'assets/images/tabbar/classification-hover.png'
        },

        {
          text: '购物车',
          pagePath: 'pages/cart/cart',
          iconPath: 'assets/images/tabbar/cart.png',
          selectedIconPath: 'assets/images/tabbar/cart-hover.png'
        },
        {
          text: '我的',
          pagePath: 'pages/user/user',
          iconPath: 'assets/images/tabbar/my.png',
          selectedIconPath: 'assets/images/tabbar/my-hover.png'
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
