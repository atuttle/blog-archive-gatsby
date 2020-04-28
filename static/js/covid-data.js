window.onload = function() {
	var dataPointsRaw = [];
	var dataPointsRollingAvg = [];

	var chart = new CanvasJS.Chart('chartContainer', {
		animationEnabled: true,
		theme: 'dark2',
		title: {
			text: 'Daily COVID19 Delta (ChesCo, PA)'
		},
		axisY: {
			title: 'New Confirmed Infections',
			titleFontSize: 20
		},
		data: [
			{
				type: 'column',
				name: 'Daily Delta',
				yValueFormatString: '#,### new confirmed infections',
				dataPoints: dataPointsRaw
			},
			{
				type: 'spline',
				name: '5 day rolling avg',
				yValueFormatString: '#',
				dataPoints: dataPointsRollingAvg
			}
		]
	});

	function addData(data) {
		console.log(data);
		for (var i = 0; i < data.features.length; i++) {
			dataPointsRaw.push({
				x: new Date(data.features[i].attributes.Date),
				y: data.features[i].attributes.Positives_Daily
			});
			if (i >= 4) {
				dataPointsRollingAvg.push({
					x: new Date(data.features[i].attributes.Date),
					y:
						(data.features[i].attributes.Positives_Daily +
							data.features[i - 1].attributes.Positives_Daily +
							data.features[i - 2].attributes.Positives_Daily +
							data.features[i - 3].attributes.Positives_Daily +
							data.features[i - 4].attributes.Positives_Daily) /
						5
				});
			}
		}
		chart.render();
	}

	$.getJSON(
		'https://services.arcgis.com/G4S1dGvn7PIgYd6Y/arcgis/rest/services/COVID_19_Cases_Chester_County__PA/FeatureServer/2/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Date%20asc&outSR=102100&resultOffset=0&resultRecordCount=32000&resultType=standard&cacheHint=true',
		addData
	);
};
