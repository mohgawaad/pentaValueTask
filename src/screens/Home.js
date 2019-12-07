import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  AsyncStorage,
  Dimensions,
} from 'react-native';
//import {Card} from '../components/Card';
import {Task} from '../components/Task';
//import Icon from 'react-native-vector-icons/FontAwesome5';
import {ScrollView} from 'react-native-gesture-handler';
import {Search} from '../components/Search';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {SafeAreaView} from 'react-navigation';

const Google = [
  {title: 'Back End Developement', member: '15 member'},
  {title: 'Desion Tasks', member: '15 member'},
];

class FirstRoute extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('this.props 3 ', this.props.navigation);
  }
  render() {
    return (
      <View>
        <Task
          navigation={this.props.navigation}
          test="Google"
          test2="Facebook"></Task>
      </View>
    );
  }
}
// const FirstRoute = () => (
//   <View>
//     <Task test="Google" test2="Facebook"></Task>
//   </View>
// );

const SecondRoute = () => {
  const {containerStyle, ViewStyle, TextStyle} = styles;
  return (
    <View style={containerStyle}>
      <View style={ViewStyle}>
        <Text style={TextStyle}>comming soon</Text>
      </View>
    </View>
  );
};

const ThirdRoute = () => (
  <View style={[styles.scene, {backgroundColor: 'red'}]} />
);
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        {key: 'first', title: 'All Boards'},
        {key: 'second', title: 'Teams'},
        {key: 'third', title: 'Personal'},
      ],
    };
  }
  componentDidMount() {}

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{backgroundColor: 'rgba(247,247,255,1)', flex: 1}}>
          <ScrollView
            style={{
              //alignItems: 'center',
              //backgroundColor: '#E96152',
              flex: 1,
              //  marginVertical: 20,
              //    marginHorizontal: 16,
              borderRadius: 10,
            }}>
            <View style={{backgroundColor: 'white', paddingHorizontal: 30}}>
              <View
                style={{
                  marginVertical: 16,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    //backgroundColor: 'red',
                    backgroundColor: 'white',
                    borderRadius: 15,
                    borderWidth: 2,
                    borderColor: 'rgba(238,243,247,1)',
                    flexDirection: 'row',
                    //alignContent: 'space-between',
                    justifyContent: 'space-around',
                    paddingHorizontal: 5,
                    paddingVertical: 4,
                  }}>
                  <View
                    style={{
                      width: 10,
                      height: 20,
                      backgroundColor: 'rgba(46,208,251,1)',
                      //borderRadius: 15,alignContent: 'space-between',
                      borderBottomEndRadius: 10,
                      borderBottomLeftRadius: 10,
                      borderTopLeftRadius: 10,
                      marginTop: 5,
                    }}
                  />
                  <View
                    style={{
                      width: 10,
                      height: 20,
                      backgroundColor: 'rgba(52,133,239,1)',
                      //borderRadius: 15,
                      borderBottomEndRadius: 10,
                      //borderBottomLeftRadius: 10,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                  />
                </View>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderColor: 'rgba(52,133,239,1)',
                    borderWidth: 2,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    backgroundColor: 'rgba(52,133,239,1)',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 30,
                        textAlign: 'center',
                        color: 'white',
                        flex: 1,
                      }}>
                      +
                    </Text>
                  </View>
                </View>
              </View>
              {/* --------------------------------------------------------------------------- */}
              <View
                style={{
                  marginVertical: 16,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex: 1,
                }}>
                <View>
                  <Text style={{fontSize: 30, fontWeight: 'bold'}}>Boards</Text>
                </View>
                <View
                  style={{
                    width: 80,
                    height: 40,
                    borderColor: 'rgba(247,247,255,1)',
                    borderWidth: 2,
                    borderRadius: 10,
                    backgroundColor: 'rgba(247,247,255,1)',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexDirection: 'row',
                    paddingHorizontal: 4,
                  }}>
                  <View
                    style={{
                      //flex: 1,
                      justifyContent: 'space-between',
                      alignContent: 'space-between',
                    }}>
                    <View
                      style={{
                        justifyContent: 'space-between',
                        alignContent: 'space-between',
                        flex: 1,
                        marginVertical: 8,
                      }}>
                      <View
                        style={{
                          width: 20,
                          height: 8,
                          backgroundColor: 'rgba(52,133,239,1)',
                        }}
                      />
                      <View
                        style={{
                          width: 20,
                          height: 8,
                          backgroundColor: 'rgba(52,133,239,1)',
                        }}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      //flex:1,
                      width: 2,
                      height: 20,
                      backgroundColor: 'rgba(222,219,229,1)',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                    }}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignContent: 'space-between',
                    }}>
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        backgroundColor: 'rgba(189,199,235,1)',
                        marginRight: 4,
                      }}
                    />

                    <View
                      style={{
                        width: 5,
                        height: 20,
                        backgroundColor: 'rgba(189,199,235,1)',
                      }}
                    />
                  </View>
                </View>
              </View>
              {/* --------------------------------------------------------------------------- */}
              <View style={{marginBottom: 10}}>
                <Search />
              </View>
              {/* --------------------------------------------------------------------------- */}
            </View>

            <TabView
              navigationState={this.state}
              tabStyle={{backgroundColor: 'red'}}
              renderTabBar={props => (
                <TabBar
                  {...props}
                  tabBarPosition="bottom"
                  labelStyle={{color: 'gray', top: -10}}
                  style={{
                    //height: 80,
                    backgroundColor: 'white',
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    borderColor: 'white',
                    borderWidth: 2,
                    top: -3,
                    //flex: 1,

                    // borderBottomStartRadius: 60,
                  }}
                />
              )}
              renderIndicator={routes => (
                <View>
                  <Text>h</Text>
                </View>
              )}
              renderScene={SceneMap({
                first: FirstRoute,
                second: SecondRoute,
                third: SecondRoute,
                ///navigation: this.props.navigation,
              })}
              onIndexChange={index => this.setState({index})}
              initialLayout={{width: Dimensions.get('window').width}}
            />
            {/* --------------------------------------------------------------------------- */}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  scene: {
    //flex: 1,
    backgroundColor: 'red',
  },
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  TextStyle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  ViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
    borderRadius: 15,
    borderWidth: 2,
    backgroundColor: 'rgba(247,247,254,1)',
    borderColor: 'rgba(215,215,216,1)',
  },
});

export {Home};

// import React, {Component} from 'react';
// import {StyleSheet, Text, View} from 'react-native';

// import SortableGrid from 'react-native-sortable-grid';

// export class Home extends Component {
//   constructor() {
//     super();
//     this.alphabets = [
//       'A',
//       'B',
//       'C',
//       'D',
//       'E',
//       'F',
//       'G',
//       'H',
//       'I',
//       'J',
//       'K',
//       'L',
//       'M',
//       'N',
//       'O',
//       'P',
//       'Q',
//       'R',
//       'S',
//       'T',
//       'U',
//       'V',
//       'W',
//       'X',
//     ];
//   }

//   getColor() {
//     let r = this.randomRGB();
//     let g = this.randomRGB();
//     let b = this.randomRGB();
//     return 'rgb(' + r + ', ' + g + ', ' + b + ')';
//   }
//   randomRGB = () => 160 + Math.random() * 85;

//   render() {
//     return (
//       <SortableGrid
//         blockTransitionDuration={400}
//         activeBlockCenteringDuration={200}
//         itemsPerRow={4}
//         dragActivationTreshold={200}
//         onDragRelease={itemOrder =>
//           console.log(
//             'Drag was released, the blocks are in the following order: ',
//             itemOrder,
//           )
//         }
//         onDragStart={() => console.log('Some block is being dragged now!')}>
//         {this.alphabets.map((letter, index) => (
//           <View
//             key={index}
//             style={[styles.block, {backgroundColor: this.getColor()}]}>
//             <Text style={{color: 'white', fontSize: 50}}>ewewe</Text>
//           </View>
//         ))}
//       </SortableGrid>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   block: {
//     flex: 1,
//     margin: 8,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
