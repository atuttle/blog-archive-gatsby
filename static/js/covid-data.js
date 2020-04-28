window.onload = function() {
	var dataPoints = [];

	var chart = new CanvasJS.Chart('chartContainer', {
		animationEnabled: true,
		theme: 'dark2',
		title: {
			text: 'Daily COVID19 Delta (ChesCo, PA)'
		},
		axisY: {
			title: 'New Confirmed Infections',
			titleFontSize: 24
		},
		data: [
			{
				type: 'column',
				yValueFormatString: '#,### new confirmed infections',
				dataPoints: dataPoints
			}
		]
	});

	function addData(data) {
		console.log(data);
		for (var i = 0; i < data.features.length; i++) {
			dataPoints.push({
				x: new Date(data.features[i].attributes.Date),
				y: data.features[i].attributes.Positives_Daily
			});
		}
		chart.render();
	}

	$.getJSON(
		'https://services.arcgis.com/G4S1dGvn7PIgYd6Y/arcgis/rest/services/COVID_19_Cases_Chester_County__PA/FeatureServer/2/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Date%20asc&outSR=102100&resultOffset=0&resultRecordCount=32000&resultType=standard&cacheHint=true',
		addData
	);
};
