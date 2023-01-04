import {
  BeerByBrewedAction,
  BeersAction,
  SingleBeerAction,
  GET_ALL_BEERS_ERROR,
  GET_ALL_BEERS_REQUEST,
  GET_ALL_BEERS_SUCCESS,
  GET_BEERS_BY_BREWED_ERROR,
  GET_BEERS_BY_BREWED_REQUEST,
  GET_BEERS_BY_BREWED_SUCCESS,
  GET_SINGLE_BEER_ERROR,
  GET_SINGLE_BEER_REQUEST,
  GET_SINGLE_BEER_SUCCESS,
  GET_SIMILAR_BEERS_REQUEST,
  GET_SIMILAR_BEERS_SUCCESS,
  GET_SIMILAR_BEERS_ERROR,
  SimilarBeersAction,
} from './actionTypes'

export interface BeersState {
  allBeers: any
  isGetAllBeersSuccess: boolean
  isGetAllBeersError: boolean
  getAllBeersErrorMessage: string
  beer: object
  isGetSingleBeerSuccess: boolean
  isGetSingleBeerError: boolean
  getSingleBeerErrorMessage: string
  filteredByBrewedData: any
  isGetFilteredByBrewedSuccess: boolean
  isGetFilteredByBrewedError: boolean
  getFilteredByBrewedErrorMessage: string
  similarBeers: any
  isGetSimilarBeersSuccess: boolean
  isGetSimilarBeersError: boolean
  getSimilarBeersErrorMessage: string
}

const initialState: BeersState = {
  allBeers: [],
  isGetAllBeersSuccess: false,
  isGetAllBeersError: false,
  getAllBeersErrorMessage: '',
  beer: {},
  isGetSingleBeerSuccess: false,
  isGetSingleBeerError: false,
  getSingleBeerErrorMessage: '',
  filteredByBrewedData: [],
  isGetFilteredByBrewedSuccess: false,
  isGetFilteredByBrewedError: false,
  getFilteredByBrewedErrorMessage: '',
  similarBeers: [],
  isGetSimilarBeersSuccess: false,
  isGetSimilarBeersError: false,
  getSimilarBeersErrorMessage: '',
}

export default function beersReducer(
  state: BeersState = initialState,
  action: BeersAction | SingleBeerAction | BeerByBrewedAction | SimilarBeersAction,
): BeersState {
  switch (action.type) {
    case GET_ALL_BEERS_REQUEST:
      return {
        ...state,
        allBeers: [],
        isGetAllBeersSuccess: false,
        isGetAllBeersError: false,
        getAllBeersErrorMessage: '',
      }
    case GET_ALL_BEERS_SUCCESS:
      return {
        ...state,
        allBeers: action.payload,
        isGetAllBeersSuccess: true,
      }
    case GET_ALL_BEERS_ERROR:
      return {
        ...state,
        isGetAllBeersError: true,
        getAllBeersErrorMessage: action.payload.message,
      }
    case GET_SINGLE_BEER_REQUEST:
      return {
        ...state,
        beer: {},
        isGetSingleBeerSuccess: false,
        isGetSingleBeerError: false,
        getSingleBeerErrorMessage: '',
      }
    case GET_SINGLE_BEER_SUCCESS:
      return {
        ...state,
        beer: action.payload,
        isGetSingleBeerSuccess: true,
      }
    case GET_SINGLE_BEER_ERROR:
      return {
        ...state,
        isGetSingleBeerError: true,
        getSingleBeerErrorMessage: action.payload.message,
      }
    case GET_BEERS_BY_BREWED_REQUEST:
      return {
        ...state,
        filteredByBrewedData: [],
        isGetFilteredByBrewedSuccess: false,
        isGetFilteredByBrewedError: false,
        getFilteredByBrewedErrorMessage: '',
      }
    case GET_BEERS_BY_BREWED_SUCCESS:
      return {
        ...state,
        filteredByBrewedData: action.payload,
        isGetFilteredByBrewedSuccess: true,
      }
    case GET_BEERS_BY_BREWED_ERROR:
      return {
        ...state,
        isGetFilteredByBrewedError: true,
        getFilteredByBrewedErrorMessage: action.payload.message,
      }
    case GET_SIMILAR_BEERS_REQUEST:
      return {
        ...state,
        similarBeers: [],
        isGetSimilarBeersSuccess: false,
        isGetSimilarBeersError: false,
        getSimilarBeersErrorMessage: '',
      }
    case GET_SIMILAR_BEERS_SUCCESS:
      return {
        ...state,
        similarBeers: action.payload,
        isGetSimilarBeersSuccess: true,
      }
    case GET_SIMILAR_BEERS_ERROR:
      return {
        ...state,
        isGetSimilarBeersError: true,
        getSimilarBeersErrorMessage: action.payload.message,
      }

    default: {
      return state
    }
  }
}
