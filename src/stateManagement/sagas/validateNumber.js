import { call, put, takeLatest } from 'redux-saga/effects';
import { apiValidateUser } from '../../utils/APIs';
import { currentUser, updateView } from '../actions/actions';

function* validateNumber({ id }) {
    try {
        const data = yield call(apiValidateUser, id)
        if (data.ok) {
            const dataParse = yield data.json();
            yield put(currentUser(dataParse));
            yield put(updateView('completeView'));
        } else {
            yield alert('Tu número no esta registrado');
        }

    } catch (e) {
        yield alert('Ocurrio un error, intentalo de nuevo');
        console.log(e)
    }
}

export default function* watchValidateNumber() {
    yield takeLatest('VALIDATE_NUMBER', validateNumber)
}