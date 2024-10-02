var vg_domestic = "1. Water consumption domestic.json"; 
vegaEmbed("#map_chart_1", vg_domestic).then(function(result) {
}).catch(console.error);

var vg_nondomestic = "2. Water consumption nondomestic.json"; 
vegaEmbed("#map_chart_2", vg_nondomestic).then(function(result) {
}).catch(console.error);