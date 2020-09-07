import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { MenuAppBar as MenuAppBarComp } from 'components/MenuAppBar';
import { RootState } from 'store';

type IProps = {};

export const MenuAppBar: React.FC<IProps> = (props: IProps) => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const data = useSelector<RootState, RootState>(
    state => state
  );

  const _props = {}

  return <MenuAppBarComp {..._props}/>;
};
