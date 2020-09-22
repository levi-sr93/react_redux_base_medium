const initialState = {
    text: 'Este Texto'
}

export default ( state = initialState, action) => {
    switch(action.type) {
        case 'SET_TEXT':
            return {
                ...state,
                text: action.payload
            }
            default: 
                return state;
    }
}