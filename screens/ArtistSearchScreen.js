import React, { Component } from 'react';
import { View, TextInput, Keyboard, TouchableWithoutFeedback,
	Button, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { artistInputChanged, artistSearch } from '../src/actions/ConcertFinderActions';

//const win = Dimensions.get('window');
class ArtistSearchScreen extends Component {
	onArtistChanged(text) {
		this.props.artistInputChanged(text);
		this.props.artistSearch(text);
	}

	render() {
		return (
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.mainViewStyle}>
					<View style={styles.searchBarViewStyle}>
						<TextInput
							style={styles.textInputStyle}
							placeholder='Artist'
							autoCorrect={false}
							autoCapitalize='none'
							onChangeText={this.onArtistChanged.bind(this)}
							value={this.props.artistInput}
						/>
					</View>
					<View>
						<Button
							title='press this'
							onPress={() => this.props.navigation.navigate('yearSearch')}
						/>
					</View>
					<View>
						<Button
							title='testArtistSearch'
							onPress={() => console.log(this.props.artistList)}
						/>
					</View>
					<View>
						<FlatList
							data={[{ key: 'a' }, { key: 'b' }]}
							renderItem={({ item }) => <Text>{item.key}</Text>}
						/>
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	mainViewStyle: {
		flex: 1,
		backgroundColor: '#009688',
		alignItems: 'flex-start'
	},
	searchBarViewStyle: {
		height: 60,
		alignSelf: 'stretch',
		paddingTop: 20
	},
	textInputStyle: {
		flex: 1,
		paddingLeft: 5,
		fontSize: 20,
		backgroundColor: 'gray'
	},
	signInButtonStyle: {
		flex: 1,
		alignSelf: 'center'
	},
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

const mapStateToProps = ({ concertFinder }) => {
	const { artistInput, artistList } = concertFinder;
	return { artistInput, artistList };
};

export default connect(mapStateToProps, {
	artistInputChanged, artistSearch
})(ArtistSearchScreen);
