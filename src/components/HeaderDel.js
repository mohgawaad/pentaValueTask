import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from 'react-navigation-hooks';

const HeaderDel = iconName => {
  const navigation = useNavigation();
  console.log('iconname', iconName);
  const {txtStyle, iconContainer, containerStyle, blockStyle} = styles;
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon style={{marginTop: 4}} name="chevron-left" size={20} />
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <View style={containerStyle}>
          <Icon name={iconName.name.proIcon} size={22} />
        </View>
        <View>
          <Text style={txtStyle}>{iconName.name.project}</Text>
        </View>
      </View>

      <View style={blockStyle}>
        <TouchableOpacity style={[iconContainer, {marginHorizontal: 5}]}>
          <Icon name="bell" size={30} color={'white'} />
        </TouchableOpacity>
        <TouchableOpacity style={iconContainer}>
          <Icon name="ellipsis-h" size={30} color={'white'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    width: 40,
    height: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
    borderColor: 'gray',
    borderWidth: 2,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(62,133,247,1)',
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(62,133,247,1)',
  },
  txtStyle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  blockStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
};

export {HeaderDel};
