import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import { TextFormDialogParams, TextFormDialog } from './TextFormDialog';

type IProps = {
  send: (newContent: string) => void,
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }),
);

export const TweetSendButton: React.FC<IProps> = (props: IProps) => {
  const { send } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const params: TextFormDialogParams = {
    title: 'Send Tweet',
    label: 'Tweet',
    buttonName: 'Send',
    defaultValue: '',
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const _props = {
    open,
    setOpen,
    handleClick: send,
    params,
  }

  return (
    <div>
      <Fab color="primary" aria-label="send" className={classes.fab} onClick={handleClickOpen}>
        <SendIcon />
      </Fab>
      <TextFormDialog {..._props} />
    </div>
  );
};
