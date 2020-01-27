import React, {Component, PropTypes} from 'react';
import {withRouter} from 'react-router';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import ApiServices from '../Apiservices/Home.js';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ToastContainer from './Toast';
import dogs from '../data/dogs.js';
import ApiServicesUser from '../Apiservices/User.js';
import {formValidator} from '../appServices/Util.js';
import 'react-toastify/dist/ReactToastify.css';
import './modal.css';

const styles = theme => ({
  
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 400,
    maxWidth: 400,
  },
   bigAvatar: {
    margin: 10,
    width: 90,
    height: 90,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
  Button: 
  {
    marginTop: "15px",
  },
});


class ModalLogin extends Component {

  constructor(...props){
        super(...props);
        this.state = {name: []};
    }

    registerModal = event => 
    {
      formValidator('register', function(sResp)
      {
        console.log(sResp)
        if(sResp)
        {
          let data =  
          { 
            // "id": document.getElementById("pk").value,
            "userName": document.getElementById("User").value,
            "email": document.getElementById("Email").value,
            "phone": document.getElementById("Telefono").value,
            "password": document.getElementById("passwor").value
          }
          console.log(data)
          ApiServicesUser.createUser(data).then((responseUser) =>
          {
            console.log(responseUser)
            if(responseUser[0] == 200)
            {
              console.log(responseUser[1])
              ToastContainer.notify("Datos de usuario guardados correctamente, ahora puedes iniciar sesiòn", 1);
            }
            else
            {
              ToastContainer.notify("Error al guardar datos de usuario", 2); 
            }
          }).catch((error) => 
        {
          console.log(error);
          this.setState({UserInfo: [], isLoading: true})
          ToastContainer.notify("Error de aplicación", 2);
        })

          
        }
        else
        {
          ToastContainer.notify("Campos en rojo son requeridos", 2);
        }
      });
    }

    handleChange = event => {
    this.setState({ name: event.target.value });
  };

     handleChangeMultiple = event => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({
      name: value,
    });
  };


  render() {
    const { classes } = this.props;
    return (
      <div id="myModalRegister" className="modal">
      <Grid container>
        <div className="modal-content">
          <div className="modal-title">
          <Grid container item xs={12} sm={12} md={12} lg={12}  justify="center" alignItems="center">
            <Avatar alt="Remy Sharp" src="/img/login.gif" className={classes.bigAvatar} />
          </Grid>
            <Typography className="fontIndie">Registrate</Typography>
          </div>
          <div className="modal-body"> 
            <form id="register" autoComplete="on">
            <Grid container  justify="center" alignItems="center" justify="center">
              <Grid container item xs={12} sm={12} md={12} lg={12} justify="center" alignItems="center">
                <TextField
                  id="Email"
                  className={'require '+classes.textField}
                  label="Correo"
                  margin="normal"
                />
                <TextField
                  id="passwor"
                  className={'require '+classes.textField}
                  label="contraseña"
                  type="password"
                  margin="normal"
                />
                </Grid> 
                <Grid container item xs={12} sm={12} md={12} lg={12} justify="center" alignItems="center">
                <TextField
                  id="User"
                  className={'require  RegNombre  '+classes.textField}
                  label="Nombre de usuario"
                  margin="normal"
                />
                <TextField
                  id="Telefono"
                  className={classes.textField}
                  label="Telefono"
                  type="number"
                  margin="normal"
                />
                </Grid>
                <Grid container item xs={12} sm={12} md={12} lg={12} justify="center" alignItems="center">
                <FormControl className={classes.formControl}>
                <InputLabel htmlFor="select-multiple-chip">Intereses</InputLabel>
                <Select
                    multiple
                    value={this.state.name}
                    onChange={this.handleChange}
                    input={<Input id="Intereses" />}
                     renderValue={selected => (
                      <div className={classes.chips}>
                        {selected.map((value, i) => (
                          <Chip key={i} label={value} className={classes.chip} />
                        ))}
                      </div>
                    )}
                    
                  >
                  {dogs.dogs.map((name, i) => (
                    <MenuItem key={i} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                  </Select>
                  </FormControl>
                
                </Grid>
                <Grid container item xs={12} sm={12} md={12} lg={12} justify="center" alignItems="center">
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={1}
                      />
                    }
                    label="recibir correos de la aplicaciòn"
                  />
                </Grid>
              </Grid> 
            <Grid container item xs={12} sm={12} md={12} lg={12} className={classes.Button} justify="center" alignItems="center">
            <Button variant="contained" size="small" color="primary"  onClick={this.registerModal}>
             <Typography className="fontIndie colorwhite fontSize15"> Registrate </Typography>
            </Button>
            </Grid>
            
            </form>
          </div>
          <div className="modal-footer">
          <Typography className="fontIndie  fontSize15"> Ya estas registrado? <a href="http://localhost:3000/">ingresa Aqui</a> </Typography>
            
        </div>
        <ToastContainer/>
        </div>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(ModalLogin));