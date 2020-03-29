var _dec, _class;

import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Button, Text } from "@tarojs/components-rn";
import { connect } from "@tarojs/taro-redux-rn";

import { add, minus, asyncAdd } from "../../store/actions/counter";

import indexStyleSheet from "./index_styles";

var _styleSheet = indexStyleSheet;
let Index = (_dec = connect(({ counter }) => ({
  counter
}), dispatch => ({
  add() {
    dispatch(add());
  },
  dec() {
    dispatch(minus());
  },
  asyncAdd() {
    dispatch(asyncAdd());
  }
})), _dec(_class = class Index extends Component {

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View style={_styleSheet["index"]}>
        <Button onClick={this.props.add} style={_styleSheet["add_btn"]}>+</Button>
        <Button onClick={this.props.dec} style={_styleSheet["dec_btn"]}>-</Button>
        <Button onClick={this.props.asyncAdd} style={_styleSheet["dec_btn"]}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
      </View>;
  }
}) || _class);
Index.config = {
  navigationBarTitleText: '首页'
};


export default Index;