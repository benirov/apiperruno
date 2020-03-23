import React from 'react';
import '../Styles/NavBar.css'; 

class NavBar extends React.Component { 

    render(){
        return(
            <div className="d-none d-md-none d-lg-block">
                <div className="header">
                    <div className="container-fluid h-100 d-flex">
                        <div className="ml-auto">
                            <img className="rounded-circle z-depth-2 imgprofile mx-auto d-block mt-1" alt="100x100" src="/img/logo.png"
                            data-holder-rendered="true" />
                        </div>
                    </div>
                </div>
                    <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
                    <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
                        <div className="spinner diagonal part-1"></div>
                        <div className="spinner horizontal"></div>
                        <div className="spinner diagonal part-2"></div>
                    </label>
                <div id="sidebarMenu">
                    <ul className="sidebarMenuInner">
                        <li>Jelena Jovanovic <span>Web Developer</span></li>
                        <li><a href="https://vanila.io" target="_blank">Company</a></li>
                        <li><a href="https://instagram.com/plavookac" target="_blank">Instagram</a></li>
                        <li><a href="https://twitter.com/plavookac" target="_blank">Twitter</a></li>
                        <li><a href="https://www.youtube.com/channel/UCDfZM0IK6RBgud8HYGFXAJg" target="_blank">YouTube</a></li>
                        <li><a href="https://www.linkedin.com/in/plavookac/" target="_blank">Linkedin</a></li>
                    </ul>
                </div>
            </div>

        )
    }

}

export default NavBar