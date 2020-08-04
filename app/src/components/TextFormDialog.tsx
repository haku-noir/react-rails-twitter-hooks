import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export type TextFormDialogParams = {
  title: string;
  label: string;
  buttonName: string;
  defaultValue: string;
};

type IProps = {
  open: boolean,
  setOpen: (value: React.SetStateAction<boolean>) => void,
  handleClick: (text: string) => void,
  params: TextFormDialogParams
};

export const TextFormDialog: React.FC<IProps> = (props: IProps) => {
  const {open, setOpen, handleClick, params} = props;
  const [text, updateText] = React.useState('');

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{params.title}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label={params.label}
          defaultValue={params.defaultValue}
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
            handleClick(text);
            handleClose();
          }}
          color="primary"
        >
          {params.buttonName}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
