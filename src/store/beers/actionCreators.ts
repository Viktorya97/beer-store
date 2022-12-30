import {
  GET_ALL_BEERS_ERROR,
  GET_ALL_BEERS_REQUEST,
  GET_ALL_BEERS_SUCCESS,
  GET_BEERS_BY_BREWED_ERROR,
  GET_BEERS_BY_BREWED_REQUEST,
  GET_BEERS_BY_BREWED_SUCCESS,
  GET_SINGLE_BEER_ERROR,
  GET_SINGLE_BEER_REQUEST,
  GET_SINGLE_BEER_SUCCESS,
  GetAllBeersErrorAction,
  GetAllBeersRequestAction,
  GetAllBeersSuccessAction,
  GetBeersByBrewedErrorAction,
  GetBeersByBrewedRequestAction,
  GetBeersByBrewedSuccessAction,
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
  brewedType: string
  date: string
}): GetBeersByBrewedRequestAction {
  return {
    type: GET_BEERS_BY_BREWED_REQUEST,
    payload,
  }
}

export function getBeersByBrewedSuccess(payload: {
  brewedType: string
  date: string
}): GetBeersByBrewedSuccessAction {
  return {
    type: GET_BEERS_BY_BREWED_SUCCESS,
    payload,
  }
}

export function getBeersByBrewedError(payload: {
  brewedType: string
  date: string
}): GetBeersByBrewedErrorAction {
  return {
    type: GET_BEERS_BY_BREWED_ERROR,
    payload,
  }
}
