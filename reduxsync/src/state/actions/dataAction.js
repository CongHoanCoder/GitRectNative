export const getData = () => {
    return dispatch =>
    fetch(
        "https://reqres.in/api/products/3")
                    .then((res) => res.json())
                    .then((result) => {
                        dispatch({
                            type: "GET_DATA",
                            payload: result
                        });
                     
                   
                    })
   
}