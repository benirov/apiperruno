import React from 'react';
import '../Styles/CardInfoDogs.scss'; 
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatIcon from '@material-ui/icons/Chat';
import PetsIcon from '@material-ui/icons/Pets';
import HomeIcon from '@material-ui/icons/Home';
import PageviewIcon from '@material-ui/icons/Pageview';

class CardInfoDogs extends React.Component { 

    render(){
        return(
            <div>
                
<div className="row-fluid top30 pagetitle">
  
  <div className="container">
    
    <div className="row">
    </div>
    
  </div>
  
  
  
</div>
<div className="container">
  
  
  
  
  
  <div className="row">
    <div className="col-md-4">
      
      <div id="demo" className="collapse in">
        <hr />
        <div className="list-group list-group">
          <h4 className="">Category</h4>
          <a href="#" className="list-group-item"><span className="badge">14</span> Active item <span className="label label-primary">New</span></a>
          <a href="#" className="list-group-item"><span className="badge">3</span> Second item</a>	
          <a href="#" className="list-group-item"><span className="badge">25</span> Third item</a>
          <a href="#" className="list-group-item"><span className="badge">14</span> Active item</a>	
          <a href="#" className="list-group-item"><span className="badge">3</span> Second item</a>
          <a href="#" className="list-group-item"><span className="badge">25</span> Third item</a> 
          <a href="#" className="list-group-item"><span className="badge">14</span> Active item</a>
          <a href="#" className="list-group-item"><span className="badge">3</span> Second item</a>
          
          <div id="categories" className="collapse">
            
            <a href="#" className="list-group-item"><span className="badge">14</span> Active item</a>
            <a href="#" className="list-group-item"><span className="badge">3</span> Second item</a>
            <a href="#" className="list-group-item"><span className="badge">25</span> Third item</a> 
            <a href="#" className="list-group-item"><span className="badge">14</span> Active item</a>
            <a href="#" className="list-group-item"><span className="badge">3</span> Second item</a>
          </div>
          
          
          <button className="btn btn-default btn-sm btn-block" data-toggle="collapse" data-target="#categories">More <span className="caret"></span></button>
          
          <hr className="" />
          <h4 className="">Viewing Options</h4>
          <a href="#" className="list-group-item"><span className="badge">14</span> Upcoming Sessions</a>
          
          <a href="#" className="list-group-item"><span className="badge">3</span> OnDemand</a>
          <hr className="" />	
          <a href="#" className="list-group-item">Archived Courses</a>
          <a href="#" className="list-group-item">Courses In Development</a>
        </div>
      </div>
      
      
      
      <div className="hidden-sm hidden-xs">
        <div className="well rounded p-1">
          
          <h4>Ultimas Razas Agregadas</h4>
          <hr/>
          <button type="button" className="btn btn-primary m-1">
            Pug <span className="badge badge-light">4 Mascotas</span>
          </button>
          {/* <br/> */}

          <button type="button" className="btn btn-primary m-1">
        Beauceron <span className="badge badge-light">34 Mascotas</span>
          </button>
          {/* <br/> */}
          <button type="button" className="btn btn-primary m-1">
        Akita Japonés <span className="badge badge-light">43 Mascotas</span>
          </button>
          {/* <br/> */}
          <button type="button" className="btn btn-primary m-1">
            Ver mas...
          </button>
        </div>
        
        
        
        
        {/* <div className="well">
          
          <h4>Course Catalog</h4>
          <p><a href="#"><img src="http://placehold.it/400X500" className="img-responsive" /></a></p>
          
          <p>Everything you need to know about our webinars, including speaker bios, topics, and courses.</p>
          
          <button className="btn btn-sm btn-block btn-warning">Download</button>
        </div> */}
        
        <hr/>
        
        {/* <h4 className="text-center">CPE Partners</h4>
        
        <p><a href="#"><img className="center-block" src="http://placehold.it/100X100" /></a></p> */}
        
        
        
      </div>
      
    </div>
    <div className="col-md-8">
      
      
      <div className="well hidden-xs"> 
        
        {/* <div className="row">
          
          <div className="col-xs-4">
            
            
            <select className="form-control">
              <option>Featured</option>
              <option>Recently Added</option>
              <option>Next Upcoming Session</option>
              <option>A-Z</option>
              <option>Z-A</option>
            </select>
          </div>
          <div className="col-xs-8">
            <div className="btn-group pull-right">
              <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-th"></span></button>
              <button type="button" className="btn btn-default active"><span className="glyphicon glyphicon-th-list"></span></button>
              <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-list"></span></button>
              
            </div>
        </div>
          
        </div> */}
        
        
        
        
        
      </div>
      
      <br/>
      <p> Ultimas mascotas agregadas segun tus gustos</p>
      <hr />
      
      
      <div className="row rounded p-1" Style="background: #b8b0c1;">
        <div className="col-sm-4 text-center"><a href="#" className=""><img Style="max-width: -webkit-fill-available; height: 130px; width: 130px;"className="img-responsive rounded-circle" src="/img/sofia.jpg" alt=""/></a>
        </div>
        <div className="col-sm-8">
          <div className="row">
            <div className="col-sm-6">
                <h3 className="title  text-white">Sofia Milagros</h3>
                <span className="badge badge-pill badge-primary">Pug</span>&nbsp;
                <span className="badge badge-pill badge-primary">12 Meses</span>&nbsp;
                <span className="badge badge-pill badge-primary">Todas las vacunas</span>&nbsp;
                <p className="text-white">Tu nueva Mascota! </p>
            </div>
            <div className="col-sm-6 text-center mt-4">
                <button type="button" className="btn btn-outline-danger buttonBackground"><img Style="width: 27px;" className="imgFavoritos" src="/img/favorito.png" alt=""/></button>&nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-outline-danger buttonBackground"><img Style="width: 27px;" className="imgFavoritos" src="/img/detailDog.png" alt=""/></button>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div className="row rounded p-1" Style="background: #b8b0c1;">
        <div className="col-sm-4 text-center"><a href="#" className=""><img Style="max-width: -webkit-fill-available; height: 130px; width: 130px;"className="img-responsive rounded-circle" src="/img/sofia.jpg" alt=""/></a>
        </div>
        <div className="col-sm-8">
          <div className="row">
            <div className="col-sm-6">
                <h3 className="title">Sofia Milagros</h3>
                <span className="badge badge-pill badge-primary">Pug</span>&nbsp;
                <span className="badge badge-pill badge-primary">12 Meses</span>&nbsp;
                <span className="badge badge-pill badge-primary">Todas las vacunas</span>&nbsp;
                <p>Tu nueva Mascota! </p>
            </div>
            <div className="col-sm-6 text-center mt-4">
                <button type="button" className="btn btn-outline-danger buttonBackground"><img Style="width: 27px;" className="imgFavoritos" src="/img/favorito.png" alt=""/></button>&nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-outline-danger buttonBackground"><img Style="width: 27px;" className="imgFavoritos" src="/img/detailDog.png" alt=""/></button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row rounded p-1" Style="background: #b8b0c1;">
        <div className="col-sm-4 text-center"><a href="#" className=""><img Style="max-width: -webkit-fill-available; height: 130px; width: 130px;"className="img-responsive rounded-circle" src="/img/sofia.jpg" alt=""/></a>
        </div>
        <div className="col-sm-8">
          <div className="row">
            <div className="col-sm-6">
                <h3 className="title">Sofia Milagros</h3>
                <span className="badge badge-pill badge-primary">Pug</span>&nbsp;
                <span className="badge badge-pill badge-primary">12 Meses</span>&nbsp;
                <span className="badge badge-pill badge-primary">Todas las vacunas</span>&nbsp;
                <p>Tu nueva Mascota! </p>
            </div>
            <div className="col-sm-6 text-center mt-4">
                <button type="button" className="btn btn-outline-danger buttonBackground"><img Style="width: 27px;" className="imgFavoritos" src="/img/favorito.png" alt=""/></button>&nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-outline-danger buttonBackground"><img Style="width: 27px;" className="imgFavoritos" src="/img/detailDog.png" alt=""/></button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row rounded p-1" Style="background: #b8b0c1;">
        <div className="col-sm-4 text-center"><a href="#" className=""><img Style="max-width: -webkit-fill-available; height: 130px; width: 130px;"className="img-responsive rounded-circle" src="/img/sofia.jpg" alt=""/></a>
        </div>
        <div className="col-sm-8">
          <div className="row">
            <div className="col-sm-6">
                <h3 className="title">Sofia Milagros</h3>
                <span className="badge badge-pill badge-primary">Pug</span>&nbsp;
                <span className="badge badge-pill badge-primary">12 Meses</span>&nbsp;
                <span className="badge badge-pill badge-primary">Todas las vacunas</span>&nbsp;
                <p>Tu nueva Mascota! </p>
            </div>
            <div className="col-sm-6 text-center mt-4">
                <button type="button" className="btn btn-outline-danger buttonBackground"><img Style="width: 27px;" className="imgFavoritos" src="/img/favorito.png" alt=""/></button>&nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-outline-danger buttonBackground"><img Style="width: 27px;" className="imgFavoritos" src="/img/detailDog.png" alt=""/></button>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div className="row rounded p-1" Style="background: #b8b0c1;">
        <div className="col-sm-4 text-center"><a href="#" className=""><img Style="max-width: -webkit-fill-available; height: 130px; width: 130px;"className="img-responsive rounded-circle" src="/img/sofia.jpg" alt=""/></a>
        </div>
        <div className="col-sm-8">
          <div className="row">
            <div className="col-sm-6">
                <h3 className="title">Sofia Milagros</h3>
                <span className="badge badge-pill badge-primary">Pug</span>&nbsp;
                <span className="badge badge-pill badge-primary">12 Meses</span>&nbsp;
                <span className="badge badge-pill badge-primary">Todas las vacunas</span>&nbsp;
                <p>Tu nueva Mascota! </p>
            </div>
            <div className="col-sm-6 text-center mt-4">
                <button type="button" className="btn btn-outline-danger buttonBackground"><img Style="width: 27px;" className="imgFavoritos" src="/img/favorito.png" alt=""/></button>&nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-outline-danger buttonBackground"><img Style="width: 27px;" className="imgFavoritos" src="/img/detailDog.png" alt=""/></button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row rounded p-1" Style="background: #b8b0c1;">
        <div className="col-sm-4 text-center"><a href="#" className=""><img Style="max-width: -webkit-fill-available; height: 130px; width: 130px;"className="img-responsive rounded-circle" src="/img/sofia.jpg" alt=""/></a>
        </div>
        <div className="col-sm-8">
          <div className="row">
            <div className="col-sm-6">
                <h3 className="title">Sofia Milagros</h3>
                <span className="badge badge-pill badge-primary">Pug</span>&nbsp;
                <span className="badge badge-pill badge-primary">12 Meses</span>&nbsp;
                <span className="badge badge-pill badge-primary">Todas las vacunas</span>&nbsp;
                <p>Tu nueva Mascota! </p>
            </div>
            <div className="col-sm-6 text-center mt-4">
                <button type="button" className="btn btn-outline-danger buttonBackground"><img Style="width: 27px;" className="imgFavoritos" src="/img/favorito.png" alt=""/></button>&nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-outline-danger buttonBackground"><img Style="width: 27px;" className="imgFavoritos" src="/img/detailDog.png" alt=""/></button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row rounded p-1" Style="background: #b8b0c1;">
        <div className="col-sm-4 text-center"><a href="#" className=""><img Style="max-width: -webkit-fill-available; height: 130px; width: 130px;"className="img-responsive rounded-circle" src="/img/sofia.jpg" alt=""/></a>
        </div>
        <div className="col-sm-8">
          <div className="row">
            <div className="col-sm-6">
                <h3 className="title">Sofia Milagros</h3>
                <span className="badge badge-pill badge-primary">Pug</span>&nbsp;
                <span className="badge badge-pill badge-primary">12 Meses</span>&nbsp;
                <span className="badge badge-pill badge-primary">Todas las vacunas</span>&nbsp;
                <p>Tu nueva Mascota! </p>
            </div>
            <div className="col-sm-6 text-center mt-4">
                <button type="button" className="btn btn-outline-danger buttonBackground"><img Style="width: 27px;" className="imgFavoritos" src="/img/favorito.png" alt=""/></button>&nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-outline-danger buttonBackground"><img Style="width: 27px;" className="imgFavoritos" src="/img/detailDog.png" alt=""/></button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row rounded p-1" Style="background: #b8b0c1;">
        <div className="col-sm-4 text-center"><a href="#" className=""><img Style="max-width: -webkit-fill-available; height: 130px; width: 130px;"className="img-responsive rounded-circle" src="/img/sofia.jpg" alt=""/></a>
        </div>
        <div className="col-sm-8">
          <div className="row">
            <div className="col-sm-6">
                <h3 className="title">Sofia Milagros</h3>
                <span className="badge badge-pill badge-primary">Pug</span>&nbsp;
                <span className="badge badge-pill badge-primary">12 Meses</span>&nbsp;
                <span className="badge badge-pill badge-primary">Todas las vacunas</span>&nbsp;
                <p>Tu nueva Mascota! </p>
            </div>
            <div className="col-sm-6 text-center mt-4">
                <button type="button" className="btn btn-outline-danger buttonBackground"><img Style="width: 27px;" className="imgFavoritos" src="/img/favorito.png" alt=""/></button>&nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-outline-danger buttonBackground"><img Style="width: 27px;" className="imgFavoritos" src="/img/detailDog.png" alt=""/></button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </div>
</div>

<div className="d-lg-none d-md-none d-xs-none  d-sm-block">

<nav className="mobile-bottom-nav">
	<div className="mobile-bottom-nav__item mobile-bottom-nav__item--active">
			<HomeIcon />
	</div>
	<div className="mobile-bottom-nav__item">		
    <PetsIcon />
	</div>
	<div className="mobile-bottom-nav__item">
    <ChatIcon />
	</div>
	
	<div className="mobile-bottom-nav__item">
    <AccountCircleIcon />
	</div>
</nav>

</div>

       </div>
       

        )
    }

}

export default CardInfoDogs