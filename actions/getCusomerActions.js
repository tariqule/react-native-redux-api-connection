
//Below we defined 3 constants. This will help us to reduce errors
//For fetching data or posting data we always write these 3 constants.
export const FETCH_CUSTOMERS_BEGIN = 'FETCH_CUSTOMERS_BEGIN';
export const FETCH_CUSTOMERS_SUCCESS = 'FETCH_CUSTOMERS_SUCCESS';
export const FETCH_CUSTOMERS_FAILURE = 'FETCH_CUSTOMERS_FAILURE';

export const BASE_URL = 'http://67.205.148.211';

export const fetchCustomersBegin = () => ({
    type: FETCH_CUSTOMERS_BEGIN
    //The type we wrote here is the same as the reducer. So our reducer will know what is going on
    //Our Reducer will know we started our post request
});

export const fetchCustomersSuccess = customers => ({
    type: FETCH_CUSTOMERS_SUCCESS,
    payload: { customers }
    //Once we get our data from the API response we store that data of the customers in the payload property

});

export const fetchCustomersFailure = error => ({
    type: FETCH_CUSTOMERS_FAILURE,
    payload: { error }
    //Once there is an error while posting it will be stored.

});


//This is the action. We will be dispatching to the components.
//When the fetchCustomers is dispatched it will try to get all the data from the API
//We have mentioned this in the mapDispatchToProps. 
//So When we want to retrive the data we just call this.props.fetchCustomers
export function fetchCustomers() {

    //As we are using redux-thunk as middleware. We need the return dispatch method.
    return dispatch => {
        dispatch(fetchCustomersBegin());  //Here we let the reducer know we started our request
        return fetch(`${BASE_URL}/login`)  //Here we send the request to th URL
            .then(handleErrors)          //If there is an error that cannot be handled by our HTTP request we will catch it.
            .then(res => res.json())     //res is the result of our fetch request. We then convert it to JSON
            .then(json => {              //The JSON result is the passed to the fetchCustomersSuccess method
                dispatch(fetchCustomersSuccess(json));  //We have to let our reducer know that we are successful
                return json;
            })
            .catch(error => {
                dispatch(fetchCustomersFailure(error))
                alert("Error: " + err.message)
            }); //if we are unable to connect/receive data... 
    };                                                               //...then we will display an error/
}
// Handle HTTP errors since fetch won't.
export function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}