import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer.tsx";
import { News3 } from "./pages/News/News3.tsx";
import { News1 } from "./pages/News/News1.tsx";
import { Header } from "./components/Header/Header.tsx";

const App = () => {
  return (
    <div className="grid grid-rows-[120px_1fr_40px]">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/news/1" element={<News1 />} />
        </Routes>
          <News3 />
          <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;