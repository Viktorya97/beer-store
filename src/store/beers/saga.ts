import { put, takeLatest } from 'redux-saga/effects'

import {
  getAllBeersError,
  getAllBeersSuccess,
  getBeersByBrewedError,
  getBeersByBrewedSuccess, getSimilarBeersError, getSimilarBeersSuccess,
  getSingleBeerError,
  getSingleBeerSuccess,
} from './actionCreators'
import {
  BeerByBrewedAction,
  BeersAction,
  GET_ALL_BEERS_REQUEST,
  GET_BEERS_BY_BREWED_REQUEST, GET_SIMILAR_BEERS_REQUEST,
  GET_SINGLE_BEER_REQUEST, SimilarBeersAction,
  SingleBeerAction,
} from './actionTypes'
import axiosInstance from '../../config/axiosInstance'

interface getBeersType {
  allBeers: object[]
  error: Error | string
  status: number
  data: any
  id: number
}

function* getBeers({ payload }: BeersAction) {
  try {
    const response: getBeersType = yield axiosInstance.get(
      `${process.env.REACT_APP_PUNK_API_URL}?page=${payload.page}&per_page=${payload.per_page}`,
    )
    if (response && response.status === 200) {
      yield put(getAllBeersSuccess(response.data))
    }
  } catch (error: any) {
    yield put(getAllBeersError(error.response.data.error))
  }
}

function* getSingleBeer({ payload }: SingleBeerAction) {
  try {
    const response: getBeersType = yield axiosInstance.get(
      `${process.env.REACT_APP_PUNK_API_URL}/${payload.id}`,
    )
    if (response && response.status === 200) {
      yield put(getSingleBeerSuccess(response.data[0]))
    }
  } catch (error: any) {
    yield put(getSingleBeerError(error.response.data.error))
  }
}

function* getBeersByBrewed({ payload }: BeerByBrewedAction) {
  try {
    const { brewed_before, brewed_after } = payload
    const response: getBeersType = yield axiosInstance.get(
      `${process.env.REACT_APP_PUNK_API_URL}?brewed_before=${brewed_before}&brewed_after=${brewed_after}`,
    )
    if (response && response.status === 200) {
      yield put(getBeersByBrewedSuccess(response.data[0]))
    }
  } catch (error: any) {
    yield put(getBeersByBrewedError(error.response.data.error))
  }
}

function* getSimilarBeers({ payload }: SimilarBeersAction) {
  try {
    const { abv_gt, abv_lt, ibu_gt, ibu_lt} = payload
    const response: getBeersType = yield axiosInstance.get(
      `${process.env.REACT_APP_PUNK_API_URL}?abv_gt=${abv_gt}&abv_lt=${abv_lt}&ibu_gt=${ibu_gt}&ibu_lt=${ibu_lt}`,
    )
    if (response && response.status === 200) {
      yield put(getSimilarBeersSuccess(response.data[0]))
    }
  } catch (error: any) {
    yield put(getSimilarBeersError(error.response.data.error))
  }
}

export default function* beersSaga() {
  yield takeLatest(GET_ALL_BEERS_REQUEST, getBeers)
  yield takeLatest(GET_SINGLE_BEER_REQUEST, getSingleBeer)
  yield takeLatest(GET_BEERS_BY_BREWED_REQUEST, getBeersByBrewed)
  yield takeLatest(GET_SIMILAR_BEERS_REQUEST, getSimilarBeers)
}
