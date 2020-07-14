import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const entitiesActions = {
  sampleAction: actionCreator<any>('SAMPLE'),
};
