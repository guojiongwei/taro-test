import Taro, { Component } from '@tarojs/taro'
class Cat extends Component {
  static defaultProps = {
    mouse: {
      x: 0,
      y: 0
    }
  }

  render() {
    console.log('111')
    let mouse = JSON.parse(JSON.stringify(this.props.mouse))
    console.log('mouse', mouse)
    return (
      <Image src='https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1667994205,255365672&fm=5' style={{ position: 'fixed', left: mouse.x+'px', top: mouse.y+'px' }} />
    );
  }
}
export default Cat