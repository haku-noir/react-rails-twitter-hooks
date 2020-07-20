import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { History, createBrowserHistory } from 'history';
import { createStore } from 'store';
import { Switch, Route } from 'react-router';
import { TweetList } from 'containers/TweetListCTR';
import { TweetsAPI } from 'api/TweetsAPI';

const history :History = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
       <Switch>
         <Route exact path={'/'} component={TweetList}/>
       </Switch>
    </ConnectedRouter>
    <TweetsAPI />
  </Provider>,
  document.getElementById('root'),
);
