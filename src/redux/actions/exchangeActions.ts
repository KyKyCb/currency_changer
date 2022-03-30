import { RootState } from "./../store";
import {
    CURRENCY_LOADING,
    SET_ERROR,
    SET_EXCHANGE_TO_EUR,
    SET_EXCHANGE_TO_PLN,
    SET_EXCHANGE_TO_USD,
} from "../constants/exchangeConstants";
import { IAction, IExchangeCurrencyState } from "../reducers/exchangeReducer";
import { ThunkAction } from "redux-thunk";
import API from "../../api/mainAPI";

export const setCurrencyLoadingAction = (
    isLoading: IAction["setLoading"]
): IAction => {
    return {
        type: CURRENCY_LOADING,
        setLoading: isLoading,
    };
};

export const setExchangeUSDAction = (payload: IAction["payload"]): IAction => {
    return {
        type: SET_EXCHANGE_TO_USD,
        payload: payload,
    };
};
export const setExchangeEURAction = (payload: IAction["payload"]): IAction => {
    return {
        type: SET_EXCHANGE_TO_EUR,
        payload: payload,
    };
};
export const setExchangePLNAction = (payload: IAction["payload"]): IAction => {
    return {
        type: SET_EXCHANGE_TO_PLN,
        payload: payload,
    };
};

export const setErrorAction = (error: IAction["error"]): IAction => {
    return {
        type: SET_ERROR,
        error: error,
    };
};
type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    IAction
>;
export const asyncSetExchangeAction = (): AppThunk => {
    return async (dispatch) => {
        dispatch(setCurrencyLoadingAction(true));
        try {
            const resultUsd = await API.getExchangeUsd();
            if (resultUsd?.data?.success) {
                const body: IExchangeCurrencyState = {
                    from: resultUsd.data.query.from,
                    to: resultUsd.data.query.to,
                    result: resultUsd.data.result,
                    amount: resultUsd.data.query.amount,
                }
                dispatch(setExchangeUSDAction(body))
            } else {
                dispatch(
                    setErrorAction(
                        "Whoops, something went wrong. Please, try again later"
                    )
                );
                console.error(resultUsd?.data)
                return;
            }
            const resultEur = await API.getExchangeEur();
            if (resultEur?.data?.success) {
                const body: IExchangeCurrencyState = {
                    from: resultEur.data.query.from,
                    to: resultEur.data.query.to,
                    result: resultEur.data.result,
                    amount: resultEur.data.query.amount,
                }
                dispatch(setExchangeEURAction(body))
                
            } else {
                dispatch(
                    setErrorAction(
                        "Whoops, something went wrong. Please, try again later"
                    )
                );
                console.error(resultEur?.data)
                return;
            }
            const resultPln = await API.getExchangePln();
            if (resultPln?.data?.success) {
                const body: IExchangeCurrencyState = {
                    from: resultPln.data.query.from,
                    to: resultPln.data.query.to,
                    result: resultPln.data.result,
                    amount: resultPln.data.query.amount,
                }
                dispatch(setExchangePLNAction(body))
                
            } else {
                dispatch(
                    setErrorAction(
                        "Whoops, something went wrong. Please, try again later"
                    )
                );
                console.error(resultPln?.data)
                return;
            }
            dispatch(setCurrencyLoadingAction(false));
        } catch (error) {
            dispatch(
                setErrorAction(
                    "Whoops, something went wrong. Please, try again later"
                )
            );
            console.error(error)
        }
    };
};
