import React, { Component } from 'react';
import { View, Button } from 'react-native';

class YearSearchScreen extends Component {
    render() {
      return (
        <View>
          <Button
            title='press this'
            onPress={() => this.props.navigation.navigate('venueSearch')}
          />
        </View>
      );
    }
}

export default YearSearchScreen;
