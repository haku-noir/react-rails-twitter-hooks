import * as React from 'react';
import { TweetList } from 'containers/TweetListCTR';
import { TweetsHomeExtractor } from 'extractor/TweetsHomeExtractor';
import { TweetSendButton } from 'containers/TweetSendButtonCTR';

type IProps = {};

export const TweetPanel: React.FC<IProps> = (props: IProps) => {
  return (
    <div>
      <TweetsHomeExtractor />
      <TweetList />
      <TweetSendButton />
    </div>
  );
};
