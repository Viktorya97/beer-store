import {
  BeerByBrewedAction,
  BeersAction,
  GET_ALL_BEERS_ERROR,
  GET_ALL_BEERS_REQUEST,
  GET_ALL_BEERS_SUCCESS,
  GET_BEERS_BY_BREWED_ERROR,
  GET_BEERS_BY_BREWED_REQUEST,
  GET_BEERS_BY_BREWED_SUCCESS,
  GET_SINGLE_BEER_ERROR,
  GET_SINGLE_BEER_REQUEST,
  GET_SINGLE_BEER_SUCCESS,
  SingleBeerAction,
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
  isGetFFilteredByBrewedSuccess: boolean
  isGetFFilteredByBrewedError: boolean
  getFFilteredByBrewedErrorMessage: string
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
  isGetFFilteredByBrewedSuccess: false,
  isGetFFilteredByBrewedError: false,
  getFFilteredByBrewedErrorMessage: '',
}

export default function beersReducer(
  state: BeersState = initialState,
  action: BeersAction | SingleBeerAction | BeerByBrewedAction, // TODO ?
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
        getAllBeersErrorMessage: '', // TODO get errorMessage
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
        getSingleBeerErrorMessage: '', // TODO get errorMessage
      }
    case GET_BEERS_BY_BREWED_REQUEST:
      return {
        ...state,
        filteredByBrewedData: [],
        isGetFFilteredByBrewedSuccess: false,
        isGetFFilteredByBrewedError: false,
        getFFilteredByBrewedErrorMessage: '',
      }
    case GET_BEERS_BY_BREWED_SUCCESS:
      return {
        ...state,
        filteredByBrewedData: action.payload,
        isGetFFilteredByBrewedSuccess: true,
      }
    case GET_BEERS_BY_BREWED_ERROR:
      return {
        ...state,
        isGetFFilteredByBrewedError: true,
        getFFilteredByBrewedErrorMessage: '',
      }

    default: {
      return state
    }
  }
}
