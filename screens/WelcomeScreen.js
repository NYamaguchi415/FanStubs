import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import Slides from '../components/Slides';

const SLIDE_DATA = [
	{ text: 'Fan Stubs', color: '#03A9F4' },
	{ text: 'Use this to get a job', color: '#009688' },
	{ text: 'Set your loc, then swipe away!', color: '#03A9F4' }
];


class WelcomeScreen extends Component {
	componentWillMount() {
		console.log('checking for user');
		console.log(this.props.user);
		this.onAuthComplete(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.onAuthComplete(nextProps);
	}

	onAuthComplete(props) {
		if (props.user) {
			this.props.navigation.navigate('map');
		} else {
			this.props.navigation.navigate('map');
		}
	}

	onSlidesComplete = () => {
		this.props.navigation.navigate('auth');
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
			</View>
		);
	}
}

function mapStateToProps({ auth }) {
	return { user: auth.user };
}

export default connect(mapStateToProps)(WelcomeScreen);
