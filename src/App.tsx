import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer.tsx";
import { Header } from "./components/Header/Header.tsx";
import { Home } from "./pages/Home/Home.tsx";

const App = () => {
  return (
    <div className="grid grid-rows-[120px_1fr_30px]">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
