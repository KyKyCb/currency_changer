import { CurrencyList } from "../constants/apiInterfaces";
import $api from "./index";

class API {
    static async getExchangeUsd() {
        try {
            const queryRoute =
                "/convert?from=" + CurrencyList.UAH + "&to=" + CurrencyList.USD;
            const result = await $api.get(queryRoute);

            return result;
        } catch (error) {
            console.error("API get usd error", error);
        }
    }

    static async getExchangeEur() {
        try {
            const queryRoute =
                "/convert?from=" + CurrencyList.UAH + "&to=" + CurrencyList.EUR;
            const result = $api.get(queryRoute);

            return result;
        } catch (error) {
            console.error("API get eur error", error);
        }
    }

    static async getExchangePln() {
        try {
            const queryRoute =
                "/convert?from=" + CurrencyList.UAH + "&to=" + CurrencyList.PLN;
            const result = $api.get(queryRoute);

            return result;
        } catch (error) {
            console.error("API get pln error", error);
        }
    }
}

export default API;
