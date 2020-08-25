import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

type IProps = {
  login: (name: string, password: string) => void;
};

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    width: 500,
  },
  field: {
    width: '100%',
    marginTop: 10,
  }
}),
);

export const UserLoginForm: React.FC<IProps> = (props: IProps) => {
  const { login } = props;
  const [name, updateName] = React.useState('');
  const [password, updatePassword] = React.useState('');
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="Login" />
      <CardContent>
        <TextField
          className={classes.field}
          label="Name"
          variant="outlined"
          onChange={(event) => updateName(String(event.target.value))}
        />
        <TextField
          className={classes.field}
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange={(event) => updatePassword(String(event.target.value))}
        />
      </CardContent>
      <CardActions disableSpacing>
        <Button color="secondary">
          Register
        </Button>
        <div style={{marginLeft: 'auto'}}>
          <Button color="primary" onClick={() => login(name, password)}>
            Login
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};
