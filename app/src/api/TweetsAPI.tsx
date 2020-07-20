import * as React from 'react';
import { Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';

export const TweetsAPI: React.FC<void> = () => {
  const dispatch = useDispatch<Action>();

  const state = useSelector<RootState, RootState>(state => state);

  React.useEffect(() => {}, [state]);

  return null;
};
