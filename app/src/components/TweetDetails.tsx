import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { TweetState } from 'reducers/entitiesReducer';

type IProps = {
  tweet: TweetState
};

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: 500,
  },
}));

export const TweetDetails: React.FC<IProps> = (props: IProps) => {
  const { tweet } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar alt="Anonymous" src="" />
        }
        title="User"
        subheader="Date"
      />
      <CardContent>
        <Typography variant="body1" component="p">
          {tweet.content}
        </Typography>
      </CardContent>
       <CardActions disableSpacing>
         <IconButton aria-label="favorite">
           <FavoriteIcon />
         </IconButton>
         <div style={{marginLeft: 'auto'}}>
           <IconButton aria-label="edit" color="primary">
             <EditIcon />
           </IconButton>
           <IconButton aria-label="delete" color="secondary">
             <DeleteIcon />
           </IconButton>
         </div>
       </CardActions>
    </Card>
  );
};
