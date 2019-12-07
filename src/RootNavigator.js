import React from 'react';
import {Sc1} from '../src/screens/Sc1';
import {Home} from '../src/screens/Home';
import {HomeDetails} from '../src/screens/HomeDetails';
import HomeDetails2 from '../src/screens/HomeDetails2';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';

const bottomTabNavigatorConfig = {
  initialRouteName: 'Sc1',
  tabBarOptions: {
    showIcon: true,
    showLabel: true,
    activeTintColor: 'red',
    inactiveTintColor: 'gray',
    // style: BaseStyle.tabBar,
    // labelStyle: {
    //     fontSize: 12
    // }
  },
};
const ServicesNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
      headerVisible: false,
      headerMode: 'none',
    },
  },

  HomeDetails: {
    screen: HomeDetails,
    navigationOptions: {
      header: null,
      headerVisible: false,
      headerMode: 'none',
    },
  },
  HomeDetails2: {
    screen: HomeDetails2,
    navigationOptions: {
      header: null,
      headerVisible: false,
      headerMode: 'none',
    },
  },
});
//--------------------------------------------

const routeConfigs = {
  Sc1: {
    screen: ServicesNavigator,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: '#e91e63',
        tintColor: 'red',
        showLabel: false,
      },
      tabBarIcon: ({focused, tintColor}) => {
        return <Icon color={tintColor} name="home" size={20} solid />;
      },
    },
  },
  Sc2: {
    screen: HomeDetails2,
    navigationOptions: {
      tabBarOptions: {
        showLabel: false,
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
      tabBarIcon: ({focused, tintColor}) => {
        return <Icon color={tintColor} name="comment-alt" size={20} solid />;
      },
    },
  },
  Sc3: {
    screen: Sc1,
    navigationOptions: {
      tabBarOptions: {
        showLabel: false,
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
      tabBarIcon: ({focused, tintColor}) => {
        return <Icon color={tintColor} name="bell" size={20} solid />;
      },
    },
  },
  Sc4: {
    screen: Sc1,
    navigationOptions: {
      tabBarOptions: {
        showLabel: false,
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
      tabBarIcon: ({focused, tintColor}) => {
        return <Icon color={tintColor} name="male" size={20} solid />;
      },
    },
  },
};

const AppNavigator333 = createBottomTabNavigator(
  {
    Sc1: {
      screen: ServicesNavigator,
      navigationOptions: {
        tabBarOptions: {
          activeTintColor: '#e91e63',
          tintColor: 'red',
          showLabel: false,
        },
        tabBarIcon: () => <Icon name="cut" size={17} />,
      },
    },
    Sc2: {
      screen: Sc1,
      navigationOptions: {
        tabBarOptions: {
          showLabel: false,
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        },
        tabBarIcon: () => <Icon name="address-book" size={17} />,
      },
    },
    Sc3: {
      screen: Sc1,
      navigationOptions: {
        tabBarOptions: {
          showLabel: false,
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        },
        tabBarIcon: () => <Icon name="address-book" size={17} />,
      },
    },
    Sc4: {
      screen: Sc1,
      navigationOptions: {
        tabBarOptions: {
          showLabel: false,
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        },
        tabBarIcon: () => <Icon name="address-book" size={17} />,
      },
    },
  },

  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
    },
  },
);

const AppNavigator = createBottomTabNavigator(
  routeConfigs,
  bottomTabNavigatorConfig,
);
//--------------------------------------------
const switcher = createSwitchNavigator({
  first: AppNavigator,
  // second: AppNavigator2
});

export default createAppContainer(switcher);
