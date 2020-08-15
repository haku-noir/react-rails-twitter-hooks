import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { usersAPIActions } from 'actions/usersAPIActions';
import { UserState } from 'reducers/entitiesReducer';

export type UsersAPIState = {
  fetching: boolean,
  login: UserState
};

const initialState: UsersAPIState = {
  fetching: true,
  login: {
    id: 0,
    name: '',
    password: ''
  }
};

export const usersAPIReducer = reducerWithInitialState(initialState)
  .case(usersAPIActions.updateUsers, (state: UsersAPIState) => ({
    ...state,
    fetching: true,
  }))
  .case(usersAPIActions.updateUsersDone, (state: UsersAPIState) => ({
    ...state,
    fetching: false,
  }))
