import React from 'react';
import '../Styles/Main.css'; 

class Main extends React.Component {

    render(){
        return(
            <div>
                <div className="menu">
                    <a href="/blog">Blog</a>
                    <a href="/projects">Projects</a>
                    <a href="/privacy">Privacy</a>
                    <a href="/terms">Terms</a>
                </div>
                <div className="about">
                    <div className="inner-about">
                        <h1>Hi there!</h1><br/>
                        <p>I'm a developer that writes code, creates bugs and sometimes tries to design a blog.</p>
                        <p className="social">
                        <a href="https://github.com">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://twitter.com">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://medium.com">
                            <i className="fab fa-medium-m"></i>
                        </a>
                        </p>
                    </div>
                </div>

                <div className="blog">
                    <div className="post">
                        <h1>Last Post</h1>
                        <h3 className="date">2019 03 03</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                    </div>
                    <div className="post">
                        <h1>Second Post</h1>
                        <h3 className="date">2019 03 03</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    </div>
                    <div className="post">
                        <h1>Hello World!</h1>
                        <h3 className="date">2019 03 03</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="footer">
                    <p>
                        (C) Lars Augustin
                    </p>
                </div>
            </div>

        )
    }

}

export default Main