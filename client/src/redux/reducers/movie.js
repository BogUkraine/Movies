const initialState = [];

const movie = (state = initialState, action) => {
	switch(action.type){
		case('SET_HOME_MOVIES'): {
			return action.payload;
		}
		default: {
			return state;
		}
	}
}

export default movie;