import {
  GET_ALL_BEERS_ERROR,
  GET_ALL_BEERS_REQUEST,
  GET_ALL_BEERS_SUCCESS,
  GET_BEERS_BY_BREWED_ERROR,
  GET_BEERS_BY_BREWED_REQUEST,
  GET_BEERS_BY_BREWED_SUCCESS,
  GET_SIMILAR_BEERS_ERROR,
  GET_SIMILAR_BEERS_REQUEST,
  GET_SIMILAR_BEERS_SUCCESS,
  GET_SINGLE_BEER_ERROR,
  GET_SINGLE_BEER_REQUEST,
  GET_SINGLE_BEER_SUCCESS,
  GetAllBeersErrorAction,
  GetAllBeersRequestAction,
  GetAllBeersSuccessAction,
  GetBeersByBrewedErrorAction,
  GetBeersByBrewedRequestAction,
  GetBeersByBrewedSuccessAction,
  GetSimilarBeersErrorAction,
  GetSimilarBeersRequestAction,
  GetSimilarBeersSuccessAction,
  GetSingleBeerErrorAction,
  GetSingleBeerRequestAction,
  GetSingleBeerSuccessAction,
} from './actionTypes'

export function getAllBeersRequest(payload: {
  page: number
  per_page: number
}): GetAllBeersRequestAction {
  return {
    type: GET_ALL_BEERS_REQUEST,
    payload,
  }
}

export function getAllBeersSuccess(payload: {
  page: number
  per_page: number
}): GetAllBeersSuccessAction {
  return {
    type: GET_ALL_BEERS_SUCCESS,
    payload,
  }
}

export function getAllBeersError(payload: {
  page: number
  per_page: number
}): GetAllBeersErrorAction {
  return {
    type: GET_ALL_BEERS_ERROR,
    payload,
  }
}

export function getSingleBeerRequest(payload: { id: number }): GetSingleBeerRequestAction {
  return {
    type: GET_SINGLE_BEER_REQUEST,
    payload,
  }
}

export function getSingleBeerSuccess(payload: { id: number }): GetSingleBeerSuccessAction {
  return {
    type: GET_SINGLE_BEER_SUCCESS,
    payload,
  }
}

export function getSingleBeerError(payload: { id: number }): GetSingleBeerErrorAction {
  return {
    type: GET_SINGLE_BEER_ERROR,
    payload,
  }
}

export function getBeersByBrewedRequest(payload: {
  brewed_before: Date,
  brewed_after: Date,
}): GetBeersByBrewedRequestAction {
  return {
    type: GET_BEERS_BY_BREWED_REQUEST,
    payload,
  }
}

export function getBeersByBrewedSuccess(payload: {
  brewed_before: Date,
  brewed_after: Date,
}): GetBeersByBrewedSuccessAction {
  return {
    type: GET_BEERS_BY_BREWED_SUCCESS,
    payload,
  }
}

export function getBeersByBrewedError(payload: {
  brewed_before: Date,
  brewed_after: Date,
}): GetBeersByBrewedErrorAction {
  return {
    type: GET_BEERS_BY_BREWED_ERROR,
    payload,
  }
}

export function getSimilarBeersRequest(payload: {
  abv_gt: number
  abv_lt: number
  ibu_gt: number
  ibu_lt: number
}): GetSimilarBeersRequestAction {
  return {
    type: GET_SIMILAR_BEERS_REQUEST,
    payload,
  }
}

export function getSimilarBeersSuccess(payload: {
  abv_gt: number
  abv_lt: number
  ibu_gt: number
  ibu_lt: number
}): GetSimilarBeersSuccessAction {
  return {
    type: GET_SIMILAR_BEERS_SUCCESS,
    payload,
  }
}

export function getSimilarBeersError(payload: {
  abv_gt: number
  abv_lt: number
  ibu_gt: number
  ibu_lt: number
}): GetSimilarBeersErrorAction {
  return {
    type: GET_SIMILAR_BEERS_ERROR,
    payload,
  }
}
