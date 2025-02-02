import React from "react";
import Aux from "../Aux/Aux";
import Modal from "../../components/UI/Modal/Modal";
import useHttpErrorHandler from '../../hoc/hooks/http-error-handler';

const withErrorHandler = (WrappedComponent, axios) => {
	return (props) => {
		const [error, clearError] = useHttpErrorHandler(axios);

		return (
			<Aux>
				<Modal show={error} modalClosed={clearError}>
					{error ? error.message : null}
				</Modal>
				<WrappedComponent {...props} />
			</Aux>
		);
	};
};

export default withErrorHandler;
