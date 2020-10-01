import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { History, createBrowserHistory } from 'history';
import { createStore } from 'store';
import { Switch, Route } from 'react-router';
import { TweetPanel } from 'components/TweetPanel';
import { TweetDetails } from 'containers/TweetDetailsCTR';
import { TweetsAPIList } from 'components/TweetsAPIList';
import { UserList } from 'containers/UserListCTR';
import { UserLoginForm } from 'containers/UserLoginFormCTR';
import { FetchUsersAPI } from 'api/FetchUsersAPI';
import { LoginUserAPI } from 'api/LoginUserAPI';
import { MenuAppBar } from 'containers/MenuAppBarCTR';
import { UserRegisterForm } from 'containers/UserRegisterFormCTR';

const history :History = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <TweetsAPIList />
      <FetchUsersAPI />
      <LoginUserAPI />
      <MenuAppBar />
      <Switch>
        <Route exact path={'/'} component={TweetPanel}/>
        <Route exact path={'/details'} component={TweetDetails}/>
        <Route exact path={'/users'} component={UserList}/>
        <Route exact path={'/login'} component={UserLoginForm}/>
        <Route exact path={'/register'} component={UserRegisterForm}/>
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
