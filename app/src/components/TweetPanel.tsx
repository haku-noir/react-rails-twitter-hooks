import * as React from 'react';
import { TweetList } from 'containers/TweetListCTR';
import { UpdateTweetsAPI } from 'api/UpdateTweetsAPI';
import { SendTweetAPI } from 'api/SendTweetAPI';
import { HomeTweetsExtractor } from 'extractor/HomeTweetsExtractor';
import { TweetSendButton } from 'containers/TweetSendButtonCTR';

type IProps = {};

export const TweetPanel: React.FC<IProps> = (props: IProps) => {
  return (
    <div>
      <UpdateTweetsAPI />
      <SendTweetAPI />
      <HomeTweetsExtractor />

      <TweetList />
      <TweetSendButton />
    </div>
  );
};
