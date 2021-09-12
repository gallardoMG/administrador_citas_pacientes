const initialState = { view: 'loginView' }
export const viewReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_VIEW': return { ...state, ...action.payload };
        default: return state;
    }
}