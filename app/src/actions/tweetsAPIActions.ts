import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const tweetsAPIActions = {
  sampleAction: actionCreator<any>('SAMPLE'),
};
