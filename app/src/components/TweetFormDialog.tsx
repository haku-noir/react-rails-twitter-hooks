import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

type IProps = {
  open: boolean,
  setOpen: (value: React.SetStateAction<boolean>) => void,
  send: (newContent: string) => void,
};

export const TweetFormDialog: React.FC<IProps> = (props: IProps) => {
  const {open, setOpen, send} = props;
  const [text, updateText] = React.useState('');

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Send tweet</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Tweet"
          fullWidth
          onChange={event => updateText(String(event.target.value))}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            send(text);
            handleClose();
          }}
          color="primary"
        >
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
};
