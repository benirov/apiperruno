import React, { Fragment } from 'react';
// import '../Styles/CardInfoDogs.scss'; 
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import ChatIcon from '@material-ui/icons/Chat';
// import PetsIcon from '@material-ui/icons/Pets';
// import HomeIcon from '@material-ui/icons/Home';
// import PageviewIcon from '@material-ui/icons/Pageview';
import { MDBCard, MDBCardBody, MDBBtn, MDBIcon, MDBRow, MDBCol, MDBCardTitle, MDBCardText, MDBCardHeader, MDBContainer } from "mdbreact";

class CardInfoDogs extends React.Component { 

    render(){
        return(
            <div>
              <MDBContainer size="sm">
              <div class="row">
                <MDBCard  style={{ marginTop: "1rem" }}>
                  <div className="row" style={{ marginTop: "1rem" }}>
                      <div className="col-12 col-md-6" >
                        <span style={{ margin: "1rem" }}> Ultimas mascotas agregadas segun tus gustos</span>
                      </div>
                      <div className="col-12 col-md-6 text-right" Style="padding-right: 22px; cursor:pointer;">
                          <p className="badge badge-pill badge-primary"><strong> Ver Mas <i class="far fa-arrow-alt-circle-right"></i></strong></p>
                      </div>
                  </div>
                  <MDBCardBody>
                  <MDBRow>
                    <MDBCol>
                    <MDBCard>
                    <div className="row" Style="margin-top: 5px;">
                      <div className="col-3" Style="padding-left: 21px;">
                        <div className="label">
                          <img
                            src="/img/sofia.jpg"
                            alt=""
                            className="rounded-circle z-depth-1-half"
                            Style="height: 78px; width: 78px;"
                          />
                        </div>
                      </div>
                      <div className="col-9">
                        <a href="#!" className="name">
                          Sofia Milagros
                        </a>
                        <br/>
                        <span className="badge badge-pill badge-primary">Pug</span>&nbsp;
                        <span className="badge badge-pill badge-primary">12 Meses</span>&nbsp;
                        <span className="badge badge-pill badge-primary">Todas las vacunas</span>&nbsp;
                        <div className="added-text">
                          ¡ Tu Nueva Macota !
                        </div>
                        <div className="">
                          <div className="col-12 text-right" Style="margin-bottom: 5px;">
                            <span className="badge badge-pill" Style="padding: 10px; cursor:pointer;"><img Style="width: 23px;" className="imgFavoritos" src="/img/dog-favoritos.png" alt=""/></span>&nbsp;&nbsp;&nbsp; 
                            <span className="badge badge-pill" Style="padding: 10px; cursor:pointer;"><img Style="width: 23px;" className="imgFavoritos" src="/img/detailDog.png" alt=""/></span>
                          </div>
                        </div>
                      </div>
                    </div>  
                    </MDBCard>
                    </MDBCol>
                    <MDBCol>
                    <MDBCard>
                    <div className="row" Style="margin-top: 5px;">
                      <div className="col-3" Style="padding-left: 21px;">
                        <div className="label">
                          <img
                            src="/img/sofia.jpg"
                            alt=""
                            className="rounded-circle z-depth-1-half"
                            Style="height: 78px; width: 78px;"
                          />
                        </div>
                      </div>
                      <div className="col-9">
                        <a href="#!" className="name">
                          Sofia Milagros
                        </a>
                        <br/>
                        <span className="badge badge-pill badge-primary">Pug</span>&nbsp;
                        <span className="badge badge-pill badge-primary">12 Meses</span>&nbsp;
                        <span className="badge badge-pill badge-primary">Todas las vacunas</span>&nbsp;
                        <div className="added-text">
                          ¡ Tu Nueva Macota !
                        </div>
                        <div className="">
                          <div className="col-12 text-right" Style="margin-bottom: 5px;">
                            <span className="badge badge-pill" Style="padding: 10px; cursor:pointer;"><img Style="width: 23px;" className="imgFavoritos" src="/img/dog-favoritos.png" alt=""/></span>&nbsp;&nbsp;&nbsp; 
                            <span className="badge badge-pill" Style="padding: 10px; cursor:pointer;"><img Style="width: 23px;" className="imgFavoritos" src="/img/detailDog.png" alt=""/></span>
                          </div>
                        </div>
                      </div>
                    </div>  
                    </MDBCard>
                    </MDBCol>
                    <MDBCol>
                    <MDBCard>
                    <div className="row" Style="margin-top: 5px;">
                      <div className="col-3" Style="padding-left: 21px;">
                        <div className="label">
                          <img
                            src="/img/sofia.jpg"
                            alt=""
                            className="rounded-circle z-depth-1-half"
                            Style="height: 78px; width: 78px;"
                          />
                        </div>
                      </div>
                      <div className="col-9">
                        <a href="#!" className="name">
                          Sofia Milagros
                        </a>
                        <br/>
                        <span className="badge badge-pill badge-primary">Pug</span>&nbsp;
                        <span className="badge badge-pill badge-primary">12 Meses</span>&nbsp;
                        <span className="badge badge-pill badge-primary">Todas las vacunas</span>&nbsp;
                        <div className="added-text">
                          ¡ Tu Nueva Macota !
                        </div>
                        <div className="">
                          <div className="col-12 text-right" Style="margin-bottom: 5px;">
                            <span className="badge badge-pill" Style="padding: 10px; cursor:pointer;"><img Style="width: 23px;" className="imgFavoritos" src="/img/dog-favoritos.png" alt=""/></span>&nbsp;&nbsp;&nbsp; 
                            <span className="badge badge-pill" Style="padding: 10px; cursor:pointer;"><img Style="width: 23px;" className="imgFavoritos" src="/img/detailDog.png" alt=""/></span>
                          </div>
                        </div>
                      </div>
                    </div>  
                    </MDBCard>
                    </MDBCol>
                  </MDBRow>
                    
                    {/* <MDBCardText>
                      With supporting text below as a natural lead-in to additional
                      content.
                    </MDBCardText>
                    <MDBBtn color="deep-orange">go somewhere</MDBBtn> */}
                  </MDBCardBody>
                </MDBCard>
                </div>
              </MDBContainer>
              <MDBContainer size="sm">
              <div className="row">
                  <MDBCard  style={{ marginTop: "1rem" }} className="col-4">
                  <div className="row" style={{ marginTop: "1rem" }}>
                      <div className="col-12 col-md-8" >
                        <span style={{ margin: "1rem" }}> Top Razas mas Visitadas</span>
                      </div>
                      <div className="col-12 col-md-4 text-right" Style="padding-right: 22px; cursor:pointer;">
                          <p className="badge badge-pill badge-primary"><strong> Ver Mas <i className="far fa-arrow-alt-circle-right"></i></strong></p>
                      </div>
                  </div>
                  <div className="row">
                    <ul className="col-12">
                        <li className="list-group-item">
                          <div className="md-v-line"></div><img Style="width: 23px;" className="imgFavoritos" src="/img/icons8-pug-96.png" alt=""/> Pug&nbsp;&nbsp; <span className="badge badge-light">&nbsp;&nbsp;4 Mascotas</span>&nbsp;&nbsp;<p className="badge badge-pill badge-primary"><strong> Ver <i className="far fa-arrow-alt-circle-right"></i></strong></p>
                        </li>
                        <li className="list-group-item">
                          <div className="md-v-line"></div><img Style="width: 23px;" className="imgFavoritos" src="/img/raza2.png" alt=""/>Beauceron&nbsp;&nbsp; <span className="badge badge-light">&nbsp;&nbsp;34 Mascotas</span>&nbsp;&nbsp;<p className="badge badge-pill badge-primary"><strong> Ver <i className="far fa-arrow-alt-circle-right"></i></strong></p>
                        </li>
                        <li className="list-group-item">
                          <div className="md-v-line"></div><img Style="width: 23px;" className="imgFavoritos" src="/img/akita.jpg" alt=""/>Akita Japonés&nbsp;&nbsp; <span className="badge badge-light">&nbsp;&nbsp;43 Mascotas</span>&nbsp;&nbsp;<p className="badge badge-pill badge-primary"><strong> Ver <i className="far fa-arrow-alt-circle-right"></i></strong></p>
                        </li>
                    </ul>

                  </div>
                  </MDBCard>
                  <MDBCard  style={{ marginTop: "1rem" }} className="col-8">
                    dcsdc
                  </MDBCard>
                </div>
              </MDBContainer>
          </div>
       

        )
    }

}

export default CardInfoDogs