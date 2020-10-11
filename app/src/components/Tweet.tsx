import * as React from 'react';
import { TweetState, UserState } from 'reducers/entitiesReducer';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

type IProps = {
  tweet: TweetState,
  user: UserState,
  clickCard: () => void,
  clickUser: () => void
};

const useStyles = makeStyles(() => createStyles({
  root: {
    width: '100%',
  },
}));

export const Tweet: React.FC<IProps> = (props: IProps) => {
  const { tweet, user, clickCard, clickUser } = props;
  const classes = useStyles();

  const handleClickUser = (event: React.MouseEvent) => {
    clickUser();
    event.stopPropagation();
  }

  return (
    <Card className={classes.root} onClick={() => clickCard()}>
      <CardHeader
        avatar={(
          <Avatar alt="Anonymous" src="" onClick={handleClickUser} />
        )}
        title={(
          <Typography component="a" onClick={handleClickUser}>
            {user.name}
          </Typography>
        )}
        subheader={(
          <Typography variant="body1" component="p">
            {tweet.content}
          </Typography>
        )}
      />
    </Card>
  );
};
