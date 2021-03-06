import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { StyleSheet, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import ReduxThunk from 'redux-thunk';

import firebase from './firebaseInit';
import { firebaseConfig } from './config';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';
import ArtistSearchScreen from './screens/ArtistSearchScreen';
import YearSearchScreen from './screens/YearSearchScreen';
import VenueSearchScreen from './screens/VenueSearchScreen';
import ConcertSearchScreen from './screens/ConcertSearchScreen';
import reducers from './src/reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends React.Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });

    const projectId = `${firebaseConfig.projectId}/artistSearch`;
    //firebase.database.enableLogging(false);
    const ref = firebase.database().ref('artistSearch');
    ref.orderByKey().startAt('a').endAt('azzzzz').once('value', (snapshot) => {
      console.log('testing snapshot: ', snapshot);
      console.log('project id', projectId);
    });
  }

  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
          map: { screen: MapScreen },
          findConcert: {
            screen: StackNavigator({
              artistSearch: { screen: ArtistSearchScreen },
              yearSearch: { screen: YearSearchScreen },
              venueSearch: { screen: VenueSearchScreen },
              concertSearch: { screen: ConcertSearchScreen }
            })
          },
          deck: { screen: DeckScreen },
          review: {
            screen: StackNavigator({
              review: { screen: ReviewScreen },
              settings: { screen: SettingsScreen }
            })
          }
        })
      }
    }, {
      navigationOptions: {
        tabBarVisible: false
      },
      lazy: true
    });

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
