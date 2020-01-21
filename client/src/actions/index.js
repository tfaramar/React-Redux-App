import axios from 'axios';

export const requestData = () => {
    return dispatch => {
        dispatch({ type: 'REQUEST_DATA' });
    };
}