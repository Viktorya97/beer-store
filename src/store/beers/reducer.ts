import {
    BeersAction,
    GET_ALL_BEERS_ERROR,
    GET_ALL_BEERS_REQUEST,
    GET_ALL_BEERS_SUCCESS,
    GET_SINGLE_BEER_ERROR,
    GET_SINGLE_BEER_REQUEST,
    GET_SINGLE_BEER_SUCCESS, SingleBeerAction
} from "./actionTypes";

interface beerItem {
    abv: number,
    attenuation_level: number,
    boil_volume: object,
    brewers_tips: string,
    contributed_by: string,
    description: string,
    ebc: number,
    first_brewed: string,
    food_pairing: [],
    ibu: number,
    id: number,
    image_url: string,
    ingredients: object,
    method: object,
    name: string,
    ph: number,
    srm: number,
    tagline: string,
    target_fg: number,
    target_og: number,
    volume: object,
}

export interface BeersState {
    allBeers: any,
    isGetAllBeersSuccess: boolean,
    isGetAllBeersError: boolean,
    getAllBeersErrorMessage: string,
    beer: object,
    isGetSingleBeerSuccess: boolean,
    isGetSingleBeerError: boolean,
    getSingleBeerErrorMessage: string,
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
};

export default function beersReducer(
    state: BeersState = initialState,
    action: BeersAction | SingleBeerAction  // TODO ?
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
                getAllBeersErrorMessage: '' // TODO get errorMessage
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
                getSingleBeerErrorMessage: '' // TODO get errorMessage
            }
        default: {
            return state;
        }
    }
}
