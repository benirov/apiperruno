import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import SideNav from './SideNav';
import HeaderApp from './HeaderApp';
import LastDogInterest from './LastDogInterest';
import ApiServicesUser from '../Apiservices/User.js';
import ApiServices from '../Apiservices/Home.js';
import {formValidator} from '../appServices/Util.js';
import ToastContainer from './Toast';
import moment  from 'moment';
import 'moment/locale/es';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';  

const styles = theme => ({
  root: {
    
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width:'100%',
  },
   bigAvatar: {
    
    width: 100,
    height: 100,
    
  },
 
  cardcontainer: 
  {
    padding: 'inherit!important',
    paddingTop: '20px!important',
    position: 'relative',
  },
  paper:
  {
    // paddingBottom: theme.spacing.unit * 2,
    width:'80%',    
  },
  media: {
    objectFit: 'cover',
    width:'30%', 
    borderRadius: '4px!important',
  },
  data:
  {
  	paddingTop: '100px!important',
  },
  containerimg:
  {
  	    padding: '30px!important'
  },
  profile: 
  {
  	height: '20%!important',
  	width: '50%!important',
  	backgroundColor: '#7971ea!important',
  	borderRadius: '4px!important',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  textFieldHidden:
  {
  	display: 'none',
  }, 
  paddingbotton: {
	  margin: '10px',
  }
});

class UserSetting  extends Component
{
	constructor(...props)
	{
	   super(...props)
	   this.state = {UserInfo : [], isLoading: false}
	   this.saveDataUser = this.saveDataUser.bind(this)
	}

	saveDataUser = (e) =>
	{
		// let form = document.forms["formUser"].getElementsByTagName("input");
		formValidator('formUser', function(sResp)
		{
			console.log(sResp)
			if(sResp)
			{
				let data =  
				{ 
					"id": document.getElementById("pk").value,
					"userName": document.getElementById("user").value,
					"email": document.getElementById("email").value,
					"phone": document.getElementById("phone").value,
					"password": document.getElementById("passwordUser").value
				}
				console.log(data)
				ApiServices.getToken().then((responseToken) =>  
				{
					if(responseToken[0] == 200)
    				{
    					if(Object.keys(responseToken[1]).length === 0)
				        {
				        	
				          ToastContainer.notify("Error solicitando token de seguridad, por favor intente iniciar sesion nuevamente", 2);
				          this.setState({UserInfo: [], isLoading: true})
				        }
				        else
				        {
				        	ApiServicesUser.updateUser(data, responseToken[1]).then((responseUser) =>
				        	{
				        		console.log(responseUser)
				        		if(responseUser[0] == 200)
				        		{
				        			console.log(responseUser[1])
				        			ToastContainer.notify("Datos de usuario actualizados correctamente", 1);
				        		}
				        		else
				        		{
				        			ToastContainer.notify("Error al actualizar datos de usuario", 2);	
				        		}
				        	})
				        }
    				}
				}).catch((error) => 
			      {
			      	console.log('error en jsx', error);
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
  	componentWillMount()
	{
		moment.locale('es'); 
	    ApiServices.getToken().then((responseToken) =>  
    	{
    		if(responseToken[0] == 200)
    		{
    			if(Object.keys(responseToken[1]).length === 0)
		        {
		        	
		          ToastContainer.notify("Error solicitando token de seguridad, por favor intente iniciar sesion nuevamente", 2);
		          this.setState({UserInfo: [], isLoading: true})
		        }
		        else
		        {
		        	ApiServices.getId(responseToken[1].message).then((responseId) => 
		        	{
		        		if(responseId[0] == 200 && (responseId[1] != '' || responseId[1] != undefined ))
    					{
    						ApiServicesUser.getInfoUser(responseToken[1].message, responseId[1].message).then((response) => 
				        	{
				        		this.setState({UserInfo: response[1].user, isLoading: true})
				        	})
    					}

		        	})
		        }
    		}

	    }).catch((error) => 
	      {
	      	this.setState({UserInfo: [], isLoading: true})
	        ToastContainer.notify("Error de aplicación", 2);
	      })
	}
	render()
	{
		const { classes } = this.props;
		let renderElement;
		if (!this.state.isLoading) {
	      return <p>Loading ...</p>;
	    }
	    console.log(this.state.UserInfo.length)
	    if(this.state.UserInfo == [] || this.state.UserInfo.length == 0)
	    {
	    	renderElement = <Grid container item xs={12} sm={6}  md={6} lg={6}  justify="center" alignItems="center">
                            <Typography gutterBottom variant="h5" component="h2" className="fontIndie">
                                Información no disponible
                            </Typography>
                        </Grid>;
	    }
        else
        {
        			renderElement = 
        			<Grid container xs={12} sm={12}  md={12} lg={12}  justify="center" alignItems="flex-end">
						<Grid container justify="center" alignItems="flex-end" className={classes.bigAvatar}>
							<Avatar alt="Profile" src="/img/user.jpg"/>
								</Grid>
								<Grid container justify="center" alignItems="flex-end">
									<Typography variant="h3" gutterBottom className="fontIndie ">
										 {this.state.UserInfo.userName}
									</Typography>
								</Grid>
								<Grid container justify="center" alignItems="flex-end">
								<Typography variant="h3" gutterBottom className="fontIndie">
									Te Uniste el  
										{
											moment(this.state.UserInfo.signupDate).format(" DD MMMM   YYYY")
										}
								</Typography>
								</Grid>
								<Grid container justify="center" alignItems="center" className={classes.profile}>
								<Typography variant="h3"  className="fontIndie">
									Editar Perfil
								</Typography>
								</Grid>
								<Grid container item xs={12} sm={12} md={12} lg={12}  justify="center" alignItems="flex-end">
                                    <Grid container item xs={12} sm={12} md={6} lg={6} justify="center" alignItems="center">
                                    <form id="formUser">
										<TextField
							                id="user"
							                className={'require  RegNombre  '+classes.textField}
							                label="Nombre"
							                margin="normal"
							                defaultValue={this.state.UserInfo.userName}
							                
							              />
							              <TextField
							                id="email"
							                className={'require  '+classes.textField}
							                label="email"
							                type="email"
							                margin="normal"
							                name="emailUser"
							                defaultValue={this.state.UserInfo.email}
							              />
							                <TextField
								                id="passwordUser"
								                className={'require  '+ classes.textField}
								                label="contraseña"
								                type="password"
								                margin="normal"
								                defaultValue={this.state.UserInfo.password}
							              />
							              <TextField
							                id="pk"
							                className={'require  '+classes.textFieldHidden}
							                label=""
							                type=""
							                margin="normal"
							                name=""
							                defaultValue={this.state.UserInfo._id}
							              />
							              <TextField
						                id="phone"
						                className={'require  '+classes.textField}
						                label="phone"
						                margin="normal"
						                type="number"
						                defaultValue={this.state.UserInfo.phone}
						              />
						              <Grid container justify="center">
						              <CardMedia
					              			  id="imageprofile"
		                                      component="img"
		                                      alt="Profile"
		                                      className={classes.media}
		                                      height="130"
		                                      image={'/'+this.state.UserInfo.imgProfile}
		                                      title="Image Profile"
		                                    />
		                                    </Grid>
		                                    <Grid container justify="center">                                    
		                                    <TextField
							                id="imgProfile"
							                className={classes.textField}
							                label="imgProfile"
							                margin="normal"
							                type="file"
							              	/>
							              	</Grid>
							              	</form>
					              </Grid>
					            </Grid>
					            <Button variant="contained" size="small" className={classes.paddingbotton} color="primary" onClick={this.saveDataUser}>
						             <Typography className="fontIndie colorwhite fontSize15"> Update</Typography>
					            </Button>
							</Grid>;

        }
		return( 
		<div className=''>
			<SideNav/>
			<HeaderApp/>
			<Grid container className={classes.cardcontainer}>
				<Grid container item xs={12} sm={12}  md={12} lg={12}  justify="center" alignItems="center">
					<Paper className={classes.paper} elevation={3}>
						{renderElement}
			      	</Paper>
	          	</Grid>
          	</Grid>
          	<ToastContainer/>
		</div>
	)
	}

}
export default withStyles(styles)(UserSetting);