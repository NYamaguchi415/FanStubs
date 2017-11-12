import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

// const exitStack = NavigationActions.reset({
//   index: 0,
//   actions: [
//     NavigationActions.navigate({ routeName: 'map' })
//   ],
//   key: null
// });

class ConcertSearchScreen extends Component {
  reset() {
    //const { navigate } = this.props.navigation;
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'map' })
      ],
      key: null
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View>
        <Button
          title='exit out'
          onPress={this.reset.bind(this)}
          //onPress={() => this.props.navigation.navigate('map')}
        />
      </View>
    );
  }
}

export default ConcertSearchScreen;
