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
import {useNavigation} from 'react-navigation-hooks';

const HeaderDel = iconName => {
  const {labelStyle, inputStyle, containerStyle} = styles;
  const navigation = useNavigation();
  console.log('iconname', iconName);
  return (
    <View
      style={{
        flexDirection: 'row',
        //justifyContent: 'space-between',
        //marginTop: 20,

        //flex: 1,
        //marginHorizontal: 20,
        //backgroundColor:'red'
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon
          style={{marginTop: 4}}
          name="chevron-left"
          size={20}
          //color={'black'}
        />
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: 40,
            height: 40,
            //backgroundColor: 'red',
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 30,
            borderColor: 'gray',
            borderWidth: 2,
          }}>
          <Icon
            //style={{padding: 20}}
            name={iconName.name.proIcon}
            size={22}
            //color={'black'}
          />
        </View>
        <View //style={{marginTop: 10}}
        >
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>
            {iconName.name.project}
          </Text>
        </View>
      </View>

      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: 'rgba(62,133,247,1)',
            borderWidth: 2,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: 'rgba(62,133,247,1)',
            marginHorizontal: 5,
          }}
          onPress={() => {
            //this.props.navigation.navigate('SwiperImages');
          }}>
          <Icon
            //style={{backgroundColor:'white'}}
            name="bell"
            size={30}
            color={'white'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: 'rgba(62,133,247,1)',
            borderWidth: 2,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: 'rgba(62,133,247,1)',
          }}
          onPress={() => {
            //this.props.navigation.navigate('SwiperImages');
          }}>
          <Icon
            //style={{padding: 20}}
            name="ellipsis-h"
            size={30}
            color={'white'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

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

export {HeaderDel};
