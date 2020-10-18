import * as React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { UserState } from 'reducers/entitiesReducer';
import { TweetList } from './TweetList';

type IProps = {
  user: UserState,
  tweetIds: number[]
};

const useStyles = makeStyles(() => createStyles({
  root: {
    width: 500,
  },
}));

export const UserDetails: React.FC<IProps> = (props: IProps) => {
  const { user, tweetIds } = props;
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar alt="Anonymous" src="" />
          }
          title={user.name}
        />
      </Card>
      <Divider />
      <TweetList tweetIds={tweetIds} />
    </div>
  );
};
