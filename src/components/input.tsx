import { useRecoilState } from "recoil";
import { ChangeEvent } from "react";

import { expressionState } from "../store";

function GraphicalCalculatorInput() {
	const [
		expression,
		setExpression
	] = useRecoilState(expressionState);

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setExpression(event.target.value);
	};

	return (
		<div>
			<input type="text" value={expression} onChange={handleInputChange} placeholder="ex. x^2, sin(x)" />
		</div>
	);
}

export { GraphicalCalculatorInput };
