import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

class ConcertSearchScreen extends Component {
  reset() {
    // Function to exit the user out of the stack navigation
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
        />
      </View>
    );
  }
}

export default ConcertSearchScreen;
