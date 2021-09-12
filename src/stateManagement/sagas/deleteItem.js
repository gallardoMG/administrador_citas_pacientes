import store from '../store';
import { call, takeLatest, select } from 'redux-saga/effects';
import { apiUpdate } from '../../utils/APIs';

function* deleteItem() {
    const dataUser = yield select(() => store.getState().currentUserReducer);
    try {
        const { ok } = yield call(apiUpdate, dataUser)
        if (ok) yield alert('Borrado con éxito')
    } catch (e) {
        yield alert('Ocurrio un error, refresca la página');
        console.log(e)
    }
}

export default function* watchDeleteItem() {
    yield takeLatest('DELETE_SCHEDULE', deleteItem)
}