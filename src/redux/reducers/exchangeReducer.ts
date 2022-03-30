import { Reducer } from "react";
import { CurrencyList } from "../../constants/apiInterfaces";
import {
    CURRENCY_LOADING,
    SET_ERROR,
    SET_EXCHANGE_TO_EUR,
    SET_EXCHANGE_TO_PLN,
    SET_EXCHANGE_TO_USD,
} from "../constants/exchangeConstants";

export interface IExchangeCurrencyState {
    from?: CurrencyList;
    to?: CurrencyList;
    amount?: number;
    result?: number;
}

export interface IState {
    uahToUsd: IExchangeCurrencyState;
    uahToEur: IExchangeCurrencyState;
    uahToPln: IExchangeCurrencyState;

    isLoading: boolean;
    error: string | null;
}

const initialState: IState = {
    uahToUsd: {},
    uahToEur: {},
    uahToPln: {},

    isLoading: false,
    error: null,
};

export interface IAction {
    type: string;
    payload?: IExchangeCurrencyState;
    setLoading?: boolean;
    error?: string | null;
}

const exchangeReducer: Reducer<IState, IAction> = (
    state: IState = initialState,
    action
): IState => {
    switch (action.type) {
        case CURRENCY_LOADING:
            return { ...state, isLoading: !!action.setLoading };
        case SET_EXCHANGE_TO_USD:
            return { ...state, uahToUsd: { ...action.payload } };
        case SET_EXCHANGE_TO_EUR:
            return { ...state, uahToEur: { ...action.payload } };
        case SET_EXCHANGE_TO_PLN:
            return { ...state, uahToPln: { ...action.payload } };
        case SET_ERROR:
            return {...state, error: action.error ?? '', isLoading: false}
        default:
            return state;
    }
};

export default exchangeReducer;
