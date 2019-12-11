import React from 'react';
import {Text, View} from 'react-native';
import {Styles} from './style';

export const SecondRoute = () => {
  const {containerStyle, ViewStyle, TextStyle} = Styles;
  return (
    <View style={containerStyle}>
      <View style={ViewStyle}>
        <Text style={TextStyle}>comming soon</Text>
      </View>
    </View>
  );
};
