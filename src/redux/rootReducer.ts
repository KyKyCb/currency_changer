import { combineReducers } from "redux"
import exchangeReducer from "./reducers/exchangeReducer"

const rootReducer = combineReducers(
    {
        exchange: exchangeReducer,
    }
)

export default rootReducer