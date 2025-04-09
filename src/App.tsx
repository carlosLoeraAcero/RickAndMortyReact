import { BrowserRouter } from "react-router"
import { HomeRouter } from "./routers/HomeRouter"

function App() {

  return (
    <BrowserRouter>
      <HomeRouter />
    </BrowserRouter>
  )
}

export default App
