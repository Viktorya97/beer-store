import { put, takeLatest } from "redux-saga/effects";
import axios from 'axios';

import {getAllBeersError, getAllBeersSuccess, getSingleBeerError, getSingleBeerSuccess} from "./actionCreators";
import {BeersAction, GET_ALL_BEERS_REQUEST, GET_SINGLE_BEER_REQUEST, SingleBeerAction} from "./actionTypes";

interface getBeersType {
    allBeers: object[];
    error: Error | string;
    status: number;
    data: any;
    id: number;
}

function* getBeers({ payload }: BeersAction) {
    try {
        const response: getBeersType = yield axios.get(`${process.env.REACT_APP_PUNK_API_URL}?page=${payload.page}&per_page=${payload.per_page}`);
        if (response && response.status === 200) {
            yield put(getAllBeersSuccess(response.data));
        }
    } catch (error: any) {
        yield put(getAllBeersError(error.response.data.error));
    }
}

function* getSingleBeer({ payload }: SingleBeerAction) {
    try {
        const response: getBeersType = yield axios.get(`${process.env.REACT_APP_PUNK_API_URL}/${payload.id}`);
        if (response && response.status === 200) {
            yield put(getSingleBeerSuccess(response.data[0]));
        }
    } catch (error: any) {
        yield put(getSingleBeerError(error.response.data.error));
    }
}

export default function* beersSaga() {
    yield takeLatest(GET_ALL_BEERS_REQUEST, getBeers)
    yield takeLatest(GET_SINGLE_BEER_REQUEST, getSingleBeer)
}