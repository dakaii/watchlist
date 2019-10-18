import * as types from './Types';

export const getUpcomingMovies = (params) => ({
	type: types.UPCOMING_MOVIES_REQUESTED,
	params,
});

export const getConfig = (params) => ({
	type: types.GET_CONFIG_REQUESTED,
	params,
});