import { Route, Switch, Redirect } from 'react-router-dom';

import AllQuotes from './components/Pages/AllQuotes';
import QuoteDetail from './components/Pages/QuotesDetails';
import Quote from './components/Pages/Quote';
import Comments from './components/comments/Comments';
import Layout from './components/layout/Layout';


function App() {
  return (
<Layout>
    
    <Switch>
      <Route path='/' exact>
        <Redirect to='/quotes' />
      </Route>
      <Route path='/quotes' exact>
        <AllQuotes />
      </Route>
      <Route path='/quotes/:quoteId'>
        <QuoteDetail />
      </Route>
      <Route path='/qoutes/comments'>

      <Comments/>
      </Route>
      <Route path='/new-quote'>
        <Quote />
      </Route>
    </Switch>
    </Layout>
  );
}

export default App;