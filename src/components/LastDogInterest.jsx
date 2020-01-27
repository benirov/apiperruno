import React, { Component }from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Apiservices from '../Apiservices/Home.js';
import ToastContainer from './Toast';
import {withRouter} from 'react-router';
import 'react-toastify/dist/ReactToastify.css'; 



const styles = theme => ({
  root: {
    flexGrow: 1,
  },
   bigAvatar: {
    margin: 10,
    width: 300,
    height: 300,
  },
   card: {
    maxWidth: 345,
  },
  media: {
    objectFit: 'cover',
  },
  container: 
  {
    padding: '15px!important',
  },
  cardcontainer: 
  {
    padding: 'inherit!important',
  }, 
});

class  LastDogInterest extends Component
{

  constructor(...props)
  {
    super(...props)
    this.state = {ListDog : []};
    this.viewDetail = this.viewDetail.bind(this)  
  }

  viewDetail(id)
  {
    console.log(id);
    this.props.history.push({
          pathname: '/user/'+id});
  }

  componentWillMount()
  {
    Apiservices.getToken().then((responseToken) =>  
    {
      console.log(responseToken[1].message)
      if(responseToken[0] == 200)
      {
        if(Object.keys(responseToken[1]).length === 0)
        {
          ToastContainer.notify("Error solicitando token de seguridad, por favor intente iniciar sesion nuevamente", 2);
        }
        else
        {
           Apiservices.getSessionInfo().then((res) =>
            {
              if(res[0] == 200)
                {
                  if(Object.keys(res[1]).length === 0)
                  {
                      this.setState({ListDog: []})
                  }
                  else
                  {
                    let breed = [];
                    res[1].message.forEach((element)=> 
                    {
                      breed.push(element.raza);
                    });
                    Apiservices.getLasDog(breed, responseToken[1].message).then((res) => 
                    {
                      if(res[0] == 200)
                      {
                        this.setState({ListDog: res[1].dog})
                        console.log(res[1].dog);
                      }
                      else if(res[0] == 404)
                      {
                      this.setState({ListDog: []})
                        ToastContainer.notify("debe iniciar sesion", 2);
                      }
                      else if(res[0] == 403)
                      {
                        ToastContainer.notify("No tiene autorizacion, intente iniciar sesion nuevamente", 2);
                      }
                      else
                      {
                        
                        ToastContainer.notify("debe iniciar sesion", 2);
                      }
                    })
                  }

                }
                else if(res[0] == 500)
                {
                  ToastContainer.notify("error de aplicación", 2);

                }
            })
        }
      }
      else if(responseToken[0] == 304)
      {
      this.setState({ListDog: []})
        ToastContainer.notify("debe iniciar sesion", 2);
      }
      else if(responseToken[0] == 404)
      {
        ToastContainer.notify("debe iniciar sesion", 2);
      }
      else
      {
        
        ToastContainer.notify("debe iniciar sesion", 2);
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

    let renderElement = <Grid container item xs={12} sm={6}  md={6} lg={6}  justify="center" alignItems="center">
                            <Typography gutterBottom variant="h5" component="h2" className="fontIndie">
                                No Exite mascotas con sus estandares de intereses
                            </Typography>
                        </Grid>;
    if (this.state.ListDog != [] || this.state.ListDog.length != 0)
    {
      this.state.ListDog.map((row, i) => 
      {
        if(row)
        {
            renderElement = <Grid container item xs={12} sm={6}  md={6} lg={6}  justify="center" alignItems="center">
                                <Card className={classes.card}>
                                  <CardActionArea>
                                    <CardMedia
                                      component="img"
                                      alt="Contemplative Reptile"
                                      className={classes.media}
                                      height="140"
                                      image="/img/love5.gif"
                                      title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                      <Typography gutterBottom variant="h5" component="h2" className="fontIndie">
                                        {row.nameDog}
                                      </Typography>
                                      <strong className="fontIndie">{row.titleDog}</strong>
                                      <Typography component="p" className="fontIndie">
                                        {row.description}
                                      </Typography>
                                    </CardContent>
                                  </CardActionArea>
                                  <CardActions>
                                    <Button size="small" color="primary" className="fontIndie" onClick={() => this.viewDetail(row._id)}>
                                      Mas Info
                                    </Button>
                                    <Button size="small" color="primary" className="fontIndie">
                                      Adoptar
                                    </Button>
                                  </CardActions>
                                </Card>
                              </Grid>
        }
      })

    }
    return( 
    <div className={classes.container}>
    <Grid container>
      <Grid container item xs={12} sm={6}  md={6} lg={6}  justify="center" alignItems="center">
          <Typography gutterBottom variant="h5" component="h2" className="fontIndie  borderOutser">
            Ultimas mascotas agregadas segun tus gustos
          </Typography>
      </Grid>
    </Grid>
    <Grid container className={classes.cardcontainer}>
       { renderElement}
      <ToastContainer/>
      </Grid>
    </div>
  )
  }
}
// export default withStyles(styles)(LastDogInterest);
export default withStyles(styles)(withRouter(LastDogInterest));