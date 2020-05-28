const initialState = {
	error: '',
	success: '',
}

const warning = (state = initialState, action) => {
	switch(action.type){
		case('SET_WARNING'): {
			if(!action.isOk) {
				return {
					error: action.payload,
					success: '',
				}
			}
			return {
				error: '',
				success: action.payload,
			}
		}
		default: {
			return state;
		}
	}
}

export default warning;