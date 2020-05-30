const initialState = [];

const movieHome = (state = initialState, action) => {
	switch(action.type){
		case('SET_HOME_MOVIES'): {
			return action.payload.sort((a, b) => a.title > b.title ? 1 : -1);
		}
		default: {
			return state;
		}
	}
}

export default movieHome;