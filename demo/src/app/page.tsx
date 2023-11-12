"use client";

import { RecoilRoot } from "recoil";
import { GraphicalCalculatorInput, GraphicalCalculatorPlot } from "../../../src/index";

import styles from "./page.module.css";

export default function Home() {
	return (
		<RecoilRoot>
			<main className={styles.main}>
				<GraphicalCalculatorInput />
				<GraphicalCalculatorPlot />
			</main>
		</RecoilRoot>
	);
}
