import React, { useState } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
import { connect } from "react-redux";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../../store/actions";
import { updateObject, checkValidity } from "../../../shared/utility";

const ContactData = (props) => {
	const [orderForm, setOrderForm] = useState({
		name: {
			elementType: "input",
			elementConfig: {
				type: "text",
				placeholder: "Your Name",
			},
			value: "",
			validation: {
				required: true,
			},
			valid: false,
			touched: false,
		},
		zipCode: {
			elementType: "input",
			elementConfig: {
				type: "text",
				placeholder: "Your ZIP Code",
			},
			value: "",
			validation: {
				required: true,
				minLength: 3,
				maxLength: 5,
				isNumeric: true,
			},
			valid: false,
			touched: false,
		},
		country: {
			elementType: "input",
			elementConfig: {
				type: "text",
				placeholder: "Country",
			},
			value: "",
			validation: {
				required: true,
			},
			valid: false,
			touched: false,
		},
		email: {
			elementType: "input",
			elementConfig: {
				type: "email",
				placeholder: "Your E-mail",
			},
			value: "",
			validation: {
				required: true,
				isEmail: true,
			},
			valid: false,
			touched: false,
		},
		deliveryMethod: {
			elementType: "select",
			elementConfig: {
				options: [
					{ value: "fastest", displayValue: "Fastest" },
					{ value: "cheapest", displayValue: "Cheapest" },
				],
			},
			value: "fastest",
			validation: {},
			valid: true,
		},
	});

	const [formIsValid, setFormIsValid] = useState(false);

	const orderHandler = (e) => {
		e.preventDefault();
		// props.loading;
		const formData = {};
		for (let formElementIdentifier in orderForm) {
			formData[formElementIdentifier] = orderForm[formElementIdentifier].value;
		}
		const order = {
			ingredients: props.ings,
			price: props.price,
			orderData: formData,
			userId: props.userId,
		};
		props.onOrderBurger(order, props.token);
	};

	const inputChangedHandler = (event, inputIdentifier) => {
		const updatedFormElement = updateObject(orderForm[inputIdentifier], {
			value: event.target.value,
			valid: checkValidity(
				event.target.value,
				orderForm[inputIdentifier].validation
			),
			touched: true,
		});

		const updateOrderForm = updateObject(orderForm, {
			[inputIdentifier]: updatedFormElement,
		});

		let formIsValid = true;
		for (let inputIdentifier in updateOrderForm) {
			formIsValid = updateOrderForm[inputIdentifier].valid && formIsValid;
		}
		setOrderForm(updateOrderForm);
		setFormIsValid(formIsValid);
	};

	const formElementsArray = [];
	for (let key in orderForm) {
		formElementsArray.push({
			id: key,
			config: orderForm[key],
		});
	}
	let form = (
		<form onSubmit={orderHandler}>
			{formElementsArray.map((formElement) => (
				<Input
					key={formElement.id}
					elementType={formElement.config.elementType}
					elementConfig={formElement.config.elementConfig}
					value={formElement.config.value}
					invalid={!formElement.config.valid}
					shouldValidate={formElement.config.validation}
					touched={formElement.config.touched}
					changed={(event) => inputChangedHandler(event, formElement.id)}
				/>
			))}
			<Button btnType='Success' disabled={!formIsValid}>
				ORDER
			</Button>
		</form>
	);
	if (props.loading) {
		form = <Spinner />;
	}
	return (
		<div className={classes.ContactData}>
			<h4>Enter your Contact Data</h4>
			{form}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		price: state.burgerBuilder.totalPrice,
		ings: state.burgerBuilder.ingredients,
		loading: state.order.loading,
		token: state.auth.token,
		userId: state.auth.userId,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onOrderBurger: (orderData, token) =>
			dispatch(actions.purchaseBurger(orderData, token)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withErrorHandler(ContactData, axios));
