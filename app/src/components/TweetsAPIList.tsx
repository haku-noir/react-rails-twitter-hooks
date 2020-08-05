import * as React from 'react';
import { UpdateTweetsAPI } from 'api/UpdateTweetsAPI';
import { SendTweetAPI } from 'api/SendTweetAPI';
import { UpdateTweetAPI } from 'api/UpdateTweetAPI';

export const TweetsAPIList: React.FC<{}> = () => {
  return (
    <div>
      <UpdateTweetsAPI />
      <SendTweetAPI />
      <UpdateTweetAPI />
    </div>
  );
};
