import React from 'react';
// import PageviewIcon from '@material-ui/icons/Pageview';
import PageviewIcon from '@material-ui/icons/Search';
import '../Styles/Filtering.css';  

class Filtering extends React.Component { 

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-12 offset-2">
                        <div id="row h-100 justify-content-center align-items-center">
                            <div className="floating rounded-circle text-center">
                                <PageviewIcon style={{ color: 'white',  marginTop: '12px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default Filtering