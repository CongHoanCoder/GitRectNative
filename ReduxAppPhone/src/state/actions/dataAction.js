export const getData = () => {
    return (dispatch) => {
        //const [data,setData] = useState(null);
        fetch(
            "https://reqres.in/api/products/3")
                        .then((res) => res.json())
                        .then((json) => {
                           // console.log(json);
                            //setData(json);
                            dispatch({
                                type: "GET_DATA",
                                 payload: json
                             });
                        })
        
    }
}
