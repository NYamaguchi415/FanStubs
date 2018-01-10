import firebase from '../../firebaseInit';

import {
	CONCERT_ARTIST_CHANGED,
	CONCERT_ARTIST_SEARCH_SUCCESS
	} from '../actions/types';

export const artistInputChanged = (text) => {
	return {
		type: CONCERT_ARTIST_CHANGED,
		payload: text
	};
};

export const artistSearch = (text) => {
		return dispatch => {
			// search using the inputted text as the startString
			// and text + zzzz as the end string to limit firebase search
			firebaseArtistSearch(text, `${text}zzzzz`)
			.then(snapshot => {
				dispatch({
					type: CONCERT_ARTIST_SEARCH_SUCCESS,
					payload: snapshot.val()
				});
			});
		};
};

const firebaseArtistSearch = (startString, endString) => {
		const ref = firebase.database().ref('artistSearch');
		return ref.orderByKey()
			.startAt(startString)
			.endAt(endString)
			.once('value');
	// try {
	// } catch (error) {
	// 	return null;
	// }
};
//
// const buildSearchString = (text) => {
// 		// Firebase uses a startAt and endAt function to
// 		// search keys so take user input and create endString
// 		const startString = text;
// 		const endString = `${text}zzzzz`;
// 		return {
// 			startString,
// 			endString
// 		};
// };
