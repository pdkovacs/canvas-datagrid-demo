import React from "react";
import { createRoot } from "react-dom/client";

const App = (): JSX.Element => {
	return <div>Hello, canvas-datagrid Demo!</div>;
};

const mountPointSelector = "div#app";
const appElement = document.querySelector(mountPointSelector);

if (appElement !== null) {
	const root = createRoot(appElement);
	root.render(<App/>);
} else {
	throw new Error("Mount point " + mountPointSelector + " not found!");
}
