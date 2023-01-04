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

export function getAllBeersRequest(payload: AllBeersParams): GetAllBeersRequestAction {
  return {
    type: GET_ALL_BEERS_REQUEST,
    payload,
  }
}

export function getAllBeersSuccess(payload: AllBeersParams): GetAllBeersSuccessAction {
  return {
    type: GET_ALL_BEERS_SUCCESS,
    payload,
  }
}

export function getAllBeersError(payload: {
  page: number
  per_page: number
  message: string
}): GetAllBeersErrorAction {
  return {
    type: GET_ALL_BEERS_ERROR,
    payload,
  }
}

export function getSingleBeerRequest(payload: SingleBeerParams): GetSingleBeerRequestAction {
  return {
    type: GET_SINGLE_BEER_REQUEST,
    payload,
  }
}

export function getSingleBeerSuccess(payload: SingleBeerParams): GetSingleBeerSuccessAction {
  return {
    type: GET_SINGLE_BEER_SUCCESS,
    payload,
  }
}

export function getSingleBeerError(payload: {
  id: number
  message: string
}): GetSingleBeerErrorAction {
  return {
    type: GET_SINGLE_BEER_ERROR,
    payload,
  }
}

export function getBeersByBrewedRequest(
  payload: BeersByBrewedParams,
): GetBeersByBrewedRequestAction {
  return {
    type: GET_BEERS_BY_BREWED_REQUEST,
    payload,
  }
}

export function getBeersByBrewedSuccess(
  payload: BeersByBrewedParams,
): GetBeersByBrewedSuccessAction {
  return {
    type: GET_BEERS_BY_BREWED_SUCCESS,
    payload,
  }
}

export function getBeersByBrewedError(payload: {
  brewed_before: Date | string
  brewed_after: Date | string
  message: string
}): GetBeersByBrewedErrorAction {
  return {
    type: GET_BEERS_BY_BREWED_ERROR,
    payload,
  }
}

export function getSimilarBeersRequest(payload: {
  abv_lt: number
  ibu_lt: number
  abv_gt: number
  ibu_gt: number
}): GetSimilarBeersRequestAction {
  return {
    type: GET_SIMILAR_BEERS_REQUEST,
    payload,
  }
}

export function getSimilarBeersSuccess(payload: SimilarBeersParams): GetSimilarBeersSuccessAction {
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
  message: string
}): GetSimilarBeersErrorAction {
  return {
    type: GET_SIMILAR_BEERS_ERROR,
    payload,
  }
}
