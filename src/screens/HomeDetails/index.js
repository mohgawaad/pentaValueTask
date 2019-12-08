import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  ScrollView,
  FlatList,
} from 'react-native';
import {Card} from '../../components/Card';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {SafeAreaView} from 'react-navigation';
import {HeaderDel} from '../../components/HeaderDel';
import {Persons} from '../../components/Persons';
import {Search} from '../../components/Search';
//import {useNavigationParam} from 'react-navigation-hooks';
import SortableGrid from 'react-native-sortable-grid';
import {RowRepository, Board} from '../../react-native-draggable-board';

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

const DATAA = [
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

const DATAAA = [
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

const DATA2 = [
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
    dataToltal: DATAA,
  },
  {
    id: 2,
    state: 'Done',
    color: 'lightgreen',
    dataToltal: DATAAA,
  },
];
_keyExtractor = (item, index) => item.id;
_keyExtractor2 = (item, index) => item.id;

_renderItem = ({item}) => {
  return (
    <View style={{marginVertical: 10, backgroundColor: 'rgba(247,247,255,1)'}}>
      <Card
        style={{
          height: 100,
          width: 300,
          borderRadius: 20,
          alignItems: 'flex-start',
          padding: 5,
        }}>
        <Text style={{fontSize: 20, padding: 5, fontWeight: 'bold'}}>
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 17,
            padding: 5,
            color: 'rgba(173,174,181,1)',
            fontWeight: 'bold',
          }}>
          {item.noOfComments}
        </Text>
      </Card>
    </View>
  );
};

_renderItem2 = ({item}) => {
  console.log('iteeeeeem ', item);
  return (
    <View style={{paddingRight: 10}}>
      <View
        style={{
          //flex: 1,
          flexDirection: 'row',
          width: 300,
          marginBottom: 20,
          //justifyContent: 'flex-end',
        }}>
        <View
          style={{
            //width: 70,
            paddingHorizontal: 10,
            height: 40,
            backgroundColor: `${item.color}`,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomRightRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
            {item.state}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            width: 300,
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'rgba(222,232,253,1)',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 5,
            }}
            onPress={() => {}}>
            <Icon name="plus" size={25} color={'rgba(97,134,154,1)'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'rgba(222,232,253,1)',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {}}>
            <Icon name="ellipsis-v" size={25} color={'rgba(97,134,154,1)'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginRight: 20, flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={item.dataToltal}
          style={{marginRight: 30}}
          renderItem={_renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    </View>
  );
};
class HomeDetails extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('name');
  }
  render() {
    const {containerStyle} = styles;
    const name = this.props.navigation.getParam('item');

    console.log('nameee', name);
    const {id} = name;
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'rgba(247,247,255,1)'}}>
        <StatusBar
          backgroundColor="rgba(44,136,232,1)"
          barStyle="light-content"
        />
        <View
          style={{
            paddingBottom: 30,
            paddingHorizontal: 16,
            marginVertical: 10,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            backgroundColor: 'white',
          }}>
          <HeaderDel name={name} />
          <Text style={{fontSize: 35, fontWeight: 'bold'}}>{name.title}</Text>
          <Persons />
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={{flex: 1}}>
              <Search />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 50,
                height: 40,
                borderRadius: 15,
                borderWidth: 2,
                backgroundColor: 'rgba(247,247,254,1)',
                borderColor: 'rgba(215,215,216,1)',
                marginLeft: 30,
                marginHorizontal: 10,
              }}>
              <Icon name="search-plus" size={30} color={'gray'} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: 80,
                height: 40,
                backgroundColor: 'rgba(61,136,239,1)',
                borderRadius: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}>
              <TouchableOpacity>
                <Icon name="angle-left" size={20} color={'white'} />
              </TouchableOpacity>
              <View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 26,
                    height: 20,
                    color: 'white',
                    marginBottom: 4,
                  }}>
                  |
                </Text>
              </View>
              <TouchableOpacity>
                <Icon name="angle-right" size={20} color={'white'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{
            backgroundColor: 'rgba(247,247,255,1)',
            //height: '30%',
            flexDirection: 'row',
            marginHorizontal: 16,
          }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={DATA2}
            style={{marginRight: 30}}
            renderItem={_renderItem2}
            keyExtractor={this._keyExtractor2}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
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

export {HomeDetails};
