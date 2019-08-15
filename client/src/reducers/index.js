const initialState = {
    photos: [],
    isLoading: false,
    
};

//step 2. create reducer
export const reducer = (state = initialState, action) => {
    console.log('action', action);
    switch(action.type) {
        default:
            return state;
    }
};