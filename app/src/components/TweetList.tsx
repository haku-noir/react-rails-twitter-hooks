import * as React from 'react';
import { EntitiesState } from 'reducers/entitiesReducer';

type IProps = {
  tweets: EntitiesState["tweets"]
};

export const TweetList: React.FC<IProps> = (props: IProps) => {
  const { tweets } = props;

  return (
    <div>
      <h1>TweetList</h1>
      <ul>
        {tweets.map(tweet => (
          <p>{tweet.content}</p>
        ))}
      </ul>
    </div>
  );
};
