import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyle = createGlobalStyle`
	body {
		background-color: #E229D1;
		
		margin: 0px;
	}
`;

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	// <React.StrictMode>
	<>
		<GlobalStyle />
		<App />
	</>

	// </React.StrictMode>
);
