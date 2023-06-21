import { Container } from "@mui/material"
import { CurrentExchangeRate } from "./components/CurrentExchangeRate/CurrentExchangeRate"

const App = () => {
  return (
    <div>
      <Container>
        <CurrentExchangeRate />
      </Container>
    </div>
  )
}

export default App