import actionCreatorFactory from 'typescript-fsa';
import { EntitiesState } from 'reducers/entitiesReducer';

const actionCreator = actionCreatorFactory();

export const entitiesActions = {
  updateTweets: actionCreator<EntitiesState["tweets"]>('UPDATE_TWEETS'),
  updateUsers: actionCreator<EntitiesState["users"]>('UPDATE_USERS'),
};
