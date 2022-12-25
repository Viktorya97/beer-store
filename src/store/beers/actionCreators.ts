import {
    GET_ALL_BEERS_ERROR,
    GET_ALL_BEERS_REQUEST,
    GET_ALL_BEERS_SUCCESS,
    GET_SINGLE_BEER_ERROR,
    GET_SINGLE_BEER_REQUEST,
    GET_SINGLE_BEER_SUCCESS,
    GetAllBeersErrorAction,
    GetAllBeersRequestAction,
    GetAllBeersSuccessAction,
    GetSingleBeerRequestAction,
    GetSingleBeerSuccessAction,
    GetSingleBeerErrorAction,
} from "./actionTypes";

export function getAllBeersRequest(payload: { page: number, per_page: number }): GetAllBeersRequestAction {
    return {
        type: GET_ALL_BEERS_REQUEST,
        payload,
    };
}

export function getAllBeersSuccess(payload: { page: number, per_page: number }): GetAllBeersSuccessAction {
    return {
        type: GET_ALL_BEERS_SUCCESS,
        payload,
    };
}

export function getAllBeersError(payload: { page: number, per_page: number }): GetAllBeersErrorAction {
    return {
        type: GET_ALL_BEERS_ERROR,
        payload,
    };
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