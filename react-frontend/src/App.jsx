import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
// import Shop from './Pages/Shop';
import ProductDetail from './Pages/ProductDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
