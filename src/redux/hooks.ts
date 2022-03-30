import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { IState } from "./reducers/exchangeReducer";
import { AppDispatch } from "./store";


export interface RootState {
    exchange: IState
}


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();