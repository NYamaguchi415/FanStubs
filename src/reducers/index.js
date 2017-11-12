import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ConcertFinderReducer from './ConcertFinderReducer';

export default combineReducers({
	auth: AuthReducer,
	concertFinder: ConcertFinderReducer
});
