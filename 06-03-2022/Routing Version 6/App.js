import { Route, Routes } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Product';
import MainHeader from './component/MainHeader';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path='/' exact></Route>
          <Route path='/welcome/*' element={<Welcome />} >
          </Route>


          <Route path='/products' exact element={<Products />} />


          <Route path="/products/:productId" element={<ProductDetails />} />
         
        </Routes>
      </main>
    </div>
  );
}

export default App;