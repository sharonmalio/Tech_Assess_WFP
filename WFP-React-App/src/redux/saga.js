import { call, put, takeEvery} from 'redux-saga/effects'

import {  
    FETCH_DATA_INIT,
    fetchDataSuccess,
    fetchDataFailure
    } from './actions'

import Api from '../lib/services'

function* fetchData(payload) {
    try {
        const response =  yield call(Api.fetchData, payload.payload)
        yield put(fetchDataSuccess(response))
        
    } catch (error) {
       yield put(fetchDataFailure())
    }
    
}

function* watchSaga() {
    yield takeEvery(FETCH_DATA_INIT, fetchData)
  }

export default watchSaga