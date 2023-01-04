export const GET_ALL_BEERS_REQUEST = 'GET_ALL_BEERS_REQUEST'
export interface GetAllBeersRequestAction {
  type: typeof GET_ALL_BEERS_REQUEST
  payload: { page: number; per_page: number }
}

export const GET_ALL_BEERS_SUCCESS = 'GET_ALL_BEERS_SUCCESS'
export interface GetAllBeersSuccessAction {
  type: typeof GET_ALL_BEERS_SUCCESS
  payload: { page: number; per_page: number }
}

export const GET_ALL_BEERS_ERROR = 'GET_ALL_BEERS_ERROR'
export interface GetAllBeersErrorAction {
  type: typeof GET_ALL_BEERS_ERROR
  payload: { page: number; per_page: number; message: string }
}

export const GET_SINGLE_BEER_REQUEST = 'GET_SINGLE_BEER_REQUEST'
export interface GetSingleBeerRequestAction {
  type: typeof GET_SINGLE_BEER_REQUEST
  payload: { id: number }
}

export const GET_SINGLE_BEER_SUCCESS = 'GET_SINGLE_BEER_SUCCESS'
export interface GetSingleBeerSuccessAction {
  type: typeof GET_SINGLE_BEER_SUCCESS
  payload: { id: number }
}

export const GET_SINGLE_BEER_ERROR = 'GET_SINGLE_BEER_ERROR'
export interface GetSingleBeerErrorAction {
  type: typeof GET_SINGLE_BEER_ERROR
  payload: { id: number; message: string }
}

export const GET_BEERS_BY_BREWED_REQUEST = 'GET_BEERS_BY_BREWED_REQUEST'
export interface GetBeersByBrewedRequestAction {
  type: typeof GET_BEERS_BY_BREWED_REQUEST
  payload: { brewed_before: Date | string; brewed_after: Date | string }
}

export const GET_BEERS_BY_BREWED_SUCCESS = 'GET_BEERS_BY_BREWED_SUCCESS'
export interface GetBeersByBrewedSuccessAction {
  type: typeof GET_BEERS_BY_BREWED_SUCCESS
  payload: { brewed_before: Date | string; brewed_after: Date | string }
}

export const GET_BEERS_BY_BREWED_ERROR = 'GET_BEERS_BY_BREWED_ERROR'
export interface GetBeersByBrewedErrorAction {
  type: typeof GET_BEERS_BY_BREWED_ERROR
  payload: { brewed_before: Date | string; brewed_after: Date | string; message: string }
}

export const GET_SIMILAR_BEERS_REQUEST = 'GET_SIMILAR_BEERS_REQUEST'
export interface GetSimilarBeersRequestAction {
  type: typeof GET_SIMILAR_BEERS_REQUEST
  payload: {
    abv_gt: number
    abv_lt: number
    ibu_gt: number
    ibu_lt: number
  }
}

export const GET_SIMILAR_BEERS_SUCCESS = 'GET_SIMILAR_BEERS_SUCCESS'
export interface GetSimilarBeersSuccessAction {
  type: typeof GET_SIMILAR_BEERS_SUCCESS
  payload: {
    abv_gt: number
    abv_lt: number
    ibu_gt: number
    ibu_lt: number
  }
}

export const GET_SIMILAR_BEERS_ERROR = 'GET_SIMILAR_BEERS_ERROR'
export interface GetSimilarBeersErrorAction {
  type: typeof GET_SIMILAR_BEERS_ERROR
  payload: {
    abv_gt: number
    abv_lt: number
    ibu_gt: number
    ibu_lt: number
    message: string
  }
}

export type BeersAction =
  | GetAllBeersRequestAction
  | GetAllBeersSuccessAction
  | GetAllBeersErrorAction

export type SingleBeerAction =
  | GetSingleBeerRequestAction
  | GetSingleBeerSuccessAction
  | GetSingleBeerErrorAction

export type BeerByBrewedAction =
  | GetBeersByBrewedRequestAction
  | GetBeersByBrewedSuccessAction
  | GetBeersByBrewedErrorAction

export type SimilarBeersAction =
  | GetSimilarBeersRequestAction
  | GetSimilarBeersSuccessAction
  | GetSimilarBeersErrorAction
