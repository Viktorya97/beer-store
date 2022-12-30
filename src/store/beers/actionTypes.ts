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
  payload: { page: number; per_page: number }
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
  payload: { id: number }
}

export const GET_BEERS_BY_BREWED_REQUEST = 'GET_BEERS_BY_BREWED_REQUEST'
export interface GetBeersByBrewedRequestAction {
  type: typeof GET_BEERS_BY_BREWED_REQUEST
  payload: { brewedType: string; date: string }
}

export const GET_BEERS_BY_BREWED_SUCCESS = 'GET_BEERS_BY_BREWED_SUCCESS'
export interface GetBeersByBrewedSuccessAction {
  type: typeof GET_BEERS_BY_BREWED_SUCCESS
  payload: { brewedType: string; date: string }
}

export const GET_BEERS_BY_BREWED_ERROR = 'GET_BEERS_BY_BREWED_ERROR'
export interface GetBeersByBrewedErrorAction {
  type: typeof GET_BEERS_BY_BREWED_ERROR
  payload: { brewedType: string; date: string }
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
