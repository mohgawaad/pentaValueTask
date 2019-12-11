import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input} from './Input';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {containerStyle} = styles;
    return (
      <View style={containerStyle}>
        <View style={{width: '100%', alignSelf: 'center'}}>
          <Input
            placeholder="Search Cards ..."
            placeholderStyle={{marginLeft: 100}}
            placeholderTextColor="rgba(151,156,161,1)"
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'rgba(247,247,255,1)',
    color: 'rgba(52,133,239,1)',
    paddingHorizontal: 5,
    fontSize: 18,
    lineHeight: 23,
    borderWidth: 0.5,
    borderColor: 'gray',
    width: '100%',
    borderRadius: 10,
  },
});

export {Search};
