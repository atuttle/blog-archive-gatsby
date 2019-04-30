import styled from "styled-components";

const ThemedButton = styled.a`
	display: block;
	max-width: 400px;
	background-color: #4f9e5a;
	color: white;
	text-decoration: none;
	text-align: center;
	font-weight: bold;
	border-radius: 8px;
	font-size: 1.5em;
	box-shadow: 2px 2px 5px #9e9e9e;
	padding: 10px;
	border: solid #2e8c2e 2px;

	&:hover {
		background-color: #1b8c2a;
		color: white;
	}
`;

const HugeThemedButton = styled.a`
	display: block;
	max-width: 400px;
	background-color: #4f9e5a;
	color: white;
	text-decoration: none;
	text-align: center;
	font-weight: bold;
	border-radius: 8px;
	font-size: 2em;
	box-shadow: 2px 2px 5px #9e9e9e;
	padding: 20px;
	border: solid #2e8c2e 2px;

	&:hover {
		background-color: #1b8c2a;
	}
`;

export { ThemedButton, HugeThemedButton };
