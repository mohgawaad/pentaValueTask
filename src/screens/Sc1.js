import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

class Sc1 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {containerStyle, ViewStyle,TextStyle} = styles;
    return (
      <View style={[containerStyle, this.props.style]}>
        <View style={ViewStyle}>
          <Text style={TextStyle}>comming soon</Text>
        </View>
      </View>
    );
  }
}
const styles = {
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  TextStyle: {
    fontSize: 30,fontWeight: 'bold',
  },
  ViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
    borderRadius: 15,
    borderWidth: 2,
    backgroundColor: 'rgba(247,247,254,1)',
    borderColor: 'rgba(215,215,216,1)',
  },
};

export {Sc1};
