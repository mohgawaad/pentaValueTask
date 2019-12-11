import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {inputStyle, containerStyle} = styles;
    return (
      <View style={[containerStyle, this.props.style]}>
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
  inputStyle: {},

  containerStyle: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    width: '100%',
  },
};

export {Input};
