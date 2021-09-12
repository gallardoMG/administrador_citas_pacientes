import { DISEASE_VIEW, LOGIN_VIEW, DATA_VIEW, SCHEDULE_VIEW, COMPLETE_VIEW } from '../../utils/constants';
import { viewReducer } from './viewReducer';

describe('View reducers', () => {
    it('loginView', () => {
        let state = { view: LOGIN_VIEW }
        state = viewReducer(state, { type: 'UPDATE_VIEW', payload: { view: DATA_VIEW } })
        expect(state).toEqual({ view: DATA_VIEW });
    })
    it('diseaseView', () => {
        let state = { view: DATA_VIEW };
        state = viewReducer(state, { type: 'UPDATE_VIEW', payload: { view: DISEASE_VIEW } });
        expect(state).toEqual({ view: DISEASE_VIEW });
    })
    it('scheduleView', () => {
        let state = { view: DISEASE_VIEW }
        state = viewReducer(state, { type: 'UPDATE_VIEW', payload: { view: SCHEDULE_VIEW } })
        expect(state).toEqual({ view: SCHEDULE_VIEW })
    })
    it('completeView', () => {
        let state = { view: SCHEDULE_VIEW }
        state = viewReducer(state, { type: 'UPDATE_VIEW', payload: { view: COMPLETE_VIEW } })
        expect(state).toEqual({ view: COMPLETE_VIEW })
    })
});