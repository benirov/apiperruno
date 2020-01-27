import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import Avatar from '@material-ui/core/Avatar';
import SvgIcon from '@material-ui/core/SvgIcon';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const styles = theme => ({
  iconSvg: {
    margin: 'auto',
  },
  sideNavHeig: 
  {
  	position: 'fixed',
  },
});

class SideNavMenu extends Component
{

	constructor(...props)
	{
		super(...props)
		this.closeNav = this.closeNav.bind(this)
		
	}

	closeNav = () =>
	{
		
		// console.log("aqui");
		document.getElementById("mySidenav").style.width = "0px";
	}

	render()
	{
		const { classes } = this.props;
		return(

			<div id="mySidenav" className="sidenav">
				<div className="closebtn" onClick={ this.closeNav } ><span>&times;</span></div>
				
				<a href="#" className="fontIndie">Home</a>
				<a href="#" className="fontIndie">Services</a>
				<a href="#" className="fontIndie">Clients</a>
				<a href="user" className="fontIndie">User Settings</a>
			</div>

				// <SideNav className={classes.sideNavHeig}
				//     onSelect={(selected) => {
				//         // Add your code here
				//     }}
				// >
				//     <SideNav.Toggle />
				//     <SideNav.Nav defaultSelected="home">
				//     	<NavItem>
				//             <NavIcon>
				//             <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
				//             <Avatar alt="Remy Sharp" src="/img/logo.png" />
				//             </NavIcon>
				//         </NavItem>
				//         <NavItem eventKey="home">
				//             <NavIcon className={classes.iconSvg}>
				//             <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
				//             <SvgIcon style={{ fontSize: '1.75em' }}>
				// 			    <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
				// 		 	</SvgIcon>
				//             </NavIcon>
				//             <NavText>
				//                 Home
				//             </NavText>
				//         </NavItem>
				//         <NavItem eventKey="user">
				//             <NavIcon>
				//                 <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
				//                 <SvgIcon style={{ fontSize: '1.75em' }}>
				// 				    <path d="M2,3H22C23.05,3 24,3.95 24,5V19C24,20.05 23.05,21 22,21H2C0.95,21 0,20.05 0,19V5C0,3.95 0.95,3 2,3M14,6V7H22V6H14M14,8V9H21.5L22,9V8H14M14,10V11H21V10H14M8,13.91C6,13.91 2,15 2,17V18H14V17C14,15 10,13.91 8,13.91M8,6A3,3 0 0,0 5,9A3,3 0 0,0 8,12A3,3 0 0,0 11,9A3,3 0 0,0 8,6Z" />
				// 			 	</SvgIcon>
				//             </NavIcon>
				//             <NavText>
				//                 User Settings
				//             </NavText>
				//         </NavItem>
				//     </SideNav.Nav>
				// </SideNav>
			)
		}
		
	}

export default withStyles(styles)(SideNavMenu);
	