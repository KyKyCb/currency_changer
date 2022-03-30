import ExchangeToEUR from "../components/ExchangeToEUR/ExchangeToEUR";
import ExchangeToPLN from "../components/ExchangeToPLN/ExchangeToPLN";
import ExchangeToUSD from "../components/ExchangeToUSD/ExchangeToUSD";
import { UAH_TO_USD, UAH_TO_EUR, UAH_TO_PLN } from "../constants/routerConstants";


export const publicRoutes = [
    {
        path: UAH_TO_USD,
        Element: ExchangeToUSD,
    },
    {
        path: UAH_TO_EUR,
        Element: ExchangeToEUR,
    },
    {
        path: UAH_TO_PLN,
        Element: ExchangeToPLN,
    },
];