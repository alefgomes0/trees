import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer.tsx";
import { Header } from "./components/Header/Header.tsx";
import { Home } from "./pages/Home/Home.tsx";
import { News1 } from "./pages/News/News1.tsx";
import { News3 } from "./pages/News/News3.tsx";
import { News2 } from "./pages/News/News2.tsx";
import { Donate } from "./pages/Donate/Donate.tsx";

const App = () => {
  return (
    <div className="grid grid-rows-[120px_1fr_30px] bg-[#e3ede6] font-IBMSansMedium overflow-hidden">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/1" element={<News1 />} />
          <Route path="/news/2" element={<News2 />} />
          <Route path="/news/3" element={<News3 />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
