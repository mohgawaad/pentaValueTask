import React, {Component} from 'react';
import {Text, View, StatusBar, Dimensions} from 'react-native';
import {Styles} from './style';

import {ScrollView} from 'react-native-gesture-handler';
import {Search} from '../../components/Search';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {SafeAreaView} from 'react-navigation';
import {FirstRoute} from './FirstRoute';
import {SecondRoute} from './SecondRoute';

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

  renderHeaderIcon = () => {
    return (
      <View style={Styles.block1}>
        <View style={Styles.iconContainerLeft}>
          <View style={Styles.iconStyle1} />
          <View style={Styles.iconStyle2} />
        </View>
        <View style={Styles.iconContainerRight}>
          <View style={Styles.iconStyle3}>
            <Text style={Styles.plusStyle}>+</Text>
          </View>
        </View>
      </View>
    );
  };

  renderHeaderTitle = () => {
    return (
      <View style={Styles.titleContainer}>
        <View>
          <Text style={Styles.txtStyle}>Boards</Text>
        </View>
        <View style={Styles.titleRightContainer}>
          <View style={Styles.block2}>
            <View style={Styles.block3}>
              <View style={Styles.block4} />
              <View style={Styles.block5} />
            </View>
          </View>
          <View style={Styles.block6} />
          <View style={Styles.block7}>
            <View style={Styles.block8} />

            <View style={Styles.block9} />
          </View>
        </View>
      </View>
    );
  };
  renderTabView = () => {
    return (
      <TabView
        navigationState={this.state}
        tabStyle={{backgroundColor: 'red'}}
        renderTabBar={props => (
          <TabBar
            {...props}
            tabBarPosition="bottom"
            labelStyle={{color: 'gray', top: -10}}
            style={Styles.tabView}
          />
        )}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
          third: SecondRoute,
        })}
        onIndexChange={index => this.setState({index})}
        initialLayout={{width: Dimensions.get('window').width}}
      />
    );
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          backgroundColor="rgba(44,136,232,1)"
          barStyle="light-content"
        />

        <View style={Styles.container}>
          <ScrollView
            style={{
              flex: 1,
              borderRadius: 10,
            }}>
            <View style={Styles.headerContainer}>
              {this.renderHeaderIcon()}
              {this.renderHeaderTitle()}

              <View style={{marginBottom: 10}}>
                <Search />
              </View>
            </View>
            {this.renderTabView()}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
export {Home};
