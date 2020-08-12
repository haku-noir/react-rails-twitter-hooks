import actionCreatorFactory from 'typescript-fsa';
import { UsersState } from 'reducers/usersReducer';

const actionCreator = actionCreatorFactory();

export const usersActions = {
  updateList: actionCreator<UsersState["list"]>('UPDATE_USERS_LIST'),
};
