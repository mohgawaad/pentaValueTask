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
import {Card} from './components/Card';
import {Task} from './components/Task';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ScrollView} from 'react-native-gesture-handler';
import {Search} from './components/Search';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {SafeAreaView} from 'react-navigation';
import RootNavigator from './RootNavigator';

const google = [
  {title: 'Back End Developement', member: '15 member'},
  {title: 'Desion Tasks', member: '15 member'},
];

const FirstRoute = () => (
  <View>
    {/* <View style={{marginTop: 15, marginHorizontal: 16, flexDirection: 'row'}}>
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
        <Icon name="google" size={25} color={'gray'} />
      </View>

      <View style={{}}>
        <Text style={{fontSize: 35, fontWeight: 'bold'}}>Google</Text>
      </View>
    </View>
    {google.map(google => (
      <View style={{marginHorizontal: 30, marginVertical: 15}}>
        <Card
          style={{
            height: 100,
            width: '100%',
            borderRadius: 20,
            alignItems: 'flex-start',
            padding: 5,
          }}>
          <Text style={{fontSize: 20, padding: 5, fontWeight: 'bold'}}>
            {google.title}
          </Text>
          <Text style={{fontSize: 17, padding: 5}}>{google.member}</Text>
        </Card>
      </View>
    ))}*/}
    <Task>Google</Task>
    <Task>Facebook</Task>
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#673ab7'}]} />
);

const ThirdRoute = () => (
  <View style={[styles.scene, {backgroundColor: 'red'}]} />
);
class App extends Component {
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
  /*   componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Intro');
    }, 1000);
  } */

  render() {
    return <RootNavigator />;
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

              <Search />
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
                    borderBottomEndRadius: 60,
                    borderBottomStartRadius: 60,
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
                third: ThirdRoute,
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
});

export {App};
