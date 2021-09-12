import { call, put, takeLatest, select } from 'redux-saga/effects';
import store from '../store';
import { apiUpdate, apiUpload, apiValidateUser } from '../../utils/APIs';
import { updateView } from '../actions/actions';

function* updateUser() {
    const dataUser = yield select(() => store.getState().currentUserReducer);
    try {
        const { ok } = yield call(apiValidateUser, dataUser.id)
        if (ok) {
            const { ok } = yield call(apiUpdate, dataUser)
            if (ok) yield alert('CITA AGENDADA CON ÉXITO!');
        } else {
            const { ok } = yield call(apiUpload, dataUser)
            if (ok) yield alert('CITA AGENDADA CON ÉXITO!');
        }
    }
    catch (e) {
        yield alert('Ocurrio un error, intentalo de nuevo');
    }
    yield put(updateView('completeView'));
}
export default function* watchUpdateUser() {
    yield takeLatest('UPDATE_USER', updateUser)
}