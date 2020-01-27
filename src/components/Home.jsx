import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SideNav from './SideNav';
import HeaderApp from './HeaderApp';
import LastDogInterest from './LastDogInterest';
import AppServices from '../appServices/Util.js';
import ToastContainer from './Toast';
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';  

const styles = theme => ({
  root: {
    flexGrow: 1, 
  },
   bigAvatar: {
    margin: 10,
    width: 300,
    height: 300,
  },
});

class Home  extends Component
{
	constructor(...props)
	{
	   super(...props)
	}
  	componentWillMount()
	{
		AppServices.verifyEmail().then((response) =>  
    	{
    		console.log(response[1].message)
    		if(response[0] == 200)
    		{
    			if(response[1].message === false)
    			{
    				ToastContainer.notify("debe verificar su email para recibir noticias", 3);
    			}
    		}

	    }).catch((error) => 
	      {
	        console.log(error);
	        ToastContainer.notify("Error de aplicación", 2);
	      })
	}
	render()
	{
		const { classes } = this.props;
		return( 
		<div className=''>
			<SideNav/>
			<HeaderApp/>
			<LastDogInterest/>
			<ToastContainer/>
		</div>
	)
	}

}
export default withStyles(styles)(Home);