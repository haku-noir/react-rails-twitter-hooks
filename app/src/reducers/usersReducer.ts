import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { usersActions } from 'actions/usersActions';

export type UsersState = {
  index: number[],
  login: number,
  details: {
    id: number,
    tweetIds: number[]
  }
};

const initialState: UsersState = {
  index: [],
  login: 0,
  details: {
    id: 0,
    tweetIds: []
  }
};

export const usersReducer = reducerWithInitialState(initialState)
  .case(usersActions.updateIndex, (state: UsersState, payload: number[]): UsersState => ({
    ...state,
    index: payload,
  }))
  .case(usersActions.updateLogin, (state: UsersState, payload: number): UsersState => ({
    ...state,
    login: payload,
  }))
  .case(usersActions.setLogout, (state: UsersState): UsersState => ({
    ...state,
    login: 0,
  }))
  .case(usersActions.updateDetails, (state: UsersState, payload: UsersState["details"]): UsersState => ({
    ...state,
    details: payload,
  }))
