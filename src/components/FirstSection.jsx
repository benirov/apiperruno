import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

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

function FirstSection(props)
{
	const { classes } = props;
	return( 
		<div className='bgcolor2 vhfirstsection'>
			<Grid container>
				<Grid container item xs={12} sm={6}  md={6} lg={6}  justify="center" alignItems="center">
					<img alt="Remy Sharp" src="/img/love6.gif" className={classes.bigAvatar} />
				</Grid>
				<Grid container item xs={12} sm={6}  md={6} lg={6}  justify="flex-start" alignItems="center" className="justifycenter">
					<Typography className="fontIndie width60">
					Firs dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat
					</Typography>
				</Grid>
			</Grid>
		</div>
	)

}
export default withStyles(styles)(FirstSection);