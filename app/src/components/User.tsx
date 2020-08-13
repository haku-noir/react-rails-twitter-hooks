import * as React from 'react';
import { UserState } from 'reducers/entitiesReducer';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

type IProps = {
  user: UserState
};

const useStyles = makeStyles(() => createStyles({
  root: {
    width: '100%',
  },
}));

export const User: React.FC<IProps> = (props: IProps) => {
  const { user } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={(
          <Avatar alt="Anonymous" src="" />
        )}
        title={(
          <Typography>
            {user.name}
          </Typography>
        )}
      />
    </Card>
  );
};
