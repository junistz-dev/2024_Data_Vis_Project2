var vg_domestic = "0.water_consumption_mixed.json"; 
vegaEmbed("#map_chart_0", vg_domestic).then(function(result) {
}).catch(console.error);

var vg_domestic = "1. Water consumption domestic.json"; 
vegaEmbed("#map_chart_1", vg_domestic).then(function(result) {
}).catch(console.error);

var vg_nondomestic = "2. Water consumption nondomestic.json"; 
vegaEmbed("#map_chart_2", vg_nondomestic).then(function(result) {
}).catch(console.error);

var vg_production = "3. water_production_graph_brushing.json"; 
vegaEmbed("#map_chart_3", vg_production).then(function(result) {
}).catch(console.error);

var vg_production = "4. water_production_state_line.json"; 
vegaEmbed("#map_chart_4", vg_production).then(function(result) {
}).catch(console.error);

var vg_production = "5. water_access_bubble.json"; 
vegaEmbed("#map_chart_5", vg_production).then(function(result) {
}).catch(console.error);
