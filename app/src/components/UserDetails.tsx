import * as React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Divider from '@material-ui/core/Divider';
import { UserState } from 'reducers/entitiesReducer';
import { UserFormDialog } from 'containers/UserFormDialogCTR';
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
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar alt="Anonymous" src="" />
          }
          title={user.name}
        />
        <CardActions disableSpacing>
          <IconButton aria-label="edit" color="primary" onClick={() => setOpen(true)}>
            <EditIcon />
          </IconButton>
          <UserFormDialog open={open} setOpen={setOpen} />
        </CardActions>
      </Card>
      <Divider />
      <TweetList tweetIds={tweetIds} />
    </div>
  );
};
