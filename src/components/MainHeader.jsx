import React, {Component, PropTypes} from 'react'
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
import classNames from 'classnames';
import message from '../data/message.js';
import ModalLogin from './ModalLogin';
import ModalRegister from './ModalRegister';


const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 170,
  },
  header:
  {
  	height: "-webkit-fill-available",
  },
  margin: {
    margin: theme.spacing.unit,
  },
   bigAvatar: {
    margin: 10,
    width: 90,
    height: 90,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

class MainHeader extends Component
{

	constructor(...props)
	{
		super(...props)
	}

	ShowModal = () =>
	{
		document.getElementById('myModal').style.display = "block";
		document.getElementById('myModalRegister').style.display = "none";
	}

	ShowModalRegister = () =>
	{
		document.getElementById('myModal').style.display = "none";
		document.getElementById('myModalRegister').style.display = "block";
	}

	render()
	{
		let messageData = Math.floor(Math.random()*message.message.length+0);
	const { classes } = this.props;
		return( 
			<div className={'bgcolor1 box-shadow headermovil ' + classes.root}>
				<Grid container>
					<Grid container item xs={12} sm={4} md={4} lg={4} className={classes.header} justify="center" alignItems="center">
						<Avatar alt="Remy Sharp" src="/img/logo.png" className={classes.bigAvatar} />
					</Grid>
					<Grid  container item xs={12} sm={4} md={4}  lg={4} className={classes.header} justify="center" alignItems="center">
						<Typography className="fontIndie">
						"{message.message[messageData].title}".
						</Typography>
						<Typography className="fontIndie">
						{message.message[messageData].author}.
						</Typography>
					</Grid>
					<Grid  container item xs={12} sm={4} md={4} lg={4} className={classes.header} justify="center" alignItems="center">
						<Button variant="contained" size="small" color="primary" className={classes.margin} onClick={this.ShowModal}>
				         <Typography className="fontIndie colorwhite fontSize15"> iniciar sesion </Typography>
				          <SvgIcon  className={classNames(classes.leftIcon, classes.iconSmall)}>
	                        <path d="M5,21A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5M6,13H14.5L11,16.5L12.42,17.92L18.34,12L12.42,6.08L11,7.5L14.5,11H6V13Z" />
	                     </SvgIcon>
				        </Button>
				        <Typography className="fontIndie">o    <a  onClick={this.ShowModalRegister}>   Registrate</a></Typography>
					</Grid>
				</Grid>
				<div>
				<ModalLogin/>
				<ModalRegister/>
				</div>
			</div>
		)
	}

}
export default withStyles(styles)(MainHeader);