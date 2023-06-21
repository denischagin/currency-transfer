import { Box, Container } from "@mui/material";
import { CurrentExchangeRate } from "./components/CurrentExchangeRate/CurrentExchangeRate";

const App = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#103C50",
        minHeight: "100vh",
      }}
    >
      <Container
        sx={{
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            maxWidth: "1100px",
            paddingLeft: "85px",
            paddingRight: "85px",
          }}
        >
          <CurrentExchangeRate />
        </Box>
      </Container>
    </Box>
  );
};

export default App;
