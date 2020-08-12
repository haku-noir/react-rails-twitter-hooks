import * as React from 'react';
import { FetchTweetsAPI } from 'api/FetchTweetsAPI';
import { SendTweetAPI } from 'api/SendTweetAPI';
import { UpdateTweetAPI } from 'api/UpdateTweetAPI';
import { DeleteTweetAPI } from 'api/DeleteTweetAPI';

export const TweetsAPIList: React.FC<{}> = () => {
  return (
    <div>
      <FetchTweetsAPI />
      <SendTweetAPI />
      <UpdateTweetAPI />
      <DeleteTweetAPI />
    </div>
  );
};
