import firebase from '../../firebaseInit';

import {
	CONCERT_ARTIST_CHANGED
	} from '../actions/types';

export const artistChanged = (text) => {
	const searchStrings = buildSearchString(text);
	firebaseArtistSearch(searchStrings.startString, searchStrings.endString);
	return {
		type: CONCERT_ARTIST_CHANGED,
		payload: text
	};
};

const firebaseArtistSearch = (startString, endString) => {
	const ref = firebase.database().ref('artistSearch');

	ref.orderByKey()
	.startAt(startString)
	.endAt(endString)
	.orderByValue()
	.once('value', (snapshot) => {
		console.log('testing snapshot: ', snapshot);
	});
};

const buildSearchString = (text) => {
		// Firebase uses a startAt and endAt function to
		// search keys so take user input and create endString
		const startString = text;
		const endString = `${text}zzzzz`;
		return {
			startString,
			endString
		};
};
