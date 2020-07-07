import React, { useEffect } from "react";
import * as actions from "../../../store/actions";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Logout = (props) => {
	useEffect(() => {
		props.onLogout();
	}, [props]);

	return <Redirect to='/' />;
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLogout: () => dispatch(actions.logout()),
	};
};

export default connect(null, mapDispatchToProps)(Logout);
