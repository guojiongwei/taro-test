// mouse.js
import Taro, { Component } from '@tarojs/taro'
class Mouse extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleClick.bind(this);
    this.state = { x: 0, y: 0 };
    console.log(11, this)
  }

  handleClick(event) {
    console.log(event)
    const { x, y }  = event.detail
    this.setState({
      x,
      y
    });
  }

  render() {
    // console.log('this.state', this.state)
    return (
      <View style={{ position: 'fixed', width: '100%', height: '100%', background: '#eee' }} onClick={this.handleClick}>

        {/*
          我们可以把 prop 当成一个函数，动态地调整渲染内容。
        */}
        {this.props.renderCat(this.state)}
      </View>
    );
  }
}
export default Mouse