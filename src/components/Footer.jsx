import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
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

function Footer(props)
{
	const { classes } = props;
	return( 
		<div className='bgcolor4 footer'>
			<Grid container>
				<Grid container item xs={12} sm={12} md={12} lg={12} className="footer" justify="center" alignItems="center">
					<Typography variant="subheading" color="textPrimary" className="fontIndie" component="h2"  align="center">
			              <p className="copy-text">BVDeveloper © 2018. all right reserved.</p>
		            </Typography>
				</Grid>
			</Grid>
		</div>
	)

}
export default withStyles(styles)(Footer);