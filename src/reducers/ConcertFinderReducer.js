import {
	CONCERT_ARTIST_CHANGED,
	CONCERT_STATE_CHANGED,
	CONCERT_YEAR_CHANGED,
	CONCERT_VENUE_CHANGED
	} from '../actions/types';


const INITIAL_STATE = {
	artist: '',
	artistList: {},
	state: '',
	year: '',
	venue: null,
	concertDate: '',
	loading: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CONCERT_ARTIST_CHANGED:
			return { ...state, artistList: action.payload };
		case CONCERT_STATE_CHANGED:
			return state;
		case CONCERT_YEAR_CHANGED:
			return state;
		case CONCERT_VENUE_CHANGED:
			return state;
		default:
			return state;
	}
};
