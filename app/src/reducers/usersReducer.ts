import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { usersActions } from 'actions/usersActions';
import { UserState } from './entitiesReducer';

export type UsersState = {
  index: number[],
  login: UserState
};

const initialState: UsersState = {
  index: [],
  login: {
    id: 0,
    name: '',
    password: ''
  }
};

export const usersReducer = reducerWithInitialState(initialState)
  .case(usersActions.updateIndex, (state: UsersState, payload: number[]): UsersState => ({
    ...state,
    index: payload,
  }))
  .case(usersActions.updateLogin, (state: UsersState, payload: UserState): UsersState => ({
    ...state,
    login: payload,
  }))
