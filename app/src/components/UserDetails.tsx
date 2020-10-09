import * as React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { UserState } from 'reducers/entitiesReducer';

type IProps = {
  user: UserState
};

const useStyles = makeStyles(() => createStyles({
  root: {
    width: 500,
  },
}));

export const UserDetails: React.FC<IProps> = (props: IProps) => {
  const { user } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar alt="Anonymous" src="" />
        }
        title={user.name}
      />
    </Card>
  );
};
