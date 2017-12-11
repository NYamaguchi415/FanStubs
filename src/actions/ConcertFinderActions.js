import firebase from '../../firebaseInit';

import {
	CONCERT_ARTIST_CHANGED
	} from '../actions/types';

export const artistChanged = (text) => {
		const searchStrings = buildSearchString(text);
		let currentSnapshot;

		function getData() {
			firebaseArtistSearch()
			.then(setSnapshot, showError);
		}

		function setSnapshot(snapshot) {
			currentSnapshot = snapshot.val();
		}

		function showError(e) {
			console.log(e);
		}

		getData(searchStrings.startString, searchStrings.endString)
		.then(console.log(currentSnapshot));
		// .then(
		// 	(data) => {
		// 		console.log(data);
		// 	}
		// );
		return {
			type: CONCERT_ARTIST_CHANGED,
			payload: 'x'
		};
};

function firebaseArtistSearch(startString, endString) {
	try {
		const ref = firebase.database().ref('artistSearch');
		return ref.orderByKey()
			.startAt(startString)
			.endAt(endString)
			.once('value');
		// .once('value', snapshot => {
		// 	//console.log(snapshot.val());
		// 	return (snapshot.val());
		// });
	} catch (error) {
		return null;
	}
}
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
