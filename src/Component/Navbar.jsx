import React from "react";
import { withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Navbar = (props) => {
	const { history } = props;

	const onHomeClickHandler = () => {
		history.push("/");
	};

	return (
		<nav>
			<Menu>
				<Menu.Item header name="Movie Viewer" onClick={onHomeClickHandler} />
			</Menu>
		</nav>
	);
};

export default withRouter(Navbar);
