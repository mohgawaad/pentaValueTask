import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Images} from '../assets/images';
class Persons extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const array1 = [{key: Images.img1}, {key: Images.img2}, {key: Images.img3}];

    const {labelStyle, inputStyle, containerStyle} = styles;
    return (
      // pass a function to map
      <View
        style={{
          flexDirection: 'row',
          marginVertical:16,
         // marginHorizontal:16
        }}>
        <View
          style={{
            flexDirection: 'row' 
          }}>
          {array1.map((item, index) => {
            return (
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 30,
                  //borderWidth: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(200,200,200,0.5)',
                  left: index * -15,
                }}>
                <Image
                  source={item.key}
                  style={{width: 50, height: 50, borderRadius: 30}}
                />
              </View>
            );
          })}
        </View>
        <View style={{flexDirection: 'row',justifyContent:'space-between',flex:1}}>
          <View style={{marginTop: 10,marginLeft:-20}}>
            <Text style={{fontSize: 20, fontWeight: '700'}}>+7 people</Text>
          </View>
          <TouchableOpacity style={{marginTop: 10   }}>
            <Text style={{fontSize: 20, fontWeight: '700',color:'rgba(62,133,247,1)'}}>send invite</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = {
  inputStyle: {
    // backgroundColor: 'rgba(247,247,255,1)',
    // color: 'rgba(52,133,239,1)',
    // padding: 5,
    // padding: 5,
    // fontSize: 18,
    // lineHeight: 23,
    // padding: 10,
    // // flex: 2,
    // borderWidth: 0.5,
    // borderColor: 'gray',
    // width: '100%',
    // borderRadius: 10,
  },
  labelStyle: {
    //flex: 1,
    fontSize: 18,
    //paddingLeft: 20,
    color: 'white',
  },
  containerStyle: {
    flexDirection: 'row',
    // flex: 1,
    height: 40,
    alignItems: 'center',
    //borderWidth:2,
    //borderColor:'red',
    width: '100%',
  },
};

export {Persons};
