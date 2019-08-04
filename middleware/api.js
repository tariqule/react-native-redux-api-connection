//This is not used
/////////////////////////////////////////////////////////////////////////////////////
import axios from 'axios';

const apiMiddleware = store => next => action => {
    const { dispatch, getState } = store;
    if (typeof action === 'function') {
        return action(dispatch, getState);
    }

    const { api, types, ...rest } = action;
    if (!api) {
        return next(action);
    }

    const [REQUEST, SUCCESS, FAILURE] = types;
    next({ ...rest, type: REQUEST });

    const actionPromise = api(axios);
    actionPromise.then(
        (result) => next({ ...rest, result, type: SUCCESS }),
        (error) => next({ ...rest, error, type: FAILURE })
    ).catch((error) => {
        next({ ...rest, error, type: FAILURE });
    });

    return actionPromise;
}

export const loggerMiddleware = store => next => action => {
    console.log(action)
    next(action);
}


export default apiMiddleware;