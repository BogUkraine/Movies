const initialState = {}

const movie = (state = initialState, action) => {
	switch(action.type){
		case('TEST'): {
			return action.payload;
		}
		default: {
			return state;
		}
	}
}

export default movie;