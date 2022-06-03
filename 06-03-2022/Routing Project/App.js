import { Route, Switch, Redirect } from 'react-router-dom';

import AllQuotes from './components/Pages/AllQuotes';
import QuoteDetail from './components/Pages/QuotesDetails';
import Quote from './components/Pages/Quote';
import Comments from './components/comments/Comments';
import Layout from './components/layout/Layout';
import MainNavigation from './components/layout/MainNavigation';
import NotFound from './components/Pages/NotFound';
import NoQuotesFound from './components/quotes/NoQuotesFound';

    
function App() {
  return (
    <>
<MainNavigation/>
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
        {/* <Route path='/qoutes/comments'>

          <Comments />
        </Route> */}
        <Route path='/new-quote'>
          <Quote />
        </Route>

        <Route path='*' exact>
        <NotFound />
        </Route>
      </Switch>
      </>
    
  );
}

export default App;


