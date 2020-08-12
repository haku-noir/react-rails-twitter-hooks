import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const usersActions = {
  sampleAction: actionCreator<any>('SAMPLE'),
};
