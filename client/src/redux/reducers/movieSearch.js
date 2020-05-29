const initialState = [];

const movieSearch = (state = initialState, action) => {
	switch(action.type){
		case('SET_SEARCH_MOVIES'): {
			return action.payload.sort((a, b) => a.title > b.title ? 1 : -1);
		}
		default: {
			return state;
		}
	}
}

export default movieSearch;