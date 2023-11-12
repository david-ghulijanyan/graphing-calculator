declare module "react-plotly.js" {
	const Plot: any;
	export default Plot;
}

declare module "mathjs" {
	export function parse(expression: string): any;
	export function evaluate(expression: string, scope?: any): any;
}
