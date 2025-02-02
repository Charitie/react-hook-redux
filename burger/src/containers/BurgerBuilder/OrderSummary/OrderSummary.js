import React from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../../components/UI/Button/Button";

const OrderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
		return (
			<li key={igKey}>
				<span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
				{props.ingredients[igKey]}
			</li>
		);
	});
	return (
		<Aux>
			<h1>Your Order</h1>
			<p>A delicious burgerwith the following ingredients: </p>
			<ul>{ingredientSummary}</ul>
			<p>
				<strong>Total Price: {props.price.toFixed(2)}</strong>
			</p>
			<p>Continue to checkout?</p>
			<Button btnType='Danger' clicked={props.purchaseCanceled}>
				CANCEL
			</Button>
			<Button btnType='Success' clicked={props.purchaseContinued}>
				CONTINUE
			</Button>
		</Aux>
	);
};

export default OrderSummary;
