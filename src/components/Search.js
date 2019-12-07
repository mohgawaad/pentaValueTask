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
import {Input} from './Input';
import Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var x = <Icon name="search" size={20} color={'gray'} />;
    return (
      <View
        style={{
          backgroundColor: 'rgba(247,247,255,1)',
          color: 'rgba(52,133,239,1)',
          paddingHorizontal: 5,
          // padding: 5,
          fontSize: 18,
          lineHeight: 23,
          //padding: 10,
          // flex: 2,
          borderWidth: 0.5,
          borderColor: 'gray',
          // height: 50,
          width: '100%',
          borderRadius: 10,
        }}>
        <View style={{width: '100%', alignSelf: 'center'}}>
          <Input
            placeholder="Search Cards ..."
            placeholderStyle={{marginLeft: 100}}
            placeholderTextColor="rgba(151,156,161,1)"
          />
        </View>

        {/* <View
          style={{
            paddingBottom: 20,
            position: 'relative',
            bottom: 33,
            left: 20,
          }}>
          <Icon name="search" size={25} color={'gray'} />
        </View> */}
      </View>
    );
  }
}

export {Search};
