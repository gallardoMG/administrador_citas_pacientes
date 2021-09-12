import { call, put, takeLatest } from 'redux-saga/effects';
import { apiValidateUser } from '../../utils/APIs';
import { currentUser, setId, updateView } from '../actions/actions';

function* checkNumber({ dataUser, id }) {
    console.log(dataUser, id)
    try {
        const { ok } = yield call(apiValidateUser, dataUser.id)
        if (ok) yield alert('El número ya esta registrado')
        else {
            yield put(currentUser(dataUser))
            yield put(setId(id));
            yield put(updateView('diseaseView'));
        }

    } catch (e) {
        yield alert('Ocurrio un error, intentalo de nuevo');
        console.log(e)
    }
}

export default function* watchCheckNumber() {
    yield takeLatest('CHECK_NUMBER', checkNumber)
}