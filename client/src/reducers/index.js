import {requestData} from '../actions';

const initialState = {
    photos: [],
    isLoading: false,
    error: '',
};

//step 2. create reducer
export const reducer = (state = initialState, action) => {
    console.log('action', action);
    switch(action.type) {
        case 'REQUEST_DATA':
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        default:
            return state;
    }
};