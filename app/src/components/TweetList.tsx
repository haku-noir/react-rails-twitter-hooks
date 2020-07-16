import * as React from 'react';
import { EntitiesState } from 'reducers/entitiesReducer';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

type IProps = {
  tweets: EntitiesState["tweets"]
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }),
);

export const TweetList: React.FC<IProps> = (props: IProps) => {
  const { tweets } = props;
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {tweets.map(tweet => (
        <ListItem key={tweet.id} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Anonymous" src="" />
          </ListItemAvatar>
          <ListItemText
            primary={tweet.content}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Anonymous
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};
