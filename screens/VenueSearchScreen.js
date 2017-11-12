import React, { Component } from 'react';
import { View, Button } from 'react-native';

class VenueSearchScreen extends Component {
  render() {
    return (
      <View>
        <Button
          title='ok almost there'
          onPress={() => this.props.navigation.navigate('concertSearch')}
        />
      </View>
    );
  }
}

export default VenueSearchScreen;
