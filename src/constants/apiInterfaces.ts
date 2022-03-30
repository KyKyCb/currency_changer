export interface IExchangeResponse {
    success: boolean;
    query: {
        from: CurrencyList;
        to: CurrencyList;
        amount: number;
    };
    result: number;
    info?: {
        rate?: number;
    };
    motd?: {
        msg?: string;
        url?: string;
    };
    historical?: boolean;
    date?: string;
}

export enum CurrencyList {
    UAH = "UAH",
    USD = "USD",
    EUR = "EUR",
    PLN = "PLN",
}
