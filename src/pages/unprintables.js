import React from 'react';
import { useState } from 'react';

import Layout from '../components/layout';

const UnprintablesPage = () => {
	const [data, setData] = useState('hello\nworld');
	return (
		<Layout>
			<h1>Find Unprintables</h1>
			<p>Paste your content here:</p>
			<textarea
				rows="10"
				cols="80"
				id="input"
				onChange={e => {
					console.log(e.target.value);
					setData(e.target.value);
				}}
			>
				{data}
			</textarea>
			{data !== '' && (
				<table>
					{data.split('').map(char => {
						const charCode = char.charCodeAt(0);
						return (
							<tr>
								<td>{char}</td>
								<td
									style={
										charCode < 32 || charCode > 126
											? charCode === 10 || charCode === 13
												? { backgroundColor: '#eae300' }
												: {
														backgroundColor: '#ea3600',
														color: 'white',
														fontWeight: 'bold'
												  }
											: null
									}
								>
									{charCode}
								</td>
							</tr>
						);
					})}
				</table>
			)}
		</Layout>
	);
};

export default UnprintablesPage;
