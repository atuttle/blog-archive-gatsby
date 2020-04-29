import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import Layout from '../components/layout';

const rollingAvgLength = 10;
const datasource =
	'https://services.arcgis.com/G4S1dGvn7PIgYd6Y/arcgis/rest/services/COVID_19_Cases_Chester_County__PA/FeatureServer/2/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Date%20asc&outSR=102100&resultOffset=0&resultRecordCount=32000&resultType=standard&cacheHint=true';

const CovidPage = () => {
	const [dates, setDates] = useState([]);
	const [deltas, setDeltas] = useState([]);
	const [avgs, setAvgs] = useState([]);

	useEffect(() => {
		(async () => {
			const data = await fetch(datasource);
			const dataJson = await data.json();
			console.log(dataJson);

			let dates = [];
			let raw = [];
			let avg = [];
			for (let i = 0; i < dataJson.features.length; i++) {
				dates.push(new Date(dataJson.features[i].attributes.Date));
				raw.push(dataJson.features[i].attributes.Positives_Daily);
				if (i < rollingAvgLength) {
					avg.push(null);
				} else {
					let newAvg = 0;
					for (let j = i; j >= i - rollingAvgLength; j--) {
						newAvg += dataJson.features[j].attributes.Positives_Daily;
					}
					avg.push(newAvg / rollingAvgLength);
				}
			}

			//add some padding to the right side of the chart so the last column doesn't get cropped
			dates.push(null);
			raw.push(null);
			avg.push(null);

			setDeltas(raw);
			setAvgs(avg);
			setDates(dates);
		})()
			.then(() => {})
			.catch(err => {
				console.error(err);
			});
	}, []);
	return (
		<Layout title="Confirmed new COVID19 Infections in ChesCo, PA">
			<Line
				data={{
					labels: dates,
					datasets: [
						{
							label: `${rollingAvgLength} day rolling avg`,
							type: 'line',
							fill: false,
							data: avgs,
							backgroundColor: '#b80303',
							borderColor: '#b80303'
						},
						{
							label: 'Daily deltas',
							type: 'bar',
							data: deltas,
							backgroundColor: '#EC932F'
						}
					]
				}}
				height={300}
				options={{
					legend: {
						position: 'bottom'
					}
				}}
			/>
			<div style={{ marginTop: '20px' }}>
				Datasource:{' '}
				<a href="https://chesco.maps.arcgis.com/apps/opsdashboard/index.html#/975082d579454c3ca7877db0a44e61ca">
					Arcgis - Chester County, PA
				</a>
			</div>
		</Layout>
	);
};

export default CovidPage;
