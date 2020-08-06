import * as React from 'react';
import { TweetList } from 'containers/TweetListCTR';
import { HomeTweetsExtractor } from 'extractor/HomeTweetsExtractor';
import { TweetSendButton } from 'containers/TweetSendButtonCTR';

type IProps = {};

export const TweetPanel: React.FC<IProps> = (props: IProps) => {
  return (
    <div>
      <HomeTweetsExtractor />
      <TweetList />
      <TweetSendButton />
    </div>
  );
};
