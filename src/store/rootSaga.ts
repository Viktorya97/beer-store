import { all } from "redux-saga/effects";
import BeersSaga from "./beers/saga";

export default function* rootSaga() {
    yield all([BeersSaga()]);
}