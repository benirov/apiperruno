import React, {Component, PropTypes} from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

 class HeaderApp extends Component{

  constructor(...props)
	{
		super(...props)
	}

  openNav() {
		document.getElementById("mySidenav").style.width = "250px";
    }

    render()
    {
      const { classes } = this.props;
      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.openNav}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                Home
              </Typography>
              <Grid container>
            
              <Grid container item xs={12} sm={12} md={12} lg={12} className={classes.header} justify="flex-end" alignItems="center">
                <Avatar alt="Remy Sharp" src="/img/logo.png" className={classes.bigAvatar} />
              </Grid>
            </Grid>
            </Toolbar>
          </AppBar>
        </div>
      );
    }
}

// HeaderApp.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(HeaderApp);