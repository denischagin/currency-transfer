import { AttachMoney, CurrencyBitcoin, Euro } from "@mui/icons-material"
import { LinearProgress, List, ListItem, Typography } from "@mui/material"
import { useQuery } from "react-query"
import { CurrencyService } from "../../services/CurrencyService"
import { CurrenciesEnum } from "../../models/enum/CurrenciesEnum"

const calcCurrencyByRub = (currency: number | undefined): number => 
    currency ? 1 / currency : 0 

export const CurrentExchangeRate = () => {
    const {data, isLoading} = useQuery({
        queryFn: () => CurrencyService.getPrise(
            [CurrenciesEnum.RUB], [
                CurrenciesEnum.EUR, 
                CurrenciesEnum.BTC,
                CurrenciesEnum.USD,
                CurrenciesEnum.RUB,
            ],
        ),
        queryKey: ['currency']
    })

    if (isLoading) return <LinearProgress />

    const EUR = calcCurrencyByRub(data?.EUR).toFixed(3)
    const BTC = calcCurrencyByRub(data?.BTC).toFixed(3)
    const USD = calcCurrencyByRub(data?.USD).toFixed(3)

    return (
        <>
            <List>
                <ListItem>
                    <Euro fontSize="large"/>
                    <Typography>{EUR} RUB</Typography>
                </ListItem>

                <ListItem>
                    <AttachMoney fontSize="large"/>
                    <Typography>{USD} RUB</Typography>
                </ListItem>

                <ListItem>
                    <CurrencyBitcoin fontSize="large"/>
                    <Typography>{BTC} RUB</Typography>
                </ListItem>
            </List>
            
        </>
    )
}
