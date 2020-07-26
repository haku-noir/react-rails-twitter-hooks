import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Tweet } from 'containers/TweetCTR';

type IProps = {
  tweetIds: number[]
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

export const TweetList: React.FC<IProps> = (props: IProps) => {
  const { tweetIds } = props;
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {tweetIds.map((tweetId) => (
        <ListItem key={tweetId} alignItems="flex-start">
          <Tweet tweetId={tweetId} />
        </ListItem>
      ))}
    </List>
  );
};
