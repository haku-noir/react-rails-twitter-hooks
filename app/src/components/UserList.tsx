import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { User } from 'containers/UserCTR';
import { UsersIndexExtractor } from 'extractor/UsersIndexExtractor';

type IProps = {
  userIds: number[]
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

export const UserList: React.FC<IProps> = (props: IProps) => {
  const { userIds } = props;
  const classes = useStyles();

  return (
    <div>
      <UsersIndexExtractor />
      <List className={classes.root}>
        {userIds.map((userId) => (
          <ListItem key={userId} alignItems="flex-start">
            <User userId={userId} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
