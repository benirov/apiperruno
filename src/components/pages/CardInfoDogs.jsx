import React from 'react';
import '../Styles/CardInfoDogs.scss'; 
import StarsIcon from '@material-ui/icons/Stars';
import PageviewIcon from '@material-ui/icons/Pageview';

class CardInfoDogs extends React.Component { 

    render(){
        return(
            <div>
                    <div className="webinar-card">
		<div className="header-img">
			<a id="" href="#">
				<i id="playBtn" className="header-icon icon-play"><img className="btn-circle hederPorfileImg" src="/img/sofia.jpg" alt=""/></i>
			</a>
		</div>
		<div className="webinar-card__content">
			<span className="label">Pug</span>
            <span className="label">12 Meses</span>
            <span className="label">Todas las vacunas</span>
            <div className="row">
            <div className="col-6">
                <h1>Sofia Milagros</h1>
            </div>
            <div className="col-6">
                <div className="col-12">
                    <button data-title="Agregar a favoritos" className="btn btn-danger btn-circle btn-circle-sm m-1"><img className="imgFavoritos" src="/img/favorito.png" alt=""/></button> 
                    <button data-title="Ver detalle de mascota" className="btn btn-danger btn-circle btn-circle-sm m-1"><img className="imgFavoritos" src="/img/detailDog.png" alt=""/></button> 
                </div>
            </div>
            </div>
			<p>Tu nueva Mascota</p>
	</div>
  <div className="space"></div>
</div>




</div>

        )
    }

}

export default CardInfoDogs