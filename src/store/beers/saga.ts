import { put, takeLatest } from 'redux-saga/effects'

import {
  getAllBeersError,
  getAllBeersSuccess,
  getBeersByBrewedError,
  getBeersByBrewedSuccess,
  getSimilarBeersError,
  getSimilarBeersSuccess,
  getSingleBeerError,
  getSingleBeerSuccess,
} from './actionCreators'
import {
  BeerByBrewedAction,
  BeersAction,
  GET_ALL_BEERS_REQUEST,
  GET_BEERS_BY_BREWED_REQUEST,
  GET_SIMILAR_BEERS_REQUEST,
  GET_SINGLE_BEER_REQUEST,
  SimilarBeersAction,
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
    const { page, per_page } = payload
    // @ts-ignore
    const query = new URLSearchParams({ page, per_page }).toString()
    const response: getBeersType = yield axiosInstance.get(
      `${process.env.REACT_APP_PUNK_API_URL}?${query}`,
    )
    if (response && response.status === 200) {
      yield put(getAllBeersSuccess(response.data))
    }
  } catch (error: any) {
    yield put(getAllBeersError(error.response.data))
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
    yield put(getSingleBeerError(error.response.data))
  }
}

function* getBeersByBrewed({ payload }: BeerByBrewedAction) {
  try {
    const { brewed_before, brewed_after } = payload
    // @ts-ignore
    const query = new URLSearchParams({ brewed_before, brewed_after }).toString()
    const response: getBeersType = yield axiosInstance.get(
      `${process.env.REACT_APP_PUNK_API_URL}?${query}`,
    )
    if (response && response.status === 200) {
      yield put(getBeersByBrewedSuccess(response.data))
    }
  } catch (error: any) {
    yield put(getBeersByBrewedError(error.response.data))
  }
}

function* getSimilarBeers({ payload }: SimilarBeersAction) {
  try {
    const { abv_gt, abv_lt, ibu_gt, ibu_lt } = payload

    // @ts-ignore
    const query = new URLSearchParams({ abv_gt, abv_lt, ibu_gt, ibu_lt }).toString()
    const response: getBeersType = yield axiosInstance.get(
      `${process.env.REACT_APP_PUNK_API_URL}?${query}`,
    )
    if (response && response.status === 200) {
      // @ts-ignore
      yield put(getSimilarBeersSuccess({ id: payload.id, data: response.data }))
    }
  } catch (error: any) {
    yield put(getSimilarBeersError(error.response.data))
  }
}

export default function* beersSaga() {
  yield takeLatest(GET_ALL_BEERS_REQUEST, getBeers)
  yield takeLatest(GET_SINGLE_BEER_REQUEST, getSingleBeer)
  yield takeLatest(GET_BEERS_BY_BREWED_REQUEST, getBeersByBrewed)
  yield takeLatest(GET_SIMILAR_BEERS_REQUEST, getSimilarBeers)
}
