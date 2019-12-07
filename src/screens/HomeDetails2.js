// import React, {Component} from 'react';
// import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import {RowRepository, Board} from '../react-native-draggable-board';
// import {HeaderDel} from '../components/HeaderDel';
// import {Persons} from '../components/Persons';
// import {Search} from '../components/Search';
// import {Card} from '../components/Card';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import {SafeAreaView} from 'react-navigation';
// class HomeDetails2 extends Component {
//   constructor(props) {
//     super(props);

//     const data = [
//       {
//         id: 1,
//         name: 'open',
//         rows: [
//           {id: 1, name: 'Item1'},
//           {id: 2, name: 'Item2'},
//           {id: 3, name: 'Item3'},
//           {id: 4, name: 'Item4'},
//           {id: 5, name: 'Item5'},
//           {id: 6, name: 'Item6'},
//           {id: 7, name: 'Item7'},
//           {id: 8, name: 'Item8'},
//           {id: 9, name: 'Item9'},
//         ],
//       },
//       {
//         id: 2,
//         name: 'In Progress',
//         rows: [{id: 10, name: 'Item10'}],
//       },
//       {
//         id: 3,
//         name: 'Done',
//         rows: [{id: 11, name: 'Item11'}],
//       },

//       {
//         id: 4,
//         name: 'Testing',
//         rows: [{id: 11, name: 'Item11'}],
//       },

//     ];
//     this.state = {rowRepository: new RowRepository(data)};
//   }

//   renderRow(item) {
//     console.log('item', item);
//     let style = [styles.item];
//     // Just to show that other sizes works as well
//     // if (item.id == 2) {
//     //   style.push({height: 100});
//     // }
//     return (
//       <View style={style}>
//         <Text>{item.name}</Text>
//       </View>
//     );
//   }
//   render() {
//     const name = {
//       proIcon: 'trello',
//       title: 'Trello Tasks',
//       member: '15 member',
//       project: 'Trello',
//     };

//     return (
//       <SafeAreaView style={{flex: 1, backgroundColor: 'rgba(247,247,255,1)'}}>
//         <View
//           style={{
//             flex: 1,
//             paddingBottom: 30,
//             paddingHorizontal: 16,
//             marginVertical: 10,
//             borderBottomLeftRadius: 30,
//             borderBottomRightRadius: 30,
//             // borderWidth: 10,
//             backgroundColor: 'white',
//             /// borderColor: 'red',
//           }}>
//           <HeaderDel name={name} />
//           <Text style={{fontSize: 35, fontWeight: 'bold'}}>{name.title}</Text>
//           <Persons />
//           <View
//             style={{
//               flexDirection: 'row',
//             }}>
//             <View style={{flex: 1}}>
//               <Search />
//             </View>
//             <View
//               style={{
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 width: 50,
//                 height: 40,
//                 borderRadius: 15,
//                 borderWidth: 2,
//                 backgroundColor: 'rgba(247,247,254,1)',
//                 borderColor: 'rgba(215,215,216,1)',
//                 marginLeft: 30,
//                 marginHorizontal: 10,
//               }}>
//               <Icon name="search-plus" size={30} color={'gray'} />
//             </View>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 width: 80,
//                 height: 40,
//                 backgroundColor: 'rgba(61,136,239,1)',
//                 borderRadius: 10,
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 paddingHorizontal: 10,
//               }}>
//               <TouchableOpacity>
//                 <Icon name="angle-left" size={20} color={'white'} />
//               </TouchableOpacity>
//               <View>
//                 <Text
//                   style={{
//                     fontWeight: 'bold',
//                     fontSize: 26,
//                     height: 20,
//                     color: 'white',
//                     marginBottom: 4,
//                   }}>
//                   |
//                 </Text>
//               </View>
//               <TouchableOpacity>
//                 <Icon name="angle-right" size={20} color={'white'} />
//               </TouchableOpacity>
//             </View>
//           </View>
//           <Board
//             style={styles.board}
//             rowRepository={this.state.rowRepository}
//             renderRow={this.renderRow.bind(this)}
//             renderColumnWrapper={this.renderColumnWrapper.bind(this)}
//             open={this.onOpen.bind(this)}
//             onDragEnd={this.onDragEnd.bind(this)}
//           />
//         </View>
//       </SafeAreaView>
//     );
//   }

//   renderColumnWrapper(column, index, columnComponent) {
//     return (
//       <View key={`column-${index}`} style={styles.column}>
//         <Text style={styles.columnHeader}>{column.name}</Text>
//         {columnComponent}
//       </View>
//     );
//   }

//   onOpen(item) {
//     console.log('Opened!', item);
//   }

//   onDragEnd(srcColumnId, destColumnId, item) {
//     console.log(
//       `Dragged item ${item.id()} from column ${srcColumnId} to column ${destColumnId}`,
//     );
//   }
// }

// const styles = StyleSheet.create({
//   board: {
//     flex: 1,
//     //padding: 15,
//     backgroundColor: '#fff',
//     marginTop: 5,
//   },
//   column: {
//     width: 250,
//     margin: 10,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: 'white',
//     borderRadius: 5,
//   },
//   columnHeader: {
//     fontWeight: 'bold',
//     fontSize: 24,
//     padding: 10,
//     alignSelf: 'center',
//     //backgroundColor: 'green',
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//     left: -50,
//   },
//   item: {
//     flex: 1,
//     width: 218,
//     margin: 5,
//     height: 70,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//     borderWidth: 1,
//     borderColor: '#63A2B8',
//     borderRadius: 5,
//   },
// });

// export default HomeDetails2;

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RowRepository, Board} from '../react-native-draggable-board';
class HomeDetails2 extends Component {
  constructor(props) {
    super(props);

    const data = [
      {
        id: 1,
        name: 'open',
        rows: [
          {id: 1, name: 'Item1'},
          {id: 2, name: 'Item2'},
          {id: 3, name: 'Item3'},
          {id: 4, name: 'Item4'},
          {id: 5, name: 'Item5'},
          {id: 6, name: 'Item6'},
          {id: 7, name: 'Item7'},
          {id: 8, name: 'Item8'},
          {id: 9, name: 'Item9'},
        ],
      },
      {
        id: 2,
        name: 'Column2',
        rows: [{id: 10, name: 'Item10'}],
      },
      {
        id: 3,
        name: 'Column3',
        rows: [{id: 11, name: 'Item11'}],
      },

      {
        id: 4,
        name: 'Column4',
        rows: [{id: 11, name: 'Item11'}],
      },

      {
        id: 5,
        name: 'Column5',
        rows: [{id: 11, name: 'Item11'}],
      },
    ];
    this.state = {rowRepository: new RowRepository(data)};
  }

  renderRow(item) {
    console.log('item', item);
    let style = [styles.item];
    // Just to show that other sizes works as well
    // if (item.id == 2) {
    //   style.push({height: 100});
    // }
    return (
      <View style={style}>
        <Text>{item.name}</Text>
      </View>
    );
  }
  render() {
    return (
      <Board
        style={styles.board}
        rowRepository={this.state.rowRepository}
        renderRow={this.renderRow.bind(this)}
        renderColumnWrapper={this.renderColumnWrapper.bind(this)}
        open={this.onOpen.bind(this)}
        onDragEnd={this.onDragEnd.bind(this)}
      />
    );
  }

  renderColumnWrapper(column, index, columnComponent) {
    return (
      <View key={`column-${index}`} style={styles.column}>
        <Text style={styles.columnHeader}>{column.name}</Text>
        {columnComponent}
      </View>
    );
  }

  onOpen(item) {
    console.log('Opened!', item);
  }

  onDragEnd(srcColumnId, destColumnId, item) {
    console.log(
      `Dragged item ${item.id()} from column ${srcColumnId} to column ${destColumnId}`,
    );
  }
}

const styles = StyleSheet.create({
  board: {
    flex: 1,
    padding: 15,
    backgroundColor: 'gray',
  },
  column: {
    width: 250,
    margin: 10,
    padding: 10,
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
  },
  columnHeader: {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 10,
    alignSelf: 'center',
    backgroundColor: 'green',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    left: -50,
  },
  item: {
    flex: 1,
    width: 218,
    margin: 5,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#63A2B8',
    borderRadius: 5,
  },
});

export default HomeDetails2;
