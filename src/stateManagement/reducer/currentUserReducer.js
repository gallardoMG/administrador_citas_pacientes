const initialState = {
    id: '',
    phone: '',
    name: '',
    gender: '',
    age: '',
    infoSchedule: []
}
export const currentUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CURRENT_USER':
            return { ...state, ...action.payload }
        case 'SCHEDULE_UPDATE':
            return { ...state, infoSchedule: state.infoSchedule.map(el => el.id === action.payload.id ? { ...el, ...action.payload.data } : el) }
        case 'ADD_SCHEDULE':
            return { ...state, infoSchedule: state.infoSchedule.concat(action.payload) }
        case 'DELETE_SCHEDULE':
            return { ...state, infoSchedule: state.infoSchedule.filter(el => el.id !== action.payload) }
        default: return state;
    }
}

export const currentInfoSchedule = (state = { id: '' }, action) => {
    switch (action.type) {
        case 'SET_ID':
            return { ...state, id: action.payload }
        default: return state;
    }
}
