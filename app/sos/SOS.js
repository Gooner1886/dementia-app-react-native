import React, { Component } from 'react';
import {
	AppRegistry,
	Platform,
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
	ImageBackground,
	KeyboardAvoidingView,
	Animated,
	Easing,
	StatusBar,
} from 'react-native';

import { Constants } from 'expo';

export default class SOS extends Component {
	static navigationOptions = {
		header: null,
	};

	UNSAFE_componentWillMount() {
		this.animatedValue = new Animated.Value(0);
	}
	componentDidMount() {
		this._startAnimation();
	}

	_startAnimation() {
		this.animatedValue.setValue(0);
		Animated.timing(this.animatedValue, {
			toValue: 100,
			duration: 1000,
			useNativeDriver: true
		}).start(() => {
			this._startAnimation();
		});
	}

	render() {
		const interpolateColor = this.animatedValue.interpolate({
			inputRange: [0, 150],
			outputRange: ['rgba(0, 0, 0,0)', 'rgba(0,0,0,0)'],
		});
		const animatedStyle = {
			backgroundColor: interpolateColor,
			transform: [{ translateY: this.animatedValue }],
		};

		return (
			<View style={styles.container}>
				<StatusBar backgroundColor="black" />
				<View style={styles.statusBar} />
				<ImageBackground source={require('../assets/main-bg.jpg')} style={styles.backgroundImage}>
					<View style={styles.mainHeaderContainer}>
						<Text style={styles.topTitle}>SOS</Text>
					</View>

					<View style={styles.content}>
						{/* <View style={styles.heyTitleContainer}>
							<Text style={styles.heytite}>HEY</Text>
						</View> */}

						<View style={styles.textContainer}>
							<Text style={styles.simtext}>Hi, please tap to the button below if you are in danger</Text>
						</View>

						<View style={styles.arrowContainer}>
							<Animated.View style={[animatedStyle]}>
								<Image source={require('../assets/arrow.png')} style={[styles.arrow]} />
							</Animated.View>
						</View>
					</View>

					<View style={styles.btnContainer}>
						<TouchableOpacity activeOpacity={0.7}>
							<View style={styles.redbox}>
								<Image source={require('../assets/sos-btn.png')} style={styles.sostxt} />
							</View>
						</TouchableOpacity>
					</View>
				</ImageBackground>
			</View>
		);
	}
}

const animatedStyle = { opacity: this.animatedValue };
const styles = StyleSheet.create({
	mainHeaderContainer: {
		justifyContent: 'center',
		backgroundColor: '#5D45DB',
		alignSelf: 'stretch',
		padding: 15,
	},

	heyTitleContainer: {
		flex: 0.3,
	},
	textContainer: { flex: 1,
	justifyContent: 'center' },
	arrowContainer: { flex: 1.7 },

	statusBar: {
		backgroundColor: '#5D45DB',
	},
	container: {
		flex: 1,
		// flexDirection:row
	},
	backgroundImage: {
		flex: 1,
		alignSelf: 'stretch',
		width: null,
	},
	content: {
		flex: 1,
		paddingTop: 10,
		paddingBottom: 0,
		paddingLeft: 0,
		paddingRight: 0,
		alignItems: 'center',
		justifyContent: 'center',
	},
	btnContainer: {
		flex: 1,
		alignItems: 'center',
	},
	topTitle: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		fontFamily: 'Gelion'
	},
	heytite: {
		color: '#333333',
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	simtext: {
		color: '#5d45db',
		fontSize: 16,
		padding: 15,
		textAlign: 'center',
		fontFamily: 'Gelion',
		justifyContent: 'center'
	},
	arrow: {
		opacity: 1,
		width: 33,
		height: 79,
	},
	redbox: {
		width: 200,
		height: 200,
		borderRadius: 200,
		backgroundColor: '#5d45db',
		justifyContent: 'center',
		alignItems: 'center',

		opacity: 1,
	},
	sostxt: {
		justifyContent: 'center',
		alignItems: 'center',
	},
});

