import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {labelStyle, inputStyle, containerStyle} = styles;
    return (
      <View style={[containerStyle, this.props.style]}>
        {/* <Text style={labelStyle}>{this.props.label}</Text> */}
        <Icon
          name="search"
          size={20}
          color={'gray'}
          style={{marginRight: 10}}
        />

        <TextInput
          secureTextEntry={this.props.secure}
          style={[inputStyle, this.props.Inputstyle]}
          onChangeText={this.props.onChangeText}
          value={this.props.value}
          autoCorrect={false}
          placeholderStyle={{color: 'red'}}
          placeholder={[
            this.props.placeholder,
            this.props.placeholderTextStyle,
          ]}
          {...this.props}
        />
      </View>
    );
  }
}
const styles = {
  inputStyle: {
    // backgroundColor: 'rgba(247,247,255,1)',
    // color: 'rgba(52,133,239,1)',
    // padding: 5,
    // padding: 5,
    // fontSize: 18,
    // lineHeight: 23,
    // padding: 10,
    // // flex: 2,
    // borderWidth: 0.5,
    // borderColor: 'gray',
    // width: '100%',
    // borderRadius: 10,
  },
  labelStyle: {
    //flex: 1,
    fontSize: 18,
    //paddingLeft: 20,
    color: 'white',
  },
  containerStyle: {
    flexDirection: 'row',
    // flex: 1,
    height: 40,
    alignItems: 'center',
    //borderWidth:2,
    //borderColor:'red',
    width: '100%',
  },
};

export {Input};
