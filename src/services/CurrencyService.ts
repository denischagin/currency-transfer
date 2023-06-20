import { IPrises } from "../models/IPrises";
import { CurrenciesEnum } from "../models/enum/CurrenciesEnum";
import { apiCurrency } from "../http/apiСurrency";

export class CurrencyService {
    static getPrise(
        inputCur: CurrenciesEnum[], 
        outputCur: CurrenciesEnum[]
    ) {
        return apiCurrency.get<IPrises>(
            `/price?fsym=${inputCur}&tsyms=${outputCur.join(",")}`
        ).then(res => res.data) 
    }
}