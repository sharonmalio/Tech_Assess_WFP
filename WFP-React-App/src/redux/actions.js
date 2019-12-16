export const FETCH_DATA_INIT='FETCH_DATA_INIT'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'

export function fetchDataInit(payload) {
    return {
        type: FETCH_DATA_INIT,
        payload
    }
}

export function fetchDataSuccess(payload) {
    return {
        type: FETCH_DATA_SUCCESS,
        payload
    }
}

export function fetchDataFailure(payload) {
    return {
        type: FETCH_DATA_FAILURE,
        payload
    }
}