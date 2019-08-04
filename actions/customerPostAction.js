//ACTION CREATORS AND CONSTANTS ARE DEFINED HERE

// What is Axios? :- 
// Axios is a promise-based HTTP client that works both in the browser and 
// in a node.js environment. It basically provides a single API for dealing 
// with XMLHttpRequest s and node's http interface.

import axios from 'axios'   //importing axios

//This is our API endpoint where we will post
const ENDPOINT = `http://67.205.148.211/login/create`;

//Below we defined 3 constants. This will help us to reduce errors
//For fetching data or posting data we always write these 3 constants.
const POSTS_REQUEST = `POSTS_REQUEST`;
const POSTS_REQUEST_SUCCESS = `POSTS_REQUEST_SUCCESS`;
const POSTS_REQUEST_FAILURE = `POSTS_REQUEST_FAILURE`;



export const postRequestBegin = () => ({
    type: POSTS_REQUEST
    //The type we wrote here is the same as the reducer. So our reducer will know what is going on
    //Our Reducer will know we started our post request
});

export const postsRequestSuccess = data => ({
    type: POSTS_REQUEST_SUCCESS,
    payload: { data }
    //Once we get our data from the API response we store that data in the payload property
});

export const postsRequestFailure = error => ({
    type: POSTS_REQUEST_FAILURE,
    payload: { error }
    //Once there is an error while posting it will be stored.
});


//This is the action. We will be dispatching to the components.
//When the data is sent from the compoenents. The data is passed as an object.
//The data is passed when the user dispatches the action. For example: when the user clicks send.
export const postRequest = (data) => {
    return dispatch => {
        dispatch(postRequestBegin());
        axios
            .post(ENDPOINT, data)  // axios.post takes the URL and and the data object
            .then(res => {         //the res is the result that we get after sending the post request
                setTimeout(() => {
                    dispatch(postsRequestSuccess(res.data)); //Here we are passing all the data from the API to...
                    console.log(res.data)                    //...the postsRequestSuccess method as an params also storing the new data
                }, 2500);
            })
            .catch(err => {                                 //If we are unable to send the data or make connection. 
                dispatch(postsRequestFailure(err.message)); //We will get an error. The error is then passed to the error payload.
                console.log("Error: " + err.message)        //Here we are displaying the error message in the console
                alert("Error: " + err.message)
            });
    };
};


//This action will update Customer

export const updateCustomer = (data, id) => {
    return dispatch => {
        dispatch(postRequest());
        axios
            .put(`${ENDPOINT}/login/${id}/update`, data)  // axios.post takes the URL and and the data object
            .then(res => {         //the res is the result that we get after sending the post request
                setTimeout(() => {
                    dispatch(postsRequestSuccess(res.data)); //Here we are passing all the data from the API to...
                    console.log(res.data)                    //...the postsRequestSuccess method as an params also storing the new data
                }, 2500);
            })
            .catch(err => {                                 //If we are unable to send the data or make connection. 
                dispatch(postsRequestFailure(err.message)); //We will get an error. The error is then passed to the error payload.
                console.log("Error: " + err.message)        //Here we are displaying the error message in the console
            });
    };
};

