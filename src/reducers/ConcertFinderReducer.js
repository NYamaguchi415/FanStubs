import {
	CONCERT_ARTIST_CHANGED,
	CONCERT_STATE_CHANGED,
	CONCERT_YEAR_CHANGED,
	CONCERT_VENUE_CHANGED,
	CONCERT_ARTIST_SEARCH_SUCCESS
	} from '../actions/types';


const INITIAL_STATE = {
	artistInput: '',
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
			return { ...state, artistInput: action.payload };
		case CONCERT_ARTIST_SEARCH_SUCCESS:
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
