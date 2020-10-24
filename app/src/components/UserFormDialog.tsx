import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { UserState } from 'reducers/entitiesReducer';

type IProps = {
  user: UserState,
  open: boolean,
  handleClose: () => void,
  handleClick: (name: string, image: File) => void
};

export const UserFormDialog: React.FC<IProps> = (props: IProps) => {
  const { user, open, handleClose, handleClick } = props;

  const [name, updateName] = React.useState(user.name);
  const [image, updateImage] = React.useState(null);

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Edit User</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          defaultValue={user.name}
          fullWidth
          onChange={(event) => updateName(String(event.target.value))}
        />
        <Button variant="contained" component="label">
          Upload Avater
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={(event) => updateImage(event.target.files.item(0))}
          />
        </Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={() => { handleClick(name, image); handleClose(); }} color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};
