import { parse } from "mathjs";

const evaluateExpression = (expression: string, range: { min: number; max: number; step: number }) => {
	try {
		const cleanedExpression = expression.replace(/^y\s*=\s*/, "");
		const parsedExpression = parse(cleanedExpression);
		const xValues = [
		];
		const yValues = [
		];

		for (let x = range.min; x <= range.max; x += range.step) {
			xValues.push(x);
			yValues.push(parsedExpression.evaluate({ x }));
		}

		return {
			x: xValues,
			y: yValues,
			type: "scatter",
			mode: "lines",
		};
	} catch (error) {
		console.error("Error evaluating expression:", error);

		return null;
	}
};

export { evaluateExpression };
