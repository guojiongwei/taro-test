import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import PropTypes from 'prop-types';
import { HeaderContext } from '@/store/contexts/index.js' 
class Header extends Component {
  static externalClasses = ['tab-wrap', 'tab-item', 'tab-active']
  static defaultProps = {
    test: '11111'
  }
  static contextType = HeaderContext
  state = {
    tabIndex: 1
  }
  componentDidMount(){
    console.log('子组件', this)
  }
  render(){
    const { onChange } = this.props
    const { tabIndex } = this.state
    return (
      <View className='tab-wrap'>
        <Text className={['tab-item', tabIndex === 1 ? 'tab-active' : '']} onClick={ () => { this.setState({ tabIndex: 1 }, () => onChange(1))}}>男生</Text>
        <Text className={['tab-item', tabIndex === 2 ? 'tab-active' : '']} onClick={ () => { this.setState({ tabIndex: 2 }, () => onChange(2))}}>女生</Text>
      </View>
    )
  }
}
Header.propTypes = {}
export default Header