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
import {Card} from './Card';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from 'react-navigation-hooks';

const Google = [
  {
    proIcon: 'google',
    title: 'Back End Developement',
    member: '15 member',
    project: 'Google',
  },
  {
    proIcon: 'google',
    title: 'Desion Tasks',
    member: '15 member',
    project: 'Google',
  },
];
const Facebook = [
  {
    proIcon: 'facebook',
    title: 'front End Developement',
    member: '15 member',
    project: 'Facebook',
  },
];
const Task = () => {
  const {navigate} = useNavigation();
  const renderTask = (key, iconName, title) => {
    return (
      <View>
        <View
          style={{marginTop: 15, marginHorizontal: 16, flexDirection: 'row'}}>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: 'white',
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 20,
            }}>
            <Icon
              name={iconName} // === 'Google' ? 'google' : 'facebook'}
              size={25}
              color={'gray'}
            />
          </View>

          <View style={{}}>
            <Text style={{fontSize: 35, fontWeight: 'bold'}}>{title}</Text>
          </View>
        </View>
        {key.map(res => (
          <View style={{marginHorizontal: 30, marginVertical: 15}}>
            <Card
              style={{
                height: 100,
                width: '100%',
                borderRadius: 20,
                alignItems: 'flex-start',
                padding: 5,
              }}
              myNavigation={() => {
                navigate('HomeDetails', {item: res});
              }}>
              <Text style={{fontSize: 20, padding: 5, fontWeight: 'bold'}}>
                {res.title}
              </Text>
              <Text style={{fontSize: 17, padding: 5}}>{res.member}</Text>
            </Card>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View>
      {renderTask(Google, 'google', 'Google')}
      {renderTask(Facebook, 'facebook', 'Facebook')}
    </View>
  );
};

const styles = {
  containerStyle: {
    // /* height:40, */
    // borderWidth: 1,
    // borderRadius: 2,
    // borderColor: '#ddd',
    // borderBottomWidth: 0,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    // elevation: 1,
    // marginLeft: 5,
    // marginRight: 5,
    // //marginTop: 10,
    // width:Dimensions.get('window').width  *.9,
    // //backgroundColor:'white'
    shadowColor: '#000',

    shadowOpacity: 0.1,
    shadowRadius: 13.97,

    elevation: 2,
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

export {Task};
