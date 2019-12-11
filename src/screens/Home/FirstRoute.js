import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar, Dimensions} from 'react-native';
import {Task} from '../../components/Task';


class FirstRoute extends Component {
  constructor(props) {
    super(props);
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
export {FirstRoute};