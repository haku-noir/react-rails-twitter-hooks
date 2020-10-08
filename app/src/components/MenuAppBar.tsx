import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import { UserState } from 'reducers/entitiesReducer';

type IProps = {
  loggedinUser: UserState,
  clickHome: () => void,
  clickUsers: () => void,
  clickLogin: () => void,
  clickLogout: () => void
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export const MenuAppBar: React.FC<IProps> = (props: IProps) => {
  const classes = useStyles();
  const {
    loggedinUser,
    clickHome,
    clickUsers,
    clickLogin,
    clickLogout
  } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={clickHome}
            color="inherit"
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            TweetApp
          </Typography>
          <Button color="inherit" onClick={() => clickUsers()}>Users</Button>
          {loggedinUser ? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem disabled color="default">
                  <Typography variant="h6" color="primary">
                    <b>{loggedinUser.name}</b>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={() => {clickLogout(); handleClose();}}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <Button color="inherit" onClick={() => clickLogin()}>Login</Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
