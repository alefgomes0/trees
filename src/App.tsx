import { BrowserRouter, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer.tsx";
import { News3 } from "./pages/News/News3.tsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
        </Routes>
          <News3 />
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;