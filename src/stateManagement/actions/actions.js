export const updateView = (view) => ({
    type: 'UPDATE_VIEW', payload: { view: view }
})

export const currentUser = (userInfo) => ({
    type: 'CURRENT_USER', payload: userInfo
})

export const setId = (id) => ({
    type: 'SET_ID', payload: id
})

export const details = (detailsInfo) => ({
    type: 'DETAILS', payload: detailsInfo
})

export const deleteSchedule = (id) => ({
    type: 'DELETE_SCHEDULE', payload: id
})

export const scheduleUpdate = (id, data) => ({
    type: 'SCHEDULE_UPDATE', payload: { id: id, data: data }
})

export const addSchedule = (id) => ({
    type: 'ADD_SCHEDULE', payload: { id: id }
})
