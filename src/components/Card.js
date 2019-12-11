import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {containerStyle} = styles;
    return (
      <TouchableOpacity
        style={[containerStyle, this.props.style]}
        onPress={this.props.myNavigation}>
        {this.props.children}
      </TouchableOpacity>
    );
  }
}
const styles = {
  containerStyle: {
    width: 150,
    height: 150,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextStyle: {
    fontSize: 20,
  },
};

export {Card};
