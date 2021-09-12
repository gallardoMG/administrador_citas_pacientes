import { all } from 'redux-saga/effects';
import watchDeleteItem from './deleteItem';
import watchUpdateUser from './updateUser';
import watchCheckNumber from './checkNumber';
import watchValidateNumber from './validateNumber';


export default function* rootSaga() {
    yield all([
        watchUpdateUser(),
        watchDeleteItem(),
        watchCheckNumber(),
        watchValidateNumber()
    ])
}