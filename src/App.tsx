import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { StreamingServices } from "./pages/StreamingServices";
import { About } from "./pages/About";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Playstation } from "./pages/Playstation";
import { Xbox } from "./pages/Xbox";
import { AllProducts } from "./pages/AllProducts";

function App() {
  return (
    <ShoppingCartProvider>
      <div className="container mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store/allProducts" element={<AllProducts />} />
          <Route path="/store/streamingService" element={<StreamingServices />} />
          <Route path="/store/playstation" element={<Playstation />} />
          <Route path="/store/xbox" element={<Xbox />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
