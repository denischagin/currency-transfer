import { Box, Typography } from "@mui/material";
import { FC } from "react";

interface CurrencyCardProps {
  imageSource: string;
  prise: string;
  imageAlt?: string;
  backgroundColor?: string;
}

export const CurrencyCard: FC<CurrencyCardProps> = (props) => {
  const {
    imageSource,
    prise,
    imageAlt = "Валюта",
    backgroundColor = "white",
  } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 0 33px 0",
        backgroundColor: { backgroundColor },
        borderRadius: "50px",
        width: "233px",
      }}
    >
      <Box
        component="img"
        sx={{
          width: "100px",
          height: "100px",
          marginBottom: "50px",
        }}
        alt={imageAlt}
        src={imageSource}
      />
      <Typography
        sx={{
          fontSize: "30px",
          lineHeight: "36px",
          textAlign: "center",
          color: "white",
        }}
      >
        {prise}{" "}
        <Typography
          component="span"
          sx={{
            fontWeight: "bold",
            color: "#C0C0C0",
            fontSize: "30px",
          }}
        >
          RUB
        </Typography>
      </Typography>
    </Box>
  );
};
