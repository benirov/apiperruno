import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThreeSection from './ThreeSection';



const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 370,
  },
  header:
  {
  	height: "-webkit-fill-available",
  },
   bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
});

function InfoPage(props)
{
	const { classes } = props;
	return( 
		<div className={'bgcolor2 poini' + classes.root}>
			<FirstSection />
			<SecondSection />
			<ThreeSection />
		</div>
	)

}
export default withStyles(styles)(InfoPage);