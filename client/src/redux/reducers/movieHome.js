const initialState = {
	movies: [],
	page: 0,
	moviesCount: 0,
	limit: 20,
};

const movieHome = (state = initialState, action) => {
	switch(action.type){
		case('SET_HOME_MOVIES'): {
			return {
				movies: action.payload.movies,
				page: parseInt(action.payload.page,10),
				moviesCount: parseInt(action.payload.moviesCount,10),
				limit: parseInt(action.payload.limit,10),
			};
		}
		default: {
			return state;
		}
	}
}

export default movieHome;