import { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import { useRecoilValue } from "recoil";

import { expressionState } from "../store";
import { evaluateExpression } from "../utils";

function GraphicalCalculatorPlot() {
	const expression = useRecoilValue(expressionState);
	const [
		plotData,
		setPlotData
	] = useState([
	]);

	useEffect(() => {
		if (expression) {
			const data = evaluateExpression(expression, { min: -10,
				max: 10,
				step: 0.1 });
			if (data) {
				setPlotData([
data as unknown as never
				]);
			}
		}
	}, [
		expression
	]);

	return (
		<div>
			{plotData.length > 0 && (
				<Plot data={plotData} layout={{ title: "Graph",
					xaxis: { title: "x" },
					yaxis: { title: "y" } }} />
			)}
		</div>
	);
}

export { GraphicalCalculatorPlot };
