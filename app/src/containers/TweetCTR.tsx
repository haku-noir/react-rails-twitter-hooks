import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useDispatch } from 'react-redux';
import { Tweet as TweetComp } from 'components/Tweet';
import { findTweetById, findUserById } from 'reducers/entitiesReducer';
import { tweetsActions } from 'actions/tweetsActions';
import { push } from 'connected-react-router';
import { usersActions } from 'actions/usersActions';

type IProps = {
  tweetId: number
};

export const Tweet: React.FC<IProps> = (props: IProps) => {
  const { tweetId } = props;

  const dispatch = useDispatch<Dispatch<Action>>();

  const tweet = findTweetById(tweetId);
  const user = findUserById(tweet.user_id);

  const showDetails = () => {
    dispatch(tweetsActions.updateDetails(tweetId));
    dispatch(push('/details'));
  };

  const showUserDetails = () => {
    dispatch(usersActions.updateDetails(user.id));
    dispatch(push('/users/details'));
  };

  const _props = {
    tweet,
    user,
    clickCard: showDetails,
    clickUser: showUserDetails
  }

  return <TweetComp {..._props}/>;
};
