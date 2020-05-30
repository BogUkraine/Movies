const initialState = [];

const movieSearch = (state = initialState, action) => {
	switch(action.type){
		case('SET_SEARCHED_MOVIES'): {
			return action.payload;
		}
		default: {
			return state;
		}
	}
}

export default movieSearch;