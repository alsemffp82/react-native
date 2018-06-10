// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// import FetchLocation from './components/FetchLocation';

// export default class App extends React.Component {

//   getUserLocationHandler = () => {
//     console.log('hello react-native');
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <FetchLocation onGetLocation={this.getUserLocationHandler}/>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class Bananas extends Component {
  render() {
    let picture = {
      uri: 'https://upload/wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={picture} style={{ width:193, height: 110}} />
    );
  }
}

AppeRegistry.registerComponent('Baby', () => Bananas);
// import { StyleSheet, Text, View } from 'react-native';

// import FetchLocation from './components/FetchLocation';

// export default class App extends React.Component {

//   getUserLocationHandler = () => {
//     console.log('hello react-native');
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <FetchLocation onGetLocation={this.getUserLocationHandler}/>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });