import {
  createStore as reduxCreateStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router';
import { History } from 'history';
import logger from 'redux-logger';
import { EntitiesState, entitiesReducer } from 'reducers/entitiesReducer';
import { TweetsAPIState, tweetsAPIReducer } from 'reducers/tweetsAPIReducer';
import { TweetsState, tweetsReducer } from 'reducers/tweetsReducer';
import { UsersAPIState, usersAPIReducer } from 'reducers/usersAPIReducer';
import { UsersState, usersReducer } from 'reducers/usersReducer';

export type RootState = {
  router: RouterState,
  entities: EntitiesState,
  tweets: TweetsState,
  users: UsersState,
  tweetsAPI: TweetsAPIState,
  usersAPI: UsersAPIState
};

export const createStore = (history: History) => {
  const rootReducer = combineReducers<RootState>({
    router: connectRouter(history),
    entities: entitiesReducer,
    tweets: tweetsReducer,
    users: usersReducer,
    tweetsAPI: tweetsAPIReducer,
    usersAPI: usersAPIReducer
  });

  return reduxCreateStore(
    rootReducer,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        logger,
      ),
    ),
  );
}
