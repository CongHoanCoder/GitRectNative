const initialState = {
    "data":{
       "id":10,
       "name":"initial value",
       "year":2002,
       "color":"#BF1932",
       "pantone_value":"19-1664"
    },
    "support":{
       "url":"https://reqres.in/#support-heading",
       "text":"To keep ReqRes free, contributions towards server costs are appreciated!"
    }
 };

const dataReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "GET_DATA":
            //return {state : action.payload};
            return {state : action.payload};
        
        default:
            return state;
    }
}

export default dataReducer;