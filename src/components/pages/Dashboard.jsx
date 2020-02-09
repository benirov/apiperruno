import React from 'react';
import '../Styles/Main.css';
import NavBar from './NavBar'
import CardInfoDogs from './CardInfoDogs'
import Filtering from './Filtering'

class Dashboard extends React.Component {

    render(){
        return(
            <div>
                <NavBar />
                {/* <Filtering /> */}
                <CardInfoDogs />
            </div>

        )
    }

}

export default Dashboard