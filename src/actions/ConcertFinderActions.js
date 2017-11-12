import { 
	CONCERT_ARTIST_CHANGED
	} from '../actions/types';

export const artistChanged = (text) => {
	return {
		type: CONCERT_ARTIST_CHANGED,
		payload: text
	};
};

