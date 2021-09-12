import { currentUserReducer } from './currentUserReducer';

const stateTest = {
    id: '+525621102607',
    phone: '+525621102607',
    name: 'Eduardo',
    gender: 'male',
    age: '26',
    infoSchedule: [{ id: '589658' }]
}
describe('Update User', () => {
    it('Action CURRENT_USER', () => {
        let state = {
            id: '',
            phone: '',
            name: '',
            gender: '',
            age: '',
            infoSchedule: []
        };
        state = (currentUserReducer(state, { type: 'CURRENT_USER', payload: stateTest }))
        expect(state).toEqual(stateTest)
    })
    it('Action SCHEDULE_UPDATE', () => {
        let state = stateTest;
        const payload = {
            id: '589658',
            data: {
                id: '589658',
                daysDisease: "5",
                disease: "Dolor brazo derecho"
            }
        }
        const resultExpect = {
            id: '+525621102607',
            phone: '+525621102607',
            name: 'Eduardo',
            gender: 'male',
            age: '26',
            infoSchedule: [{
                id: '589658', daysDisease: "5",
                disease: "Dolor brazo derecho",
            }]
        }
        state = (currentUserReducer(state, { type: 'SCHEDULE_UPDATE', payload: payload }))
        expect(state).toEqual(resultExpect)
    })
    it('Action ADD_SCHEDULE', () => {
        let state = stateTest;
        const payload = {
            id: '589659',
            daysDisease: "5",
            disease: "Dolor brazo derecho"
        }
        const resultExpect = {
            id: '+525621102607',
            phone: '+525621102607',
            name: 'Eduardo',
            gender: 'male',
            age: '26',
            infoSchedule: [{
                id: '589658'
            }, {
                id: '589659',
                daysDisease: "5",
                disease: "Dolor brazo derecho",
            }]
        }
        state = (currentUserReducer(state, { type: 'ADD_SCHEDULE', payload: payload }))
        expect(state).toEqual(resultExpect)
    })
    it('Action DELETE_SCHEDULE', () => {
        let state = stateTest;
        const payload = '589658'
        const resultExpect = {
            id: '+525621102607',
            phone: '+525621102607',
            name: 'Eduardo',
            gender: 'male',
            age: '26',
            infoSchedule: []
        }
        state = (currentUserReducer(state, { type: 'DELETE_SCHEDULE', payload: payload }))
        expect(state).toEqual(resultExpect)
    })

})