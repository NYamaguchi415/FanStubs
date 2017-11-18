import firebase from 'firebase';
import { firebaseConfig } from '../../config';
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
	// firebase.initializeApp(firebaseConfig); this doesn't work
	// produces error "Firebase App already exists"

	// the code below produces the error 
	firebase.database().ref('artistSearch/').once('value', (snapshot) => {
		console.log('testing snapshot: ', snapshot);
	});
};
