import { Route, Switch } from 'react-router-dom';

import Welcome from './components/Pages/Welcome';
import Products from './components/Pages/Products';
import ProductDetail from './components/Product-details';
import MainHeader from './components/Pages/Header';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path='/welcome'>
            <Welcome />
          </Route>
          <Route path='/products/:productId'>
            <ProductDetail />
          </Route>
          <Route path='/products'>
            <Products />
          </Route>

        </Switch>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book