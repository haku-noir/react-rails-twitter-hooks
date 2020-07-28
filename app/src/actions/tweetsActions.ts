import actionCreatorFactory from 'typescript-fsa';
import { TweetsState } from 'reducers/tweetsReducer';

const actionCreator = actionCreatorFactory();

export const tweetsActions = {
  updateHome: actionCreator<TweetsState["home"]>('UPDATE_HOME'),
  updateDetails: actionCreator<number>('UPDATE_DETAILS'),
};
