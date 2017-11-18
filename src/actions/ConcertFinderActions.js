import firebase from 'firebase';
import {
	CONCERT_ARTIST_CHANGED
	} from '../actions/types';

export const artistChanged = (text) => {
	firebaseArtistSearch();
	return {
		type: CONCERT_ARTIST_CHANGED,
		payload: text
	};
};

export const firebaseArtistSearch = () => {
	firebase.database().ref('artistSearch/').once('value', (snapshot) => {
		console.log('testing snapshot: ', snapshot);
	});
};
