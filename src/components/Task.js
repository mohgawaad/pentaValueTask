import React from 'react';
import {Text, View} from 'react-native';
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
    const {
      containerStyle,
      iconContainer,
      txtStyle1,
      cardStyle,
      blockStyle,
      txtStyle2,
      txtStyle3,
    } = styles;
    return (
      <View>
        <View style={containerStyle}>
          <View style={iconContainer}>
            <Icon name={iconName} size={25} color={'gray'} />
          </View>

          <View>
            <Text style={txtStyle1}>{title}</Text>
          </View>
        </View>
        {key.map(res => (
          <View style={blockStyle}>
            <Card
              style={cardStyle}
              myNavigation={() => {
                navigate('HomeDetails', {item: res});
              }}>
              <Text style={txtStyle2}>{res.title}</Text>
              <Text style={txtStyle3}>{res.member}</Text>
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
    marginTop: 15,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  txtStyle1: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  cardStyle: {
    height: 100,
    width: '100%',
    borderRadius: 20,
    alignItems: 'flex-start',
    padding: 5,
  },
  blockStyle: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  txtStyle2: {
    fontSize: 20,
    padding: 5,
    fontWeight: 'bold',
  },
  txtStyle3: {
    fontSize: 17,
    padding: 5,
  },
};

export {Task};
