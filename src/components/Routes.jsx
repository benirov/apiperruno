import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import App from "./index";
import Home from "./Home";
import UserSetting from "./UserSetting";

const Routes = () =>
(
	<Router>
		<div>
			<Route exact path="/" component={App} />
			<Route exact path="/home" component={Home} />
			<Route exact path="/user" component={UserSetting} />
			<Route exact path="/user/:id" component={UserSetting} />
		</div>
	</Router>
)

export default Routes;