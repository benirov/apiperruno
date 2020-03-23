import React, { Fragment } from 'react';
import '../Styles/CardInfoDogs.scss'; 
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import ChatIcon from '@material-ui/icons/Chat';
// import PetsIcon from '@material-ui/icons/Pets';
// import HomeIcon from '@material-ui/icons/Home';
// import PageviewIcon from '@material-ui/icons/Pageview'; 
import { MDBCard, MDBCardBody, MDBBtn, MDBIcon, MDBRow, MDBCol,MDBCardImage,  MDBCardTitle, MDBCardText, MDBCardHeader, MDBContainer } from "mdbreact";
class CardInfoDogs extends React.Component { 

    render(){
        return(
            <div>
              <MDBContainer>
                <div className="row mt-5">
                  <div className="col-12">
                      <h3 className="h3 color2 text-center"><strong>Hola, Beniro</strong></h3>
                      <p className="fontIndie h3 color2 text-center">Bienvenido de vuelta</p> 
                  </div>
                </div>
                </MDBContainer>
                    <div class="row mt-3">
                        <div class="growing-search">
                          <div class="input">
                            <input type="text" name="search"/>
                          </div><div class="submit">
                            <button type="submit" name="go_search">
                              <span class="fa fa-search"></span>
                            </button>
                          </div>
                        </div>
                    </div>
                    <MDBContainer className="mt-5">
                          <div className="row">
                            <span className="h5 color2"><strong>Last Recent</strong></span> 
                          </div>
                          
                    </MDBContainer>
                    <MDBContainer className="mt-3">
                        <div className="card">
                            <div className="image">
                              <img src="/img/sofia.jpg"/>
                            </div>
                            <div className="text">
                                <span className="badge badge-pill badge-primary">Pug</span>&nbsp;
                                <span className="badge badge-pill badge-primary">12 Meses</span>&nbsp;
                                <span className="badge badge-pill badge-primary">Todas las vacunas</span>&nbsp;
                                <div className="row">
                                  <span className="h5 mt-2 color2"><strong>Sofia Milagros</strong></span> 
                                </div>
                                <div className="row color2">
                                  <label>¡ Tu Nueva Macota !</label>
                                </div>
                            </div>
                          </div>

                          <div className="card">
                            <div className="image">
                              <img src="/img/sofia.jpg"/>
                            </div>
                            <div className="text">
                                <span className="badge badge-pill badge-primary">Pug</span>&nbsp;
                                <span className="badge badge-pill badge-primary">12 Meses</span>&nbsp;
                                <span className="badge badge-pill badge-primary">Todas las vacunas</span>&nbsp;
                                <div className="row">
                                  <span className="h5 mt-2 color2"><strong>Sofia Milagros</strong></span> 
                                </div>
                                <div className="row color2">
                                  <label>¡ Tu Nueva Macota !</label>
                                </div>
                            </div>
                          </div>

                          <div className="card">
                            <div className="image">
                              <img src="/img/sofia.jpg"/>
                            </div>
                            <div className="text">
                                <span className="badge badge-pill badge-primary">Pug</span>&nbsp;
                                <span className="badge badge-pill badge-primary">12 Meses</span>&nbsp;
                                <span className="badge badge-pill badge-primary">Todas las vacunas</span>&nbsp;
                                <div className="row">
                                  <span className="h5 mt-2 color2"><strong>Sofia Milagros</strong></span> 
                                </div>
                                <div className="row color2">
                                  <label>¡ Tu Nueva Macota !</label>
                                </div>
                            </div>
                          </div>

                          <div className="card">
                            <div className="image">
                              <img src="/img/sofia.jpg"/>
                            </div>
                            <div className="text">
                                <span className="badge badge-pill badge-primary">Pug</span>&nbsp;
                                <span className="badge badge-pill badge-primary">12 Meses</span>&nbsp;
                                <span className="badge badge-pill badge-primary">Todas las vacunas</span>&nbsp;
                                <div className="row">
                                  <span className="h5 mt-2 color2"><strong>Sofia Milagros</strong></span> 
                                </div>
                                <div className="row color2">
                                  <label>¡ Tu Nueva Macota !</label>
                                </div>
                            </div>
                          </div>
                          
                    </MDBContainer>
          </div>
       

        )
    }

}

export default CardInfoDogs