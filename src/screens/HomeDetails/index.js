import React, {Component, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  FlatList,
} from 'react-native';
import {Styles} from './style';

import {Card} from '../../components/Card';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {SafeAreaView} from 'react-navigation';
import {HeaderDel} from '../../components/HeaderDel';
import {Persons} from '../../components/Persons';
import {Search} from '../../components/Search';
import {useNavigationParam} from 'react-navigation-hooks';

const DATA = [
  {
    id: 0,
    title: 'User Journay',
    noOfComments: '10 comments',
  },
  {
    id: 1,
    title: 'Create User Flow',
    noOfComments: '7 comments',
  },
  {
    id: 2,
    title: 'Interview',
    noOfComments: '8 comments',
  },
  {
    id: 3,
    title: 'Usability test',
    noOfComments: '5 comments',
  },
];

const DATA1 = [
  {
    id: 0,
    title: 'First Screen',
    noOfComments: '6 comments',
  },
  {
    id: 1,
    title: 'High Pereformance',
    noOfComments: '4 comments',
  },
  {
    id: 2,
    title: 'Testing Quality',
    noOfComments: '5 comments',
  },
  {
    id: 3,
    title: 'Supporting Api ',
    noOfComments: '5 comments',
  },
  {
    id: 4,
    title: 'Refacting Code ',
    noOfComments: '7 comments',
  },
];

const DATA2 = [
  {
    id: 0,
    title: 'UI & UX',
    noOfComments: '2 comments',
  },
  {
    id: 1,
    title: 'Publish Code',
    noOfComments: '1 comments',
  },
  {
    id: 2,
    title: 'Publish Realase',
    noOfComments: 'No Comment',
  },
];

const DataLists = [
  {
    id: 0,
    state: 'Open',
    color: 'rgba(255,72,222,1)',
    dataToltal: DATA,
  },
  {
    id: 1,
    state: 'In Progress',
    color: 'rgba(58,207,243,1)',
    dataToltal: DATA1,
  },
  {
    id: 2,
    state: 'Done',
    color: 'lightgreen',
    dataToltal: DATA2,
  },
];

const HomeDetails = () => {
  const name = useNavigationParam('item');

  _renderItem = ({item}) => {
    return (
      <View style={Styles.cardsContainer}>
        <Card style={Styles.cardStyle}>
          <Text style={Styles.titleStyle}>{item.title}</Text>
          <Text style={Styles.commentStyle}>{item.noOfComments}</Text>
        </Card>
      </View>
    );
  };

  _renderItem2 = ({item}) => {
    console.log('iteeeeeem ', item);
    return (
      <View style={{paddingRight: 10}}>
        <View style={Styles.headerState}>
          <View style={[Styles.stateStyle, {backgroundColor: `${item.color}`}]}>
            <Text style={Styles.txtState}>{item.state}</Text>
          </View>
          <View style={Styles.rightBlock}>
            <TouchableOpacity style={Styles.iconContainer}>
              <Icon name="plus" size={25} color={'rgba(97,134,154,1)'} />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.iconContainer}>
              <Icon name="ellipsis-v" size={25} color={'rgba(97,134,154,1)'} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.flatListContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={item.dataToltal}
            style={{marginRight: 30}}
            renderItem={_renderItem}
            keyExtractor={index => index}
          />
        </View>
      </View>
    );
  };

  renderBlock1 = () => {
    return (
      <View style={Styles.block1}>
        <HeaderDel name={name} />
        <Text style={Styles.txtStyle}>{name.title}</Text>
        <Persons />
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}}>
            <Search />
          </View>
          <View style={Styles.iconContainer}>
            <Icon name="search-plus" size={30} color={'gray'} />
          </View>
          <View style={Styles.directionContainer}>
            <TouchableOpacity>
              <Icon name="angle-left" size={20} color={'white'} />
            </TouchableOpacity>
            <View>
              <Text style={Styles.sperateContainer}>|</Text>
            </View>
            <TouchableOpacity>
              <Icon name="angle-right" size={20} color={'white'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar
        backgroundColor="rgba(44,136,232,1)"
        barStyle="light-content"
      />
      {this.renderBlock1()}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{
          backgroundColor: 'rgba(247,247,255,1)',
          flexDirection: 'row',
          marginHorizontal: 16,
        }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DataLists}
          style={{marginRight: 30}}
          renderItem={_renderItem2}
          keyExtractor={index => index}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export {HomeDetails};
