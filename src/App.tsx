import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer.tsx";

import { Header } from "./components/Header/Header.tsx";
import { Home } from "./pages/Home/Home.tsx";
import { ReadMore } from "./components/ReadMore/ReadMore.tsx";

const App = () => {
  return (
    <div className="grid grid-rows-[120px_1fr_40px]">
      <BrowserRouter>
        <Header />
        <ReadMore />
        <Routes>
        </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;