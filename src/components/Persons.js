import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Images} from '../assets/images';
class Persons extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const array1 = [{key: Images.img1}, {key: Images.img2}, {key: Images.img3}];

    const {
      imageStyle,
      imageContainer,
      containerStyle,
      blockStyle,
      txtStyle,
      noOfPeople,
      viewOfPeople,
    } = styles;
    return (
      <View style={containerStyle}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          {array1.map((item, index) => {
            return (
              <View
                style={[
                  imageContainer,
                  {
                    left: index * -15,
                  },
                ]}>
                <Image source={item.key} style={imageStyle} />
              </View>
            );
          })}
        </View>
        <View style={blockStyle}>
          <View style={viewOfPeople}>
            <Text style={noOfPeople}>+7 people</Text>
          </View>
          <TouchableOpacity style={{marginTop: 10}}>
            <Text style={txtStyle}>send invite</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = {
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(200,200,200,0.5)',
  },
  containerStyle: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  blockStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  txtStyle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'rgba(62,133,247,1)',
  },
  noOfPeople: {
    fontSize: 20,
    fontWeight: '700',
  },
  viewOfPeople: {
    marginTop: 10,
    marginLeft: -20,
  },
};

export {Persons};
