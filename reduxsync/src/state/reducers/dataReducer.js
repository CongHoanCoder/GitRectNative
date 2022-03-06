const initialState = null;

const DataReducer = (state = initialState, action) => {

    switch (action.type) {
        case "GET_DATA":
            return state = action.payload;
        default:
            return state;
    }
}

export default DataReducer;