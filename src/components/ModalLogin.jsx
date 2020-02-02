import React, {Component, PropTypes} from 'react';
import {withRouter} from 'react-router';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Apiservices from '../Apiservices/login.js';
import ToastContainer from './Toast';
import 'react-toastify/dist/ReactToastify.css';
import './modal.css';

const styles = theme => ({
  
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
   bigAvatar: {
    margin: 10,
    width: 90,
    height: 90,
  },
  Button: 
  {
    marginTop: "15px",
  },
});


class ModalLogin extends Component {

  constructor(...props){
        super(...props);
    }


  LoginModal = (e) => {
    let user = document.getElementById('Emailuser').value;
    let password = document.getElementById("passwordUser").value;
    // console.log(user);
    // console.log(password);
    Apiservices.getUser(user, password).then((res) => 
      {
        if(res.status == 200)
        {
          console.log("200");
          ToastContainer.notify(1);
          this.props.history.push({
          pathname: '/home'
        })
        }
        else if(res.status == 404)
        {
          console.log("404");
          ToastContainer.notify(2);
        }
        else
        {
          console.log("3");
          ToastContainer.notify(3);
        }
      }).catch((error) => 
        {
          console.log(error);
          console.log("4");
          ToastContainer.notify(4);
        })

  };

  render() {
    const { classes } = this.props;
    return (
      <div id="myModal" className="modal">
      <Grid container>
        <div className="modal-content">
          <div className="modal-title">
          <Grid container item xs={12} sm={12} md={12} lg={12}  justify="center" alignItems="center">
            <Avatar alt="Remy Sharp" src="/img/login.gif" className={classes.bigAvatar} />
          </Grid>
            <Typography className="fontIndie">Inicia Sesion</Typography>
          </div>
          <div className="modal-body"> 
            <form id="login" autoComplete="on">
            <Grid container item xs={12} sm={12} md={12} lg={12}  justify="center" alignItems="center">
              <TextField
                id="Emailuser"
                className={classes.textField}
                label="Correo"
                margin="normal"
              />
              </Grid>
              <Grid container item xs={12} sm={12} md={12} lg={12}  justify="center" alignItems="center">
                <TextField
                id="passwordUser"
                className={classes.textField}
                label="contraseña"
                type="password"
                margin="normal"
              />
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12} className={classes.Button} justify="center" alignItems="flex-end">
            <Button variant="contained" size="small" color="primary"  onClick={this.LoginModal}>
             <Typography className="fontIndie colorwhite fontSize15"> Iniciar sesion </Typography>
            </Button>
            </Grid>
            
            </form>
          </div>
          <div className="modal-footer">
          <Typography className="fontIndie  fontSize15"> Aun no tienes cuenta? <a href="http://localhost:3000/">registrate Aqui</a> </Typography>
            
        </div>
        <ToastContainer/>
        </div>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(ModalLogin));