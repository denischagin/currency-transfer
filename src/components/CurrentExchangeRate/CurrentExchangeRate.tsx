import { Box, LinearProgress, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { CurrencyService } from "../../services/CurrencyService";
import { CurrenciesEnum } from "../../models/enum/CurrenciesEnum";
import { CurrencyCard } from "../СurrencyCard/СurrencyCard";
import btcIcon from "../../assets/svg/btc-icon.svg";
import eurIcon from "../../assets/svg/eur-icon.svg";
import usdIcon from "../../assets/svg/usd-icon.svg";

const calcCurrencyByRub = (currency: number | undefined): number =>
  currency ? 1 / currency : 0;

export const CurrentExchangeRate = () => {
  const { data, isLoading } = useQuery({
    queryFn: () =>
      CurrencyService.getPrise(
        [CurrenciesEnum.RUB],
        [
          CurrenciesEnum.EUR,
          CurrenciesEnum.BTC,
          CurrenciesEnum.USD,
          CurrenciesEnum.RUB,
        ]
      ),
    queryKey: ["currency"],
  });

  if (isLoading) return <LinearProgress />;

  const EUR = calcCurrencyByRub(data?.EUR).toFixed(3);
  const BTC = calcCurrencyByRub(data?.BTC).toFixed(3);
  const USD = calcCurrencyByRub(data?.USD).toFixed(3);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "25px 70px 50px 70px",
        background: "#04231C",
        borderRadius: "48px",
      }}
      >
      <Typography variant="h2" fontWeight="bold" color="white">Текущий курс</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: '30px'
        }}
      >
        <CurrencyCard
          imageSource={eurIcon}
          prise={EUR}
          imageAlt="EUR"
          backgroundColor="#052F38"
        />

        <CurrencyCard
          imageSource={usdIcon}
          prise={USD}
          imageAlt="USD"
          backgroundColor="#05382C"
        />

        <CurrencyCard
          imageSource={btcIcon}
          prise={BTC}
          imageAlt="BTC"
          backgroundColor="#05380A"
        />
      </Box>
    </Box>
  );
};
