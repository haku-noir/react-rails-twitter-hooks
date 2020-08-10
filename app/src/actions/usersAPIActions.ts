import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const usersAPIActions = {
  sampleAction: actionCreator<any>('SAMPLE'),
};
