import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { TweetUpdateButton as TweetUpdateButtonComp } from 'components/TweetUpdateButton';
import { RootState } from 'store';
import { EntitiesState, findTweetById, TweetState } from 'reducers/entitiesReducer';
import { tweetsAPIActions } from 'actions/tweetsAPIActions';

type IProps = {};

export const TweetUpdateButton: React.FC<IProps> = (props: IProps) => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const tweetId = useSelector<RootState, number>(
    state => state.tweets.details
  );
  const tweets = useSelector<RootState, EntitiesState["tweets"]>(
    state => state.entities.tweets
  );
  const tweet = findTweetById(tweets, tweetId);

  const _props = {
    tweet,
    update: (updatedTweet: TweetState) => {
      dispatch(tweetsAPIActions.updateTweet(updatedTweet));
    }
  }

  return <TweetUpdateButtonComp {..._props}/>;
};
