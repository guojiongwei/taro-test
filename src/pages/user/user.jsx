import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import Cat from '@/components/user/Cat/Cat.js'
import Mouse from '@/components/user/Mouse/Mouse.js'
import './user.scss'
let TARO_ENV = process.env.TARO_ENV

class User extends Component {
  componentDidMount(){
    if(TARO_ENV === 'alipay'){
      if(TARO_ENV === 'alipay'){
        my.getOpenUserInfo({
          success: (res) => {
            let userInfo = JSON.parse(res.response).response // 以下方的报文格式解析两层 response
            console.log(userInfo)
            my.getAuthCode({
              scopes: 'auth_user',
              success: (res1) => {
                console.log('res1', res1)
              },
            });
          }
        });
      }
    }
  }
  onGetUserInfo = res => {
    // console.log(res)
    if(TARO_ENV === 'alipay'){
      my.getOpenUserInfo({
        success: (res) => {
          let userInfo = JSON.parse(res.response).response // 以下方的报文格式解析两层 response
          console.log(userInfo)
          my.getAuthCode({
            scopes: 'auth_user',
            success: (res1) => {
              console.log('res1', res1)
            },
          });
        }
      });
    }
  }
  render(){
    return (
      <View>
        <Text>我是个人中心页面</Text>
        {TARO_ENV === 'weapp' &&  <Button openType='getUserInfo' onGetUserInfo={this.onGetUserInfo}>获取个人信息</Button> }
        {TARO_ENV === 'alipay' && <Button open-type='getAuthorize' onGetAuthorize={this.onGetUserInfo} scope='userInfo'>获取个人信息11</Button> }
        <Mouse renderCat={mouse => (
          <Cat a='111' mouse={mouse} />
        )}/>
      </View>
    )
  }
}
export default User