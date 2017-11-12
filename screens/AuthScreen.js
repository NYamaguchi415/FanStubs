import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TextInput, Dimensions, Button, Keyboard } from 'react-native';
import { Card, CardSection, Spinner } from '../src/components/common';
import { emailChanged, passwordChanged, loginUser } from '../src/actions/UserLoginActions';

const SCREEN_WIDTH = Dimensions.get('window').width;

class AuthScreen extends Component {
	componentWillReceiveProps(nextProps) {
		this.onAuthComplete(nextProps);
	}

	onAuthComplete(props) {
		if (props.user) {
			this.props.navigation.navigate('map');
		}
	}

	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	signInButtonPressed() {
		const { email, password } = this.props;
		this.props.loginUser({ email, password });
		Keyboard.dismiss();
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size='large' />;
		}

		return (
			<Button 
				onPress={this.signInButtonPressed.bind(this)}
				style={styles.signInButtonStyle}
				title='Sign In'
			/>
		);
	}

	render() {
		return (
			<View style={styles.mainViewStyle}>
				<View style={{ width: SCREEN_WIDTH * 0.85 }}>
					<Card>
						<CardSection>
							<TextInput
								style={styles.textInputStyle}
								placeholder='email@gmail.com'
								autoCorrect={false}
								autoCapitalize='none'
								onChangeText={this.onEmailChange.bind(this)}
								value={this.props.email}
							/>
						</CardSection>
						<CardSection>
							<TextInput
								style={styles.textInputStyle}
								placeholder='password'
								autoCorrect={false}
								secureTextEntry
								autoCapitalize='none'
								onChangeText={this.onPasswordChange.bind(this)}
								value={this.props.password}
							/>
						</CardSection>
						<CardSection>
							<View style={{ flex: 1 }}>
								<Text style={styles.errorTextStyle}>
									{this.props.error}
								</Text>
								{this.renderButton()}
							</View>
						</CardSection>
					</Card>
				</View>
			</View>
		);
	}
}

const styles = {
	mainViewStyle: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#009688'
	},
	textInputStyle: {
		flex: 1,
		paddingLeft: 5,
		height: 40,
		fontSize: 20
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

const mapStateToProps = ({ auth }) => {
	const { email, password, error, loading, user } = auth;
	return { email, password, error, loading, user };
};

export default connect(mapStateToProps, {
	emailChanged, passwordChanged, loginUser
})(AuthScreen);
