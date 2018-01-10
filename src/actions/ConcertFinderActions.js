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
		const searchStrings = buildSearchString(text);
		console.log(searchStrings.startString);
		console.log(searchStrings.endString);
		return dispatch => {
			firebaseArtistSearch(searchStrings.startString, searchStrings.endString)
			.then(snapshot => {
				console.log(snapshot.val());
				dispatch({
					type: CONCERT_ARTIST_SEARCH_SUCCESS,
					payload: snapshot.val()
				});
			});
		};
		// getData(searchStrings.startString, searchStrings.endString);
		// return {
		// 	type: CONCERT_ARTIST_SEARCH_SUCCESS,
		// 	payload: searchStrings.startString
		// };
};
//
const firebaseArtistSearch = ({ startString, endString }) => {
		const ref = firebase.database().ref('artistSearch');
		console.log(startString);
		console.log(endString);
		return ref.orderByKey()
			.startAt('ph')//(startString)
			.endAt('phzzz')//(endString)
			.once('value');
	// try {
	// } catch (error) {
	// 	return null;
	// }
};
//
export const getData = ({ startString, endString }) => {
	return dispatch => {
		firebaseArtistSearch(startString, endString)
		.then(snapshot => {
			console.log(snapshot.val());
			dispatch({
				type: CONCERT_ARTIST_SEARCH_SUCCESS,
				payload: snapshot.val()
			});
		});
	};
};
// export const artistChanged = (text) => {
// 	const searchStrings = buildSearchString(text);
// 	const artistSearchData = firebaseArtistSearch(
// 		searchStrings.startString,
// 		searchStrings.endString,
// 		(err, result) => { console.log(result); }
// 	);
// 	return {
// 		type: CONCERT_ARTIST_CHANGED,
// 		payload: artistSearchData
// 	};
// };

// const firebaseArtistSearch = (startString, endString, callback) => {
// 	const ref = firebase.database().ref('artistSearch');
//
// 	ref.orderByKey()
// 	.startAt(startString)
// 	.endAt(endString)
// 	.once('value', snapshot => {
// 		const data = snapshot.val();
// 			callback(null, data);
// 	}, error => {
// 		console.log(error);
// 	});
// };
//
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
