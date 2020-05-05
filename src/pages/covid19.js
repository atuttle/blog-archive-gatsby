import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import Layout from '../components/layout';

const datasource =
	'https://services.arcgis.com/G4S1dGvn7PIgYd6Y/arcgis/rest/services/COVID_19_Cases_Chester_County__PA/FeatureServer/2/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Date%20asc&outSR=102100&resultOffset=0&resultRecordCount=32000&resultType=standard&cacheHint=true';

const CovidPage = () => {
	const [rawData, setRawData] = useState(null);
	const [dates, setDates] = useState([]);
	const [deltas, setDeltas] = useState([]);
	const [avgs, setAvgs] = useState([]);
	const [rollingAvgLength, setRollingAvgLength] = useState(20);

	//load raw data once at page load, and not again until refresh
	useEffect(() => {
		(async () => {
			const data = await fetch(datasource);
			const dataJson = await data.json();
			console.log(dataJson);
			setRawData(dataJson);
		})()
			.then(() => {})
			.catch(err => {
				console.error(err);
			});
	}, []);

	useEffect(() => {
		if (rawData === null) {
			return;
		}

		let dates = [];
		let raw = [];
		let avg = [];
		for (let i = 0; i < rawData.features.length; i++) {
			dates.push(new Date(rawData.features[i].attributes.Date));
			raw.push(rawData.features[i].attributes.Positives_Daily);
			if (i < rollingAvgLength) {
				avg.push(null);
			} else {
				let newAvg = 0;
				for (let j = i; j >= i - rollingAvgLength; j--) {
					newAvg += rawData.features[j].attributes.Positives_Daily;
				}
				avg.push(newAvg / rollingAvgLength);
			}
		}

		setDeltas(raw);
		setAvgs(avg);
		setDates(dates);
	}, [rawData, rollingAvgLength]);

	return (
		<Layout title="Confirmed new COVID19 Infections in ChesCo, PA">
			<p>
				A{' '}
				<a href="https://en.wikipedia.org/wiki/Moving_average">
					moving average
				</a>{' '}
				smooths the spikes and shows a trend line. More days averaged = smoother
				line.
				<br />
				Change the number here to adjust the graphed moving average length:
				<input
					type="text"
					value={rollingAvgLength}
					style={{
						width: '48px',
						padding: '0 6px',
						marginLeft: '15px',
						border: '2px solid #b80502',
						backgroundColor: '#f5e0e0',
						color: '#b80502',
						fontWeight: 'bold'
					}}
					onChange={e => {
						const newVal = parseInt(e.currentTarget.value, 10);
						setRollingAvgLength(isNaN(newVal) ? 0 : newVal);
					}}
				/>
			</p>
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
						position: 'top'
					},
					scales: {
						xAxes: [
							{
								type: 'time',
								time: {
									unit: 'day',
									displayFormats: {
										day: 'ddd MMM DD'
									}
								}
							}
						]
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
