import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StatusBar} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import {SafeAreaView} from 'react-navigation';

class HomeDetails2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [...Array(20)].map((d, index) => ({
        key: `item-${index}`,
        label: index,
        backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${index *
          5}, ${132})`,
      })),
    };
  }

  renderItem = ({item, index, move, moveEnd, isActive}) => {
    return (
      <TouchableOpacity
        style={{
          height: 100,
          backgroundColor: isActive ? 'blue' : item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onLongPress={move}
        onPressOut={moveEnd}>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'white',
            fontSize: 32,
          }}>
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          backgroundColor="rgba(44,136,232,1)"
          barStyle="light-content"
        />
        <View style={{flex: 1}}>
          <DraggableFlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => `draggable-item-${item.key}`}
            scrollPercent={5}
            onMoveEnd={({data}) => this.setState({data})}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeDetails2;
