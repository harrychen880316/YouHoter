//-------------------------------------------第一個按鈕一點-----------------------------------------------------------------------------
function login1() {
            $.ajax({
            //几个参数需要注意一下
                type: "POST",//方法类型
                dataType: "json",//预期服务器返回的数据类型
                url: "process2.php" ,//url
                data: $('#idForm').serialize(),
                success: function (result) {
					chartdiv.text=" ";
					
					data=JSON.stringify(result)
                    $('#returndata').text(data);
					data=data.replace(/word/g, "tag");
					data=JSON.parse(data);
					
					am4core.ready(function() {
					// Themes begin
					am4core.useTheme(am4themes_animated);
					// Themes end

					var chart = am4core.create("chartdiv1", am4plugins_wordCloud.WordCloud);
					chart.fontFamily = "微軟正黑體";
					var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
					series.randomness = 0.1;
					series.rotationThreshold = 0.5;

					series.data = data;

					series.dataFields.word = "tag";
					series.dataFields.value = "count";

					series.heatRules.push({
					 "target": series.labels.template,
					 "property": "fill",
					 "min": am4core.color("#6640FF"),
					 "max": am4core.color("#DB7093"),
					 "dataField": "value"
					});

					
					series.labels.template.urlTarget = "_blank";
					series.labels.template.tooltipText = "{word}: {value}";

					var hoverState = series.labels.template.states.create("hover");
					hoverState.properties.fill = am4core.color("#FFA631");

					

					var title = chart.titles.create();
					title.text = "Youtuber最常用關鍵字";
					title.fontSize = 20;
					title.fontFamily="微軟正黑體"

					}); // end am4core.ready()
					
                },
                error : function() {
                    $('#returndata').text("error");
                }
            });
	
			$.ajax({
					//几个参数需要注意一下
						type: "POST",//方法类型
						dataType: "json",//预期服务器返回的数据类型
						url: "process3.php" ,//url
						data: $('#idForm').serialize(),
						success: function (result1) {
							data=result1;

							am4core.ready(function() {

							// Themes begin
							am4core.useTheme(am4themes_animated);
							// Themes end

							var iconPath = "M53.5,476c0,14,6.833,21,20.5,21s20.5-7,20.5-21V287h21v189c0,14,6.834,21,20.5,21 c13.667,0,20.5-7,20.5-21V154h10v116c0,7.334,2.5,12.667,7.5,16s10.167,3.333,15.5,0s8-8.667,8-16V145c0-13.334-4.5-23.667-13.5-31 s-21.5-11-37.5-11h-82c-15.333,0-27.833,3.333-37.5,10s-14.5,17-14.5,31v133c0,6,2.667,10.333,8,13s10.5,2.667,15.5,0s7.5-7,7.5-13 V154h10V476 M61.5,42.5c0,11.667,4.167,21.667,12.5,30S92.333,85,104,85s21.667-4.167,30-12.5S146.5,54,146.5,42 c0-11.335-4.167-21.168-12.5-29.5C125.667,4.167,115.667,0,104,0S82.333,4.167,74,12.5S61.5,30.833,61.5,42.5z"



							var chart = am4core.create("chartdiv2", am4charts.SlicedChart);
							chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
							
							chart.data = data;

							var series = chart.series.push(new am4charts.PictorialStackedSeries());
							series.dataFields.value = "value";
							series.dataFields.category = "name";
							series.alignLabels = true;

							series.maskSprite.path = iconPath;
							series.ticks.template.locationX = 1;
							series.ticks.template.locationY = 0.5;

							series.labelsContainer.width = 200;

							chart.legend = new am4charts.Legend();
							chart.legend.position = "top";
							chart.legend.valign = "bottom";


							var title = chart.titles.create();
							title.text = "Youtube頻道組成成分";
							title.fontSize = 20;
							title.fontFamily="微軟正黑體"

							}); // end am4core.ready()

						},
						error : function() {
							$('#returndata').text("error");
						}
					});
	
			$.ajax({
					//几个参数需要注意一下
						type: "POST",//方法类型
						dataType: "json",//预期服务器返回的数据类型
						url: "process.php" ,//url
						data: $('#idForm').serialize(),
						success: function (result) {
							data=JSON.stringify(result)
							$('#returndata').text(data);
							data=data.replace(/viewer/g, "value");
							data=JSON.parse(data);
							$('#returndata').text(data);

							am4core.ready(function() {

							// Themes begin
							am4core.useTheme(am4themes_animated);
							// Themes end

							// Create chart instance
							var chart = am4core.create("chartdiv", am4charts.XYChart);

							// Add data
							chart.data =data;
							// Set input format for the dates
							chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

							// Create axes
							var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
							var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

							// Create series
							var series = chart.series.push(new am4charts.LineSeries());
							series.dataFields.valueY = "value";
							series.dataFields.dateX = "date";
							series.tooltipText = "{title}"
							series.strokeWidth = 2;
							series.minBulletDistance = 15;

							// Drop-shaped tooltips
							series.tooltip.background.cornerRadius = 20;
							series.tooltip.background.strokeOpacity = 0;
							series.tooltip.pointerOrientation = "vertical";
							series.tooltip.label.minWidth = 40;
							series.tooltip.label.minHeight = 40;
							series.tooltip.label.textAlign = "middle";
							series.tooltip.label.textValign = "middle";

							// Make bullets grow on hover
							var bullet = series.bullets.push(new am4charts.CircleBullet());
							bullet.circle.strokeWidth = 2;
							bullet.circle.radius = 4;
							bullet.circle.fill = am4core.color("#fff");

							var bullethover = bullet.states.create("hover");
							bullethover.properties.scale = 1.3;

							// Make a panning cursor
							chart.cursor = new am4charts.XYCursor();
							chart.cursor.behavior = "panXY";
							chart.cursor.xAxis = dateAxis;
							chart.cursor.snapToSeries = series;

							// Create vertical scrollbar and place it before the value axis
							chart.scrollbarY = new am4core.Scrollbar();
							chart.scrollbarY.parent = chart.leftAxesContainer;
							chart.scrollbarY.toBack();

							// Create a horizontal scrollbar with previe and place it underneath the date axis
							chart.scrollbarX = new am4charts.XYChartScrollbar();
							chart.scrollbarX.series.push(series);
							chart.scrollbarX.parent = chart.bottomAxesContainer;

							dateAxis.start = 0.79;
							dateAxis.keepSelection = true;

							chart.title="{yName}";


							});
						},
							error : function() {
							$('#returndata').text("error");
						}
					});
					
					
        }
//-------------------------------------------第二個按鈕一點-----------------------------------------------------------------------------
	   function login() {
		   $.ajax({
					//几个参数需要注意一下
						type: "POST",//方法类型
						dataType: "json",//预期服务器返回的数据类型
						url: "process4.php" ,//url
						data: $('#idForm').serialize(),
						success: function (result) {
							data=result;
							
							am4core.ready(function() {

// Themes begin
							am4core.useTheme(am4themes_animated);
							// Themes end

							// Create chart instance
							var chart = am4core.create("chartdiv3", am4charts.PieChart);

							// Add data
							chart.data = data;

							// Add and configure Series
							var pieSeries = chart.series.push(new am4charts.PieSeries());
							pieSeries.dataFields.value = "count";
							pieSeries.dataFields.category = "class";
							pieSeries.slices.template.stroke = am4core.color("#fff");
							pieSeries.slices.template.strokeWidth = 2;
							pieSeries.slices.template.strokeOpacity = 1;

							// This creates initial animation
							pieSeries.hiddenState.properties.opacity = 1;
							pieSeries.hiddenState.properties.endAngle = -90;
							pieSeries.hiddenState.properties.startAngle = -90;
								
							var title = chart.titles.create();
							title.text = "影片數量(支)";
							title.fontSize = 20;
							title.fontFamily="微軟正黑體"

							}); // end am4core.ready()

							
						},
							error : function() {
							$('#returndata').text("error");
						}
					});
		   
		   $.ajax({
					//几个参数需要注意一下
						type: "POST",//方法类型
						dataType: "json",//预期服务器返回的数据类型
						url: "process5.php" ,//url
						data: $('#idForm').serialize(),
						success: function (result) {
							data=result;
							
							am4core.ready(function() {

// Themes begin
							am4core.useTheme(am4themes_animated);
							// Themes end

							// Create chart instance
							var chart = am4core.create("chartdiv4", am4charts.PieChart);

							// Add data
							chart.data = data;

							// Add and configure Series
							var pieSeries = chart.series.push(new am4charts.PieSeries());
							pieSeries.dataFields.value = "total";
							pieSeries.dataFields.category = "class";
							pieSeries.slices.template.stroke = am4core.color("#fff");
							pieSeries.slices.template.strokeWidth = 2;
							pieSeries.slices.template.strokeOpacity = 1;

							// This creates initial animation
							pieSeries.hiddenState.properties.opacity = 1;
							pieSeries.hiddenState.properties.endAngle = -90;
							pieSeries.hiddenState.properties.startAngle = -90;
								
							var title = chart.titles.create();
							title.text = "觀看人數(次)";
							title.fontSize = 20;
							title.fontFamily="微軟正黑體"

							}); // end am4core.ready()

							
						},
							error : function() {
							$('#returndata').text("error");
						}
					});
		   
            
        }

//-------------------------------------------網頁一開-----------------------------------------------------------------------------

am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_material);
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv5", am4charts.XYChart);

// Add data
chart.data = [{"month":"2006JAN","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"0","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2006Feb","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"0","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2006Mar","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"0","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2006Apr","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"0","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2006May","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"0","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2006Jun","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"0","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2006Jul","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"0","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2006Aug","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"0","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2006Sep","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"0","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2006Oct","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"0","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2006Nov","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"3","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"1"},{"month":"2006Dec","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"3","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2007JAN","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"2","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2007Feb","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"2","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2007Mar","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"3","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2007Apr","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"3","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2007May","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"2","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2007Jun","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"0","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2007Jul","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"1","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2007Aug","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"6","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2007Sep","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"10","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2007Oct","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"4","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2007Nov","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"1","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2007Dec","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"9","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2008JAN","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"1","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2008Feb","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"2","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2008Mar","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"1","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2008Apr","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"0","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2008May","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"3","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2008Jun","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"9","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2008Jul","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"3","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2008Aug","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"2","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2008Sep","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"0","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2008Oct","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"1","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2008Nov","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"0","\u97f3\u6a02":"1","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2008Dec","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"5","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2009JAN","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"2","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"1"},{"month":"2009Feb","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"0","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2009Mar","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"2","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"1"},{"month":"2009Apr","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"0","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2009May","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"0","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"1"},{"month":"2009Jun","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"6","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"1"},{"month":"2009Jul","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"7","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"2"},{"month":"2009Aug","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"1","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2009Sep","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"0","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2009Oct","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"0","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"2"},{"month":"2009Nov","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"4","\u97f3\u6a02":"1","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2009Dec","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"2","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2010JAN","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"2","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"1"},{"month":"2010Feb","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"1","\u5a1b\u6a02":"1","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2010Mar","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"0","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"1"},{"month":"2010Apr","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"1","\u5a1b\u6a02":"1","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"1"},{"month":"2010May","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"1","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"0","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"2"},{"month":"2010Jun","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"1","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2010Jul","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"3","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2010Aug","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"7","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"1"},{"month":"2010Sep","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"2","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2010Oct","\u904a\u6232":"37","\u958b\u7bb1":"0","\u7f8e\u98df":"2","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"1","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"19"},{"month":"2010Nov","\u904a\u6232":"84","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"2","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"2"},{"month":"2010Dec","\u904a\u6232":"46","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"1","\u97f3\u6a02":"1","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"2"},{"month":"2011JAN","\u904a\u6232":"17","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"3","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"2"},{"month":"2011Feb","\u904a\u6232":"21","\u958b\u7bb1":"2","\u7f8e\u98df":"1","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"6","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"9"},{"month":"2011Mar","\u904a\u6232":"23","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"2","\u97f3\u6a02":"2","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"4"},{"month":"2011Apr","\u904a\u6232":"18","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"1","\u5a1b\u6a02":"6","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"3"},{"month":"2011May","\u904a\u6232":"25","\u958b\u7bb1":"1","\u7f8e\u98df":"0","\u65c5\u904a":"2","\u65e5\u5e38":"1","\u5a1b\u6a02":"1","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2011Jun","\u904a\u6232":"14","\u958b\u7bb1":"2","\u7f8e\u98df":"1","\u65c5\u904a":"2","\u65e5\u5e38":"0","\u5a1b\u6a02":"1","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"6"},{"month":"2011Jul","\u904a\u6232":"14","\u958b\u7bb1":"1","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"0","\u5a1b\u6a02":"6","\u97f3\u6a02":"2","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"2"},{"month":"2011Aug","\u904a\u6232":"9","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"2","\u65e5\u5e38":"2","\u5a1b\u6a02":"16","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2011Sep","\u904a\u6232":"12","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"1","\u65e5\u5e38":"0","\u5a1b\u6a02":"6","\u97f3\u6a02":"1","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"1"},{"month":"2011Oct","\u904a\u6232":"1","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"1","\u65e5\u5e38":"1","\u5a1b\u6a02":"5","\u97f3\u6a02":"1","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2011Nov","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"1","\u65c5\u904a":"0","\u65e5\u5e38":"1","\u5a1b\u6a02":"5","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"3"},{"month":"2011Dec","\u904a\u6232":"1","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"2","\u5a1b\u6a02":"4","\u97f3\u6a02":"1","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"5"},{"month":"2012JAN","\u904a\u6232":"1","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"1","\u65e5\u5e38":"6","\u5a1b\u6a02":"2","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"3"},{"month":"2012Feb","\u904a\u6232":"10","\u958b\u7bb1":"0","\u7f8e\u98df":"1","\u65c5\u904a":"1","\u65e5\u5e38":"3","\u5a1b\u6a02":"7","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"3"},{"month":"2012Mar","\u904a\u6232":"6","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"1","\u65e5\u5e38":"5","\u5a1b\u6a02":"11","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"8"},{"month":"2012Apr","\u904a\u6232":"16","\u958b\u7bb1":"0","\u7f8e\u98df":"3","\u65c5\u904a":"1","\u65e5\u5e38":"5","\u5a1b\u6a02":"26","\u97f3\u6a02":"2","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"1","\u6559\u5b78":"0","\u5176\u4ed6":"2"},{"month":"2012May","\u904a\u6232":"14","\u958b\u7bb1":"0","\u7f8e\u98df":"5","\u65c5\u904a":"0","\u65e5\u5e38":"10","\u5a1b\u6a02":"18","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"2","\u6559\u5b78":"0","\u5176\u4ed6":"1"},{"month":"2012Jun","\u904a\u6232":"0","\u958b\u7bb1":"0","\u7f8e\u98df":"5","\u65c5\u904a":"0","\u65e5\u5e38":"6","\u5a1b\u6a02":"20","\u97f3\u6a02":"1","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"1","\u6559\u5b78":"0","\u5176\u4ed6":"1"},{"month":"2012Jul","\u904a\u6232":"2","\u958b\u7bb1":"0","\u7f8e\u98df":"2","\u65c5\u904a":"1","\u65e5\u5e38":"8","\u5a1b\u6a02":"21","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"1","\u6559\u5b78":"0","\u5176\u4ed6":"7"},{"month":"2012Aug","\u904a\u6232":"5","\u958b\u7bb1":"0","\u7f8e\u98df":"2","\u65c5\u904a":"1","\u65e5\u5e38":"12","\u5a1b\u6a02":"22","\u97f3\u6a02":"5","\u77e5\u8b58":"1","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"14"},{"month":"2012Sep","\u904a\u6232":"1","\u958b\u7bb1":"0","\u7f8e\u98df":"4","\u65c5\u904a":"0","\u65e5\u5e38":"9","\u5a1b\u6a02":"35","\u97f3\u6a02":"5","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"6"},{"month":"2012Oct","\u904a\u6232":"21","\u958b\u7bb1":"0","\u7f8e\u98df":"2","\u65c5\u904a":"0","\u65e5\u5e38":"10","\u5a1b\u6a02":"41","\u97f3\u6a02":"1","\u77e5\u8b58":"2","\u5f69\u599d":"0","\u5b97\u6559":"1","\u6559\u5b78":"0","\u5176\u4ed6":"3"},{"month":"2012Nov","\u904a\u6232":"4","\u958b\u7bb1":"0","\u7f8e\u98df":"4","\u65c5\u904a":"3","\u65e5\u5e38":"7","\u5a1b\u6a02":"26","\u97f3\u6a02":"3","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"1","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2012Dec","\u904a\u6232":"1","\u958b\u7bb1":"0","\u7f8e\u98df":"2","\u65c5\u904a":"1","\u65e5\u5e38":"10","\u5a1b\u6a02":"22","\u97f3\u6a02":"3","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"6"},{"month":"2013JAN","\u904a\u6232":"4","\u958b\u7bb1":"0","\u7f8e\u98df":"3","\u65c5\u904a":"0","\u65e5\u5e38":"6","\u5a1b\u6a02":"29","\u97f3\u6a02":"2","\u77e5\u8b58":"0","\u5f69\u599d":"1","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"1"},{"month":"2013Feb","\u904a\u6232":"12","\u958b\u7bb1":"0","\u7f8e\u98df":"1","\u65c5\u904a":"1","\u65e5\u5e38":"7","\u5a1b\u6a02":"22","\u97f3\u6a02":"3","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"1"},{"month":"2013Mar","\u904a\u6232":"10","\u958b\u7bb1":"0","\u7f8e\u98df":"3","\u65c5\u904a":"2","\u65e5\u5e38":"7","\u5a1b\u6a02":"24","\u97f3\u6a02":"1","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"1"},{"month":"2013Apr","\u904a\u6232":"6","\u958b\u7bb1":"1","\u7f8e\u98df":"2","\u65c5\u904a":"0","\u65e5\u5e38":"7","\u5a1b\u6a02":"30","\u97f3\u6a02":"2","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"6"},{"month":"2013May","\u904a\u6232":"5","\u958b\u7bb1":"0","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"6","\u5a1b\u6a02":"30","\u97f3\u6a02":"4","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"4"},{"month":"2013Jun","\u904a\u6232":"9","\u958b\u7bb1":"0","\u7f8e\u98df":"3","\u65c5\u904a":"0","\u65e5\u5e38":"1","\u5a1b\u6a02":"27","\u97f3\u6a02":"2","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"9"},{"month":"2013Jul","\u904a\u6232":"3","\u958b\u7bb1":"0","\u7f8e\u98df":"3","\u65c5\u904a":"2","\u65e5\u5e38":"3","\u5a1b\u6a02":"31","\u97f3\u6a02":"3","\u77e5\u8b58":"0","\u5f69\u599d":"3","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"5"},{"month":"2013Aug","\u904a\u6232":"8","\u958b\u7bb1":"0","\u7f8e\u98df":"2","\u65c5\u904a":"2","\u65e5\u5e38":"8","\u5a1b\u6a02":"38","\u97f3\u6a02":"3","\u77e5\u8b58":"0","\u5f69\u599d":"1","\u5b97\u6559":"1","\u6559\u5b78":"0","\u5176\u4ed6":"5"},{"month":"2013Sep","\u904a\u6232":"3","\u958b\u7bb1":"0","\u7f8e\u98df":"2","\u65c5\u904a":"4","\u65e5\u5e38":"7","\u5a1b\u6a02":"31","\u97f3\u6a02":"5","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"4"},{"month":"2013Oct","\u904a\u6232":"19","\u958b\u7bb1":"0","\u7f8e\u98df":"2","\u65c5\u904a":"1","\u65e5\u5e38":"6","\u5a1b\u6a02":"25","\u97f3\u6a02":"5","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"3","\u6559\u5b78":"0","\u5176\u4ed6":"3"},{"month":"2013Nov","\u904a\u6232":"5","\u958b\u7bb1":"0","\u7f8e\u98df":"1","\u65c5\u904a":"2","\u65e5\u5e38":"4","\u5a1b\u6a02":"33","\u97f3\u6a02":"2","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"1","\u6559\u5b78":"0","\u5176\u4ed6":"9"},{"month":"2013Dec","\u904a\u6232":"2","\u958b\u7bb1":"1","\u7f8e\u98df":"0","\u65c5\u904a":"0","\u65e5\u5e38":"6","\u5a1b\u6a02":"36","\u97f3\u6a02":"2","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"1","\u6559\u5b78":"0","\u5176\u4ed6":"8"},{"month":"2014JAN","\u904a\u6232":"9","\u958b\u7bb1":"0","\u7f8e\u98df":"1","\u65c5\u904a":"0","\u65e5\u5e38":"7","\u5a1b\u6a02":"35","\u97f3\u6a02":"1","\u77e5\u8b58":"0","\u5f69\u599d":"2","\u5b97\u6559":"1","\u6559\u5b78":"0","\u5176\u4ed6":"8"},{"month":"2014Feb","\u904a\u6232":"0","\u958b\u7bb1":"1","\u7f8e\u98df":"3","\u65c5\u904a":"1","\u65e5\u5e38":"7","\u5a1b\u6a02":"38","\u97f3\u6a02":"1","\u77e5\u8b58":"0","\u5f69\u599d":"0","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"0"},{"month":"2014Mar","\u904a\u6232":"1","\u958b\u7bb1":"0","\u7f8e\u98df":"1","\u65c5\u904a":"0","\u65e5\u5e38":"6","\u5a1b\u6a02":"34","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"5","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"3"},{"month":"2014Apr","\u904a\u6232":"6","\u958b\u7bb1":"1","\u7f8e\u98df":"0","\u65c5\u904a":"2","\u65e5\u5e38":"9","\u5a1b\u6a02":"32","\u97f3\u6a02":"5","\u77e5\u8b58":"1","\u5f69\u599d":"7","\u5b97\u6559":"1","\u6559\u5b78":"0","\u5176\u4ed6":"6"},{"month":"2014May","\u904a\u6232":"2","\u958b\u7bb1":"1","\u7f8e\u98df":"1","\u65c5\u904a":"1","\u65e5\u5e38":"6","\u5a1b\u6a02":"32","\u97f3\u6a02":"3","\u77e5\u8b58":"0","\u5f69\u599d":"11","\u5b97\u6559":"1","\u6559\u5b78":"0","\u5176\u4ed6":"5"},{"month":"2014Jun","\u904a\u6232":"9","\u958b\u7bb1":"0","\u7f8e\u98df":"1","\u65c5\u904a":"1","\u65e5\u5e38":"5","\u5a1b\u6a02":"29","\u97f3\u6a02":"6","\u77e5\u8b58":"0","\u5f69\u599d":"11","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"4"},{"month":"2014Jul","\u904a\u6232":"25","\u958b\u7bb1":"0","\u7f8e\u98df":"1","\u65c5\u904a":"0","\u65e5\u5e38":"6","\u5a1b\u6a02":"32","\u97f3\u6a02":"1","\u77e5\u8b58":"0","\u5f69\u599d":"11","\u5b97\u6559":"1","\u6559\u5b78":"0","\u5176\u4ed6":"5"},{"month":"2014Aug","\u904a\u6232":"25","\u958b\u7bb1":"0","\u7f8e\u98df":"1","\u65c5\u904a":"0","\u65e5\u5e38":"6","\u5a1b\u6a02":"35","\u97f3\u6a02":"2","\u77e5\u8b58":"0","\u5f69\u599d":"13","\u5b97\u6559":"1","\u6559\u5b78":"0","\u5176\u4ed6":"11"},{"month":"2014Sep","\u904a\u6232":"7","\u958b\u7bb1":"0","\u7f8e\u98df":"5","\u65c5\u904a":"1","\u65e5\u5e38":"4","\u5a1b\u6a02":"29","\u97f3\u6a02":"3","\u77e5\u8b58":"0","\u5f69\u599d":"13","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"4"},{"month":"2014Oct","\u904a\u6232":"26","\u958b\u7bb1":"0","\u7f8e\u98df":"1","\u65c5\u904a":"2","\u65e5\u5e38":"2","\u5a1b\u6a02":"35","\u97f3\u6a02":"0","\u77e5\u8b58":"0","\u5f69\u599d":"12","\u5b97\u6559":"1","\u6559\u5b78":"0","\u5176\u4ed6":"3"},{"month":"2014Nov","\u904a\u6232":"17","\u958b\u7bb1":"0","\u7f8e\u98df":"3","\u65c5\u904a":"0","\u65e5\u5e38":"8","\u5a1b\u6a02":"42","\u97f3\u6a02":"1","\u77e5\u8b58":"0","\u5f69\u599d":"13","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"2"},{"month":"2014Dec","\u904a\u6232":"22","\u958b\u7bb1":"0","\u7f8e\u98df":"1","\u65c5\u904a":"0","\u65e5\u5e38":"4","\u5a1b\u6a02":"47","\u97f3\u6a02":"3","\u77e5\u8b58":"0","\u5f69\u599d":"14","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"1"},{"month":"2015JAN","\u904a\u6232":"31","\u958b\u7bb1":"0","\u7f8e\u98df":"1","\u65c5\u904a":"1","\u65e5\u5e38":"7","\u5a1b\u6a02":"58","\u97f3\u6a02":"5","\u77e5\u8b58":"1","\u5f69\u599d":"17","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"10"},{"month":"2015Feb","\u904a\u6232":"68","\u958b\u7bb1":"0","\u7f8e\u98df":"2","\u65c5\u904a":"1","\u65e5\u5e38":"4","\u5a1b\u6a02":"41","\u97f3\u6a02":"4","\u77e5\u8b58":"0","\u5f69\u599d":"18","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"6"},{"month":"2015Mar","\u904a\u6232":"57","\u958b\u7bb1":"0","\u7f8e\u98df":"1","\u65c5\u904a":"4","\u65e5\u5e38":"4","\u5a1b\u6a02":"54","\u97f3\u6a02":"3","\u77e5\u8b58":"3","\u5f69\u599d":"20","\u5b97\u6559":"1","\u6559\u5b78":"0","\u5176\u4ed6":"3"},{"month":"2015Apr","\u904a\u6232":"39","\u958b\u7bb1":"0","\u7f8e\u98df":"1","\u65c5\u904a":"7","\u65e5\u5e38":"4","\u5a1b\u6a02":"88","\u97f3\u6a02":"1","\u77e5\u8b58":"5","\u5f69\u599d":"19","\u5b97\u6559":"1","\u6559\u5b78":"0","\u5176\u4ed6":"2"},{"month":"2015May","\u904a\u6232":"52","\u958b\u7bb1":"0","\u7f8e\u98df":"5","\u65c5\u904a":"9","\u65e5\u5e38":"5","\u5a1b\u6a02":"79","\u97f3\u6a02":"2","\u77e5\u8b58":"5","\u5f69\u599d":"25","\u5b97\u6559":"1","\u6559\u5b78":"0","\u5176\u4ed6":"6"},{"month":"2015Jun","\u904a\u6232":"63","\u958b\u7bb1":"0","\u7f8e\u98df":"1","\u65c5\u904a":"3","\u65e5\u5e38":"2","\u5a1b\u6a02":"92","\u97f3\u6a02":"2","\u77e5\u8b58":"3","\u5f69\u599d":"21","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"5"},{"month":"2015Jul","\u904a\u6232":"71","\u958b\u7bb1":"2","\u7f8e\u98df":"12","\u65c5\u904a":"10","\u65e5\u5e38":"1","\u5a1b\u6a02":"157","\u97f3\u6a02":"5","\u77e5\u8b58":"4","\u5f69\u599d":"17","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"12"},{"month":"2015Aug","\u904a\u6232":"19","\u958b\u7bb1":"0","\u7f8e\u98df":"19","\u65c5\u904a":"9","\u65e5\u5e38":"7","\u5a1b\u6a02":"130","\u97f3\u6a02":"0","\u77e5\u8b58":"1","\u5f69\u599d":"21","\u5b97\u6559":"0","\u6559\u5b78":"16","\u5176\u4ed6":"60"},{"month":"2015Sep","\u904a\u6232":"33","\u958b\u7bb1":"1","\u7f8e\u98df":"8","\u65c5\u904a":"3","\u65e5\u5e38":"4","\u5a1b\u6a02":"104","\u97f3\u6a02":"8","\u77e5\u8b58":"2","\u5f69\u599d":"20","\u5b97\u6559":"0","\u6559\u5b78":"51","\u5176\u4ed6":"20"},{"month":"2015Oct","\u904a\u6232":"55","\u958b\u7bb1":"2","\u7f8e\u98df":"16","\u65c5\u904a":"3","\u65e5\u5e38":"5","\u5a1b\u6a02":"109","\u97f3\u6a02":"2","\u77e5\u8b58":"0","\u5f69\u599d":"16","\u5b97\u6559":"1","\u6559\u5b78":"20","\u5176\u4ed6":"4"},{"month":"2015Nov","\u904a\u6232":"47","\u958b\u7bb1":"0","\u7f8e\u98df":"15","\u65c5\u904a":"1","\u65e5\u5e38":"5","\u5a1b\u6a02":"108","\u97f3\u6a02":"4","\u77e5\u8b58":"1","\u5f69\u599d":"17","\u5b97\u6559":"0","\u6559\u5b78":"10","\u5176\u4ed6":"6"},{"month":"2015Dec","\u904a\u6232":"72","\u958b\u7bb1":"0","\u7f8e\u98df":"18","\u65c5\u904a":"2","\u65e5\u5e38":"5","\u5a1b\u6a02":"125","\u97f3\u6a02":"11","\u77e5\u8b58":"2","\u5f69\u599d":"21","\u5b97\u6559":"1","\u6559\u5b78":"1","\u5176\u4ed6":"8"},{"month":"2016JAN","\u904a\u6232":"70","\u958b\u7bb1":"0","\u7f8e\u98df":"21","\u65c5\u904a":"0","\u65e5\u5e38":"3","\u5a1b\u6a02":"84","\u97f3\u6a02":"21","\u77e5\u8b58":"3","\u5f69\u599d":"16","\u5b97\u6559":"0","\u6559\u5b78":"2","\u5176\u4ed6":"12"},{"month":"2016Feb","\u904a\u6232":"34","\u958b\u7bb1":"0","\u7f8e\u98df":"19","\u65c5\u904a":"2","\u65e5\u5e38":"6","\u5a1b\u6a02":"261","\u97f3\u6a02":"18","\u77e5\u8b58":"6","\u5f69\u599d":"20","\u5b97\u6559":"1","\u6559\u5b78":"2","\u5176\u4ed6":"12"},{"month":"2016Mar","\u904a\u6232":"59","\u958b\u7bb1":"0","\u7f8e\u98df":"19","\u65c5\u904a":"0","\u65e5\u5e38":"7","\u5a1b\u6a02":"124","\u97f3\u6a02":"20","\u77e5\u8b58":"6","\u5f69\u599d":"12","\u5b97\u6559":"1","\u6559\u5b78":"0","\u5176\u4ed6":"9"},{"month":"2016Apr","\u904a\u6232":"27","\u958b\u7bb1":"1","\u7f8e\u98df":"20","\u65c5\u904a":"2","\u65e5\u5e38":"11","\u5a1b\u6a02":"126","\u97f3\u6a02":"24","\u77e5\u8b58":"7","\u5f69\u599d":"18","\u5b97\u6559":"1","\u6559\u5b78":"1","\u5176\u4ed6":"11"},{"month":"2016May","\u904a\u6232":"55","\u958b\u7bb1":"2","\u7f8e\u98df":"27","\u65c5\u904a":"2","\u65e5\u5e38":"13","\u5a1b\u6a02":"178","\u97f3\u6a02":"23","\u77e5\u8b58":"8","\u5f69\u599d":"27","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"8"},{"month":"2016Jun","\u904a\u6232":"51","\u958b\u7bb1":"2","\u7f8e\u98df":"35","\u65c5\u904a":"7","\u65e5\u5e38":"15","\u5a1b\u6a02":"196","\u97f3\u6a02":"27","\u77e5\u8b58":"8","\u5f69\u599d":"26","\u5b97\u6559":"1","\u6559\u5b78":"0","\u5176\u4ed6":"15"},{"month":"2016Jul","\u904a\u6232":"36","\u958b\u7bb1":"5","\u7f8e\u98df":"41","\u65c5\u904a":"7","\u65e5\u5e38":"25","\u5a1b\u6a02":"236","\u97f3\u6a02":"30","\u77e5\u8b58":"14","\u5f69\u599d":"40","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"17"},{"month":"2016Aug","\u904a\u6232":"51","\u958b\u7bb1":"5","\u7f8e\u98df":"43","\u65c5\u904a":"1","\u65e5\u5e38":"25","\u5a1b\u6a02":"232","\u97f3\u6a02":"27","\u77e5\u8b58":"12","\u5f69\u599d":"21","\u5b97\u6559":"0","\u6559\u5b78":"1","\u5176\u4ed6":"10"},{"month":"2016Sep","\u904a\u6232":"43","\u958b\u7bb1":"2","\u7f8e\u98df":"31","\u65c5\u904a":"6","\u65e5\u5e38":"18","\u5a1b\u6a02":"256","\u97f3\u6a02":"25","\u77e5\u8b58":"7","\u5f69\u599d":"42","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"10"},{"month":"2016Oct","\u904a\u6232":"37","\u958b\u7bb1":"8","\u7f8e\u98df":"33","\u65c5\u904a":"6","\u65e5\u5e38":"21","\u5a1b\u6a02":"204","\u97f3\u6a02":"37","\u77e5\u8b58":"8","\u5f69\u599d":"40","\u5b97\u6559":"1","\u6559\u5b78":"0","\u5176\u4ed6":"11"},{"month":"2016Nov","\u904a\u6232":"40","\u958b\u7bb1":"8","\u7f8e\u98df":"45","\u65c5\u904a":"6","\u65e5\u5e38":"23","\u5a1b\u6a02":"242","\u97f3\u6a02":"25","\u77e5\u8b58":"8","\u5f69\u599d":"29","\u5b97\u6559":"1","\u6559\u5b78":"1","\u5176\u4ed6":"10"},{"month":"2016Dec","\u904a\u6232":"49","\u958b\u7bb1":"10","\u7f8e\u98df":"47","\u65c5\u904a":"9","\u65e5\u5e38":"17","\u5a1b\u6a02":"264","\u97f3\u6a02":"21","\u77e5\u8b58":"8","\u5f69\u599d":"32","\u5b97\u6559":"1","\u6559\u5b78":"0","\u5176\u4ed6":"19"},{"month":"2017JAN","\u904a\u6232":"31","\u958b\u7bb1":"11","\u7f8e\u98df":"38","\u65c5\u904a":"4","\u65e5\u5e38":"30","\u5a1b\u6a02":"209","\u97f3\u6a02":"18","\u77e5\u8b58":"5","\u5f69\u599d":"40","\u5b97\u6559":"1","\u6559\u5b78":"7","\u5176\u4ed6":"11"},{"month":"2017Feb","\u904a\u6232":"40","\u958b\u7bb1":"3","\u7f8e\u98df":"23","\u65c5\u904a":"17","\u65e5\u5e38":"32","\u5a1b\u6a02":"182","\u97f3\u6a02":"22","\u77e5\u8b58":"4","\u5f69\u599d":"46","\u5b97\u6559":"0","\u6559\u5b78":"52","\u5176\u4ed6":"17"},{"month":"2017Mar","\u904a\u6232":"31","\u958b\u7bb1":"16","\u7f8e\u98df":"38","\u65c5\u904a":"5","\u65e5\u5e38":"32","\u5a1b\u6a02":"228","\u97f3\u6a02":"24","\u77e5\u8b58":"5","\u5f69\u599d":"58","\u5b97\u6559":"0","\u6559\u5b78":"15","\u5176\u4ed6":"13"},{"month":"2017Apr","\u904a\u6232":"40","\u958b\u7bb1":"10","\u7f8e\u98df":"38","\u65c5\u904a":"10","\u65e5\u5e38":"28","\u5a1b\u6a02":"203","\u97f3\u6a02":"22","\u77e5\u8b58":"7","\u5f69\u599d":"48","\u5b97\u6559":"0","\u6559\u5b78":"13","\u5176\u4ed6":"15"},{"month":"2017May","\u904a\u6232":"33","\u958b\u7bb1":"13","\u7f8e\u98df":"40","\u65c5\u904a":"9","\u65e5\u5e38":"38","\u5a1b\u6a02":"212","\u97f3\u6a02":"22","\u77e5\u8b58":"6","\u5f69\u599d":"54","\u5b97\u6559":"1","\u6559\u5b78":"9","\u5176\u4ed6":"21"},{"month":"2017Jun","\u904a\u6232":"42","\u958b\u7bb1":"8","\u7f8e\u98df":"33","\u65c5\u904a":"15","\u65e5\u5e38":"31","\u5a1b\u6a02":"192","\u97f3\u6a02":"22","\u77e5\u8b58":"8","\u5f69\u599d":"51","\u5b97\u6559":"3","\u6559\u5b78":"6","\u5176\u4ed6":"29"},{"month":"2017Jul","\u904a\u6232":"45","\u958b\u7bb1":"7","\u7f8e\u98df":"27","\u65c5\u904a":"7","\u65e5\u5e38":"36","\u5a1b\u6a02":"203","\u97f3\u6a02":"26","\u77e5\u8b58":"3","\u5f69\u599d":"64","\u5b97\u6559":"0","\u6559\u5b78":"3","\u5176\u4ed6":"22"},{"month":"2017Aug","\u904a\u6232":"54","\u958b\u7bb1":"3","\u7f8e\u98df":"33","\u65c5\u904a":"8","\u65e5\u5e38":"38","\u5a1b\u6a02":"214","\u97f3\u6a02":"22","\u77e5\u8b58":"5","\u5f69\u599d":"58","\u5b97\u6559":"2","\u6559\u5b78":"2","\u5176\u4ed6":"6"},{"month":"2017Sep","\u904a\u6232":"44","\u958b\u7bb1":"9","\u7f8e\u98df":"32","\u65c5\u904a":"3","\u65e5\u5e38":"44","\u5a1b\u6a02":"213","\u97f3\u6a02":"23","\u77e5\u8b58":"6","\u5f69\u599d":"57","\u5b97\u6559":"0","\u6559\u5b78":"24","\u5176\u4ed6":"9"},{"month":"2017Oct","\u904a\u6232":"41","\u958b\u7bb1":"9","\u7f8e\u98df":"40","\u65c5\u904a":"5","\u65e5\u5e38":"40","\u5a1b\u6a02":"233","\u97f3\u6a02":"27","\u77e5\u8b58":"5","\u5f69\u599d":"50","\u5b97\u6559":"6","\u6559\u5b78":"22","\u5176\u4ed6":"16"},{"month":"2017Nov","\u904a\u6232":"39","\u958b\u7bb1":"12","\u7f8e\u98df":"38","\u65c5\u904a":"9","\u65e5\u5e38":"54","\u5a1b\u6a02":"214","\u97f3\u6a02":"17","\u77e5\u8b58":"6","\u5f69\u599d":"48","\u5b97\u6559":"1","\u6559\u5b78":"18","\u5176\u4ed6":"19"},{"month":"2017Dec","\u904a\u6232":"17","\u958b\u7bb1":"17","\u7f8e\u98df":"35","\u65c5\u904a":"7","\u65e5\u5e38":"46","\u5a1b\u6a02":"255","\u97f3\u6a02":"30","\u77e5\u8b58":"2","\u5f69\u599d":"44","\u5b97\u6559":"0","\u6559\u5b78":"2","\u5176\u4ed6":"20"},{"month":"2018JAN","\u904a\u6232":"17","\u958b\u7bb1":"14","\u7f8e\u98df":"39","\u65c5\u904a":"12","\u65e5\u5e38":"48","\u5a1b\u6a02":"197","\u97f3\u6a02":"18","\u77e5\u8b58":"2","\u5f69\u599d":"44","\u5b97\u6559":"1","\u6559\u5b78":"3","\u5176\u4ed6":"18"},{"month":"2018Feb","\u904a\u6232":"23","\u958b\u7bb1":"14","\u7f8e\u98df":"29","\u65c5\u904a":"6","\u65e5\u5e38":"42","\u5a1b\u6a02":"158","\u97f3\u6a02":"18","\u77e5\u8b58":"3","\u5f69\u599d":"38","\u5b97\u6559":"2","\u6559\u5b78":"3","\u5176\u4ed6":"16"},{"month":"2018Mar","\u904a\u6232":"17","\u958b\u7bb1":"5","\u7f8e\u98df":"34","\u65c5\u904a":"11","\u65e5\u5e38":"41","\u5a1b\u6a02":"212","\u97f3\u6a02":"16","\u77e5\u8b58":"6","\u5f69\u599d":"32","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"20"},{"month":"2018Apr","\u904a\u6232":"27","\u958b\u7bb1":"18","\u7f8e\u98df":"33","\u65c5\u904a":"6","\u65e5\u5e38":"28","\u5a1b\u6a02":"200","\u97f3\u6a02":"24","\u77e5\u8b58":"11","\u5f69\u599d":"43","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"17"},{"month":"2018May","\u904a\u6232":"34","\u958b\u7bb1":"17","\u7f8e\u98df":"31","\u65c5\u904a":"13","\u65e5\u5e38":"27","\u5a1b\u6a02":"221","\u97f3\u6a02":"22","\u77e5\u8b58":"11","\u5f69\u599d":"49","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"22"},{"month":"2018Jun","\u904a\u6232":"28","\u958b\u7bb1":"9","\u7f8e\u98df":"43","\u65c5\u904a":"8","\u65e5\u5e38":"43","\u5a1b\u6a02":"223","\u97f3\u6a02":"26","\u77e5\u8b58":"18","\u5f69\u599d":"50","\u5b97\u6559":"1","\u6559\u5b78":"0","\u5176\u4ed6":"13"},{"month":"2018Jul","\u904a\u6232":"32","\u958b\u7bb1":"7","\u7f8e\u98df":"42","\u65c5\u904a":"8","\u65e5\u5e38":"39","\u5a1b\u6a02":"226","\u97f3\u6a02":"23","\u77e5\u8b58":"14","\u5f69\u599d":"48","\u5b97\u6559":"1","\u6559\u5b78":"0","\u5176\u4ed6":"18"},{"month":"2018Aug","\u904a\u6232":"16","\u958b\u7bb1":"8","\u7f8e\u98df":"41","\u65c5\u904a":"10","\u65e5\u5e38":"43","\u5a1b\u6a02":"235","\u97f3\u6a02":"23","\u77e5\u8b58":"7","\u5f69\u599d":"44","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"10"},{"month":"2018Sep","\u904a\u6232":"22","\u958b\u7bb1":"7","\u7f8e\u98df":"43","\u65c5\u904a":"7","\u65e5\u5e38":"48","\u5a1b\u6a02":"204","\u97f3\u6a02":"25","\u77e5\u8b58":"8","\u5f69\u599d":"36","\u5b97\u6559":"1","\u6559\u5b78":"2","\u5176\u4ed6":"11"},{"month":"2018Oct","\u904a\u6232":"16","\u958b\u7bb1":"12","\u7f8e\u98df":"31","\u65c5\u904a":"11","\u65e5\u5e38":"38","\u5a1b\u6a02":"217","\u97f3\u6a02":"36","\u77e5\u8b58":"8","\u5f69\u599d":"39","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"7"},{"month":"2018Nov","\u904a\u6232":"15","\u958b\u7bb1":"11","\u7f8e\u98df":"39","\u65c5\u904a":"4","\u65e5\u5e38":"43","\u5a1b\u6a02":"206","\u97f3\u6a02":"17","\u77e5\u8b58":"5","\u5f69\u599d":"41","\u5b97\u6559":"0","\u6559\u5b78":"1","\u5176\u4ed6":"18"},{"month":"2018Dec","\u904a\u6232":"21","\u958b\u7bb1":"13","\u7f8e\u98df":"42","\u65c5\u904a":"11","\u65e5\u5e38":"46","\u5a1b\u6a02":"283","\u97f3\u6a02":"26","\u77e5\u8b58":"14","\u5f69\u599d":"55","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"16"},{"month":"2019JAN","\u904a\u6232":"20","\u958b\u7bb1":"13","\u7f8e\u98df":"36","\u65c5\u904a":"9","\u65e5\u5e38":"34","\u5a1b\u6a02":"225","\u97f3\u6a02":"19","\u77e5\u8b58":"6","\u5f69\u599d":"46","\u5b97\u6559":"0","\u6559\u5b78":"2","\u5176\u4ed6":"21"},{"month":"2019Feb","\u904a\u6232":"22","\u958b\u7bb1":"5","\u7f8e\u98df":"38","\u65c5\u904a":"10","\u65e5\u5e38":"37","\u5a1b\u6a02":"251","\u97f3\u6a02":"19","\u77e5\u8b58":"4","\u5f69\u599d":"38","\u5b97\u6559":"0","\u6559\u5b78":"2","\u5176\u4ed6":"9"},{"month":"2019Mar","\u904a\u6232":"30","\u958b\u7bb1":"2","\u7f8e\u98df":"27","\u65c5\u904a":"13","\u65e5\u5e38":"45","\u5a1b\u6a02":"225","\u97f3\u6a02":"21","\u77e5\u8b58":"17","\u5f69\u599d":"47","\u5b97\u6559":"0","\u6559\u5b78":"1","\u5176\u4ed6":"13"},{"month":"2019Apr","\u904a\u6232":"24","\u958b\u7bb1":"5","\u7f8e\u98df":"29","\u65c5\u904a":"7","\u65e5\u5e38":"32","\u5a1b\u6a02":"254","\u97f3\u6a02":"33","\u77e5\u8b58":"13","\u5f69\u599d":"33","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"12"},{"month":"2019May","\u904a\u6232":"23","\u958b\u7bb1":"8","\u7f8e\u98df":"23","\u65c5\u904a":"9","\u65e5\u5e38":"36","\u5a1b\u6a02":"237","\u97f3\u6a02":"82","\u77e5\u8b58":"13","\u5f69\u599d":"39","\u5b97\u6559":"0","\u6559\u5b78":"3","\u5176\u4ed6":"16"},{"month":"2019Jun","\u904a\u6232":"24","\u958b\u7bb1":"8","\u7f8e\u98df":"28","\u65c5\u904a":"3","\u65e5\u5e38":"42","\u5a1b\u6a02":"247","\u97f3\u6a02":"76","\u77e5\u8b58":"10","\u5f69\u599d":"47","\u5b97\u6559":"2","\u6559\u5b78":"0","\u5176\u4ed6":"24"},{"month":"2019Jul","\u904a\u6232":"25","\u958b\u7bb1":"14","\u7f8e\u98df":"36","\u65c5\u904a":"12","\u65e5\u5e38":"42","\u5a1b\u6a02":"312","\u97f3\u6a02":"78","\u77e5\u8b58":"12","\u5f69\u599d":"58","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"24"},{"month":"2019Aug","\u904a\u6232":"16","\u958b\u7bb1":"9","\u7f8e\u98df":"33","\u65c5\u904a":"14","\u65e5\u5e38":"38","\u5a1b\u6a02":"277","\u97f3\u6a02":"43","\u77e5\u8b58":"9","\u5f69\u599d":"64","\u5b97\u6559":"1","\u6559\u5b78":"0","\u5176\u4ed6":"17"},{"month":"2019Sep","\u904a\u6232":"19","\u958b\u7bb1":"17","\u7f8e\u98df":"39","\u65c5\u904a":"10","\u65e5\u5e38":"31","\u5a1b\u6a02":"224","\u97f3\u6a02":"56","\u77e5\u8b58":"3","\u5f69\u599d":"49","\u5b97\u6559":"0","\u6559\u5b78":"0","\u5176\u4ed6":"16"}];

// Create category axis
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "month";
categoryAxis.renderer.opposite = true;

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.inversed = false;
valueAxis.title.text = "Place taken";
valueAxis.renderer.minLabelPosition = 10;

// Create series
var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "娛樂";
series1.dataFields.categoryX = "month";
series1.name = "娛樂";
series1.strokeWidth = 3;
series1.bullets.push(new am4charts.CircleBullet());
series1.tooltipText = "{categoryX}{name}類型影片數量: {valueY}(支)";
series1.legendSettings.valueText = "{valueY}(支)";
series1.visible  = false;
	
var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "遊戲";
series2.dataFields.categoryX = "month";
series2.name = "遊戲";
series2.strokeWidth = 3;
series2.bullets.push(new am4charts.CircleBullet());
series2.tooltipText = "{categoryX}{name}類型影片數量: {valueY}(支)";
series2.legendSettings.valueText = "{valueY}(支)";
series2.visible  = false;

var series3 = chart.series.push(new am4charts.LineSeries());
series3.dataFields.valueY = "開箱";
series3.dataFields.categoryX = "month";
series3.name = '開箱';
series3.strokeWidth = 3;
series3.bullets.push(new am4charts.CircleBullet());
series3.tooltipText = "{categoryX}{name}類型影片數量: {valueY}(支)";
series3.legendSettings.valueText = "{valueY}(支)";
series3.visible  = false;
	
var series4 = chart.series.push(new am4charts.LineSeries());
series4.dataFields.valueY = "美食";
series4.dataFields.categoryX = "month";
series4.name = '美食';
series4.strokeWidth = 3;
series4.bullets.push(new am4charts.CircleBullet());
series4.tooltipText = "{categoryX}{name}類型影片數量: {valueY}(支)";
series4.legendSettings.valueText = "{valueY}(支)";
series4.visible  = false;

var series5 = chart.series.push(new am4charts.LineSeries());
series5.dataFields.valueY = "旅遊";
series5.dataFields.categoryX = "month";
series5.name = '旅遊';
series5.strokeWidth = 3;
series5.bullets.push(new am4charts.CircleBullet());
series5.tooltipText = "{categoryX}{name}類型影片數量: {valueY}(支)";
series5.legendSettings.valueText = "{valueY}(支)";
series5.visible  = false;

var series6 = chart.series.push(new am4charts.LineSeries());
series6.dataFields.valueY = "日常";
series6.dataFields.categoryX = "month";
series6.name = '日常';
series6.strokeWidth = 3;
series6.bullets.push(new am4charts.CircleBullet());
series6.tooltipText = "{categoryX}{name}類型影片數量: {valueY}(支)";
series6.legendSettings.valueText = "{valueY}(支)";
series6.visible  = false;

var series7 = chart.series.push(new am4charts.LineSeries());
series7.dataFields.valueY = "音樂";
series7.dataFields.categoryX = "month";
series7.name = '音樂';
series7.strokeWidth = 3;
series7.bullets.push(new am4charts.CircleBullet());
series7.tooltipText = "{categoryX}{name}類型影片數量: {valueY}(支)";
series7.legendSettings.valueText = "{valueY}(支)";
series7.visible  = false;

var series8 = chart.series.push(new am4charts.LineSeries());
series8.dataFields.valueY = "彩妝";
series8.dataFields.categoryX = "month";
series8.name = '彩妝';
series8.strokeWidth = 3;
series8.bullets.push(new am4charts.CircleBullet());
series8.tooltipText = "{categoryX}{name}類型影片數量: {valueY}(支)";
series8.legendSettings.valueText = "{valueY}(支)";
series8.visible  = false;

var series9 = chart.series.push(new am4charts.LineSeries());
series9.dataFields.valueY = "宗教";
series9.dataFields.categoryX = "month";
series9.name = '宗教';
series9.strokeWidth = 3;
series9.bullets.push(new am4charts.CircleBullet());
series9.tooltipText = "{categoryX}{name}類型影片數量: {valueY}(支)";
series9.legendSettings.valueText = "{valueY}(支)";
series9.visible  = false;

var series10 = chart.series.push(new am4charts.LineSeries());
series10.dataFields.valueY = "教學";
series10.dataFields.categoryX = "month";
series10.name = '教學';
series10.strokeWidth = 3;
series10.bullets.push(new am4charts.CircleBullet());
series10.tooltipText = "{categoryX}{name}類型影片數量: {valueY}(支)";
series10.legendSettings.valueText = "{valueY}(支)";
series10.visible  = false;

var series11 = chart.series.push(new am4charts.LineSeries());
series11.dataFields.valueY = "知識";
series11.dataFields.categoryX = "month";
series11.name = '知識';
series11.strokeWidth = 3;
series11.bullets.push(new am4charts.CircleBullet());
series11.tooltipText = "{categoryX}{name}類型影片數量: {valueY}(支)";
series11.legendSettings.valueText = "{valueY}(支)";
series11.visible  = false;

var series12 = chart.series.push(new am4charts.LineSeries());
series12.dataFields.valueY = "其他";
series12.dataFields.categoryX = "month";
series12.name = '其他';
series12.strokeWidth = 3;
series12.bullets.push(new am4charts.CircleBullet());
series12.tooltipText = "{categoryX}{name}類型影片數量: {valueY}(支)";
series12.legendSettings.valueText = "{valueY}(支)";
series12.visible  = false;



// Add chart cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "zoomY";

// Add legend
chart.legend = new am4charts.Legend();

}); // end am4core.ready()

am4core.ready(function() {;

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data
chart.data =[{"viewer":"2807","date":"2006-11-10","title":"\u4e2d Taiwan Trip 2004","yName":"Stopkiddinstudio"},{"viewer":"1075","date":"2006-11-11","title":"\u53cb\u8abc\u7bc7 - Japan Cookin' Carnival 03","yName":"Stopkiddinstudio"},{"viewer":"1864","date":"2006-11-15","title":"TW 4 Fantastic \u5c0f\u9b3c","yName":"Stopkiddinstudio"},{"viewer":"1710","date":"2006-11-29","title":"\u7f8e\u570b\u7bc7 - USA Trip 2005","yName":"Stopkiddinstudio"},{"viewer":"826","date":"2006-12-07","title":"\u5c0f\u9f9c\u79c0 - Vic Mixtape Vol.1","yName":"Stopkiddinstudio"},{"viewer":"527","date":"2006-12-22","title":"F.L.Y","yName":"Stopkiddinstudio"},{"viewer":"1856","date":"2006-12-31","title":"1 + 4(\u7981\u64ad-\u5f37\u5236\u6539\u7248)","yName":"Stopkiddinstudio"}];

// Set input format for the dates
chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

// Create axes
var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
var series = chart.series.push(new am4charts.LineSeries());
series.dataFields.valueY = "viewer";
series.dataFields.dateX = "date";
series.tooltipText = "{title}"
series.strokeWidth = 2;
series.minBulletDistance = 15;

// Drop-shaped tooltips
series.tooltip.background.cornerRadius = 20;
series.tooltip.background.strokeOpacity = 0;
series.tooltip.pointerOrientation = "vertical";
series.tooltip.label.minWidth = 40;
series.tooltip.label.minHeight = 40;
series.tooltip.label.textAlign = "middle";
series.tooltip.label.textValign = "middle";

// Make bullets grow on hover
var bullet = series.bullets.push(new am4charts.CircleBullet());
bullet.circle.strokeWidth = 2;
bullet.circle.radius = 4;
bullet.circle.fill = am4core.color("#fff");

var bullethover = bullet.states.create("hover");
bullethover.properties.scale = 1.3;

// Make a panning cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "panXY";
chart.cursor.xAxis = dateAxis;
chart.cursor.snapToSeries = series;

// Create vertical scrollbar and place it before the value axis
chart.scrollbarY = new am4core.Scrollbar();
chart.scrollbarY.parent = chart.leftAxesContainer;
chart.scrollbarY.toBack();

// Create a horizontal scrollbar with previe and place it underneath the date axis
chart.scrollbarX = new am4charts.XYChartScrollbar();
chart.scrollbarX.series.push(series);
chart.scrollbarX.parent = chart.bottomAxesContainer;

dateAxis.start = 0.79;
dateAxis.keepSelection = true;


}); // end am4core.ready()
	
am4core.ready(function() {
					// Themes begin
					am4core.useTheme(am4themes_animated);
					// Themes end

					var chart = am4core.create("chartdiv1", am4plugins_wordCloud.WordCloud);
					chart.fontFamily = "微軟正黑體";
					var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
					series.randomness = 0.1;
					series.rotationThreshold = 0.5;

					series.data = [{"yName":"Stopkiddinstudio","word":"\u53f0\u7063","count":"375"},{"yName":"Stopkiddinstudio","word":"Taiwan","count":"281"},{"yName":"Stopkiddinstudio","word":"\u8001\u5916","count":"240"},{"yName":"Stopkiddinstudio","word":"In","count":"167"},{"yName":"Stopkiddinstudio","word":"s","count":"145"},{"yName":"Stopkiddinstudio","word":"Taiwanese","count":"116"},{"yName":"Stopkiddinstudio","word":"to","count":"102"},{"yName":"Stopkiddinstudio","word":"Foreigners","count":"93"},{"yName":"Stopkiddinstudio","word":"\u6311\u6230","count":"88"},{"yName":"Stopkiddinstudio","word":"\u5973\u751f","count":"88"},{"yName":"Stopkiddinstudio","word":"\u7f8e\u570b","count":"77"},{"yName":"Stopkiddinstudio","word":"\u65e5\u672c","count":"67"},{"yName":"Stopkiddinstudio","word":"The","count":"66"},{"yName":"Stopkiddinstudio","word":"\u773c\u4e2d","count":"63"},{"yName":"Stopkiddinstudio","word":"Girl","count":"62"},{"yName":"Stopkiddinstudio","word":"Japanese","count":"49"},{"yName":"Stopkiddinstudio","word":"Love","count":"48"},{"yName":"Stopkiddinstudio","word":"\u7f8e\u5973","count":"48"},{"yName":"Stopkiddinstudio","word":"Challenge","count":"47"},{"yName":"Stopkiddinstudio","word":"Chinese","count":"45"},{"yName":"Stopkiddinstudio","word":"\u53f0\u7063\u4eba","count":"44"},{"yName":"Stopkiddinstudio","word":"Girls","count":"43"},{"yName":"Stopkiddinstudio","word":"\u6700","count":"42"},{"yName":"Stopkiddinstudio","word":"Is","count":"42"},{"yName":"Stopkiddinstudio","word":"\u4e2d\u570b","count":"40"},{"yName":"Stopkiddinstudio","word":"For","count":"40"},{"yName":"Stopkiddinstudio","word":"How","count":"39"},{"yName":"Stopkiddinstudio","word":"\u82f1\u6587","count":"39"},{"yName":"Stopkiddinstudio","word":"ft","count":"39"},{"yName":"Stopkiddinstudio","word":"\u5916\u570b","count":"38"},{"yName":"Stopkiddinstudio","word":"\u7b2c\u4e00\u6b21","count":"37"},{"yName":"Stopkiddinstudio","word":"World","count":"37"},{"yName":"Stopkiddinstudio","word":"\u5973\u5b69","count":"36"},{"yName":"Stopkiddinstudio","word":"\u5916\u570b\u4eba","count":"35"},{"yName":"Stopkiddinstudio","word":"\u9ad4\u9a57","count":"35"},{"yName":"Stopkiddinstudio","word":"\u5403","count":"35"},{"yName":"Stopkiddinstudio","word":"About","count":"34"},{"yName":"Stopkiddinstudio","word":"\u4fc4\u7f85\u65af","count":"34"},{"yName":"Stopkiddinstudio","word":"\u5404\u570b","count":"34"},{"yName":"Stopkiddinstudio","word":"VS","count":"32"},{"yName":"Stopkiddinstudio","word":"English","count":"32"},{"yName":"Stopkiddinstudio","word":"in","count":"31"},{"yName":"Stopkiddinstudio","word":"vs","count":"30"},{"yName":"Stopkiddinstudio","word":"Top","count":"30"},{"yName":"Stopkiddinstudio","word":"Food","count":"29"},{"yName":"Stopkiddinstudio","word":"What","count":"28"},{"yName":"Stopkiddinstudio","word":"\u8d85","count":"28"},{"yName":"Stopkiddinstudio","word":"Are","count":"28"},{"yName":"Stopkiddinstudio","word":"American","count":"27"},{"yName":"Stopkiddinstudio","word":"Do","count":"27"},{"yName":"Stopkiddinstudio","word":"\u7bc7","count":"25"},{"yName":"Stopkiddinstudio","word":"Trying","count":"25"},{"yName":"Stopkiddinstudio","word":"with","count":"25"},{"yName":"Stopkiddinstudio","word":"t","count":"25"},{"yName":"Stopkiddinstudio","word":"of","count":"24"},{"yName":"Stopkiddinstudio","word":"Best","count":"24"},{"yName":"Stopkiddinstudio","word":"Why","count":"24"},{"yName":"Stopkiddinstudio","word":"Tries","count":"24"},{"yName":"Stopkiddinstudio","word":"You","count":"23"},{"yName":"Stopkiddinstudio","word":"China","count":"22"},{"yName":"Stopkiddinstudio","word":"Favorite","count":"22"},{"yName":"Stopkiddinstudio","word":"Asian","count":"22"},{"yName":"Stopkiddinstudio","word":"\u8aaa","count":"21"},{"yName":"Stopkiddinstudio","word":"Russian","count":"21"},{"yName":"Stopkiddinstudio","word":"\u97d3\u570b","count":"21"},{"yName":"Stopkiddinstudio","word":"Most","count":"21"},{"yName":"Stopkiddinstudio","word":"\u6b50\u6d32","count":"21"},{"yName":"Stopkiddinstudio","word":"To","count":"20"},{"yName":"Stopkiddinstudio","word":"Things","count":"20"},{"yName":"Stopkiddinstudio","word":"\u611b","count":"18"},{"yName":"Stopkiddinstudio","word":"\u4eba","count":"18"},{"yName":"Stopkiddinstudio","word":"First","count":"18"},{"yName":"Stopkiddinstudio","word":"\u4e16\u754c","count":"18"},{"yName":"Stopkiddinstudio","word":"\u570b\u4eba","count":"18"},{"yName":"Stopkiddinstudio","word":"Famous","count":"18"},{"yName":"Stopkiddinstudio","word":"Know","count":"18"},{"yName":"Stopkiddinstudio","word":"Life","count":"17"},{"yName":"Stopkiddinstudio","word":"\u8001\u7f8e","count":"17"},{"yName":"Stopkiddinstudio","word":"EPIC","count":"17"},{"yName":"Stopkiddinstudio","word":"Taipei","count":"17"},{"yName":"Stopkiddinstudio","word":"\u5b78\u751f","count":"17"},{"yName":"Stopkiddinstudio","word":"\u4e2d\u6587","count":"16"},{"yName":"Stopkiddinstudio","word":"An","count":"16"},{"yName":"Stopkiddinstudio","word":"Students","count":"16"},{"yName":"Stopkiddinstudio","word":"\u4ea4\u5f80","count":"16"},{"yName":"Stopkiddinstudio","word":"\u5c08\u8a2a","count":"15"},{"yName":"Stopkiddinstudio","word":"People","count":"15"},{"yName":"Stopkiddinstudio","word":"the","count":"15"},{"yName":"Stopkiddinstudio","word":"\u4e8b","count":"15"},{"yName":"Stopkiddinstudio","word":"\u5fb7\u570b","count":"15"},{"yName":"Stopkiddinstudio","word":"\u7406\u7531","count":"15"},{"yName":"Stopkiddinstudio","word":"Reasons","count":"15"},{"yName":"Stopkiddinstudio","word":"Don","count":"15"},{"yName":"Stopkiddinstudio","word":"Girlfriend","count":"15"},{"yName":"Stopkiddinstudio","word":"Man","count":"14"},{"yName":"Stopkiddinstudio","word":"Night","count":"14"},{"yName":"Stopkiddinstudio","word":"\u4e9e\u6d32","count":"14"},{"yName":"Stopkiddinstudio","word":"\u5973","count":"14"},{"yName":"Stopkiddinstudio","word":"\u6700\u611b","count":"14"},{"yName":"Stopkiddinstudio","word":"Edition","count":"14"},{"yName":"Stopkiddinstudio","word":"\u554f\u984c","count":"14"},{"yName":"Stopkiddinstudio","word":"Can","count":"14"},{"yName":"Stopkiddinstudio","word":"\u5dee\u7570","count":"14"},{"yName":"Stopkiddinstudio","word":"\u7981\u64ad","count":"13"},{"yName":"Stopkiddinstudio","word":"\u9999\u6e2f","count":"13"},{"yName":"Stopkiddinstudio","word":"Ladies","count":"13"},{"yName":"Stopkiddinstudio","word":"\u9b27","count":"13"},{"yName":"Stopkiddinstudio","word":"[","count":"13"},{"yName":"Stopkiddinstudio","word":"]","count":"13"},{"yName":"Stopkiddinstudio","word":"\u7537\u751f","count":"13"},{"yName":"Stopkiddinstudio","word":"Guys","count":"13"},{"yName":"Stopkiddinstudio","word":"Korean","count":"13"},{"yName":"Stopkiddinstudio","word":"\u8acb","count":"13"},{"yName":"Stopkiddinstudio","word":"\u89ba\u5f97","count":"13"},{"yName":"Stopkiddinstudio","word":"\u5b78","count":"13"},{"yName":"Stopkiddinstudio","word":"\u7d93\u5178","count":"13"},{"yName":"Stopkiddinstudio","word":"WMG","count":"12"},{"yName":"Stopkiddinstudio","word":"\u884c","count":"12"},{"yName":"Stopkiddinstudio","word":"\u60c5\u8056","count":"12"},{"yName":"Stopkiddinstudio","word":"\u5927\u5b78","count":"12"},{"yName":"Stopkiddinstudio","word":"\u8377\u862d","count":"12"},{"yName":"Stopkiddinstudio","word":"\u4e00\u5b9a","count":"12"},{"yName":"Stopkiddinstudio","word":"From","count":"12"},{"yName":"Stopkiddinstudio","word":"\u97d3\u570b\u4eba","count":"12"},{"yName":"Stopkiddinstudio","word":"We","count":"12"},{"yName":"Stopkiddinstudio","word":"\u5973\u53cb","count":"12"},{"yName":"Stopkiddinstudio","word":"Japan","count":"11"},{"yName":"Stopkiddinstudio","word":"Trailer","count":"11"},{"yName":"Stopkiddinstudio","word":"EP1","count":"11"},{"yName":"Stopkiddinstudio","word":"My","count":"11"},{"yName":"Stopkiddinstudio","word":"\u7206\u7b11","count":"11"},{"yName":"Stopkiddinstudio","word":"\u4eba\u751f","count":"11"},{"yName":"Stopkiddinstudio","word":"Your","count":"11"},{"yName":"Stopkiddinstudio","word":"\u5967\u5730\u5229","count":"11"},{"yName":"Stopkiddinstudio","word":"\u6b63\u59b9","count":"11"},{"yName":"Stopkiddinstudio","word":"German","count":"11"},{"yName":"Stopkiddinstudio","word":"Has","count":"11"},{"yName":"Stopkiddinstudio","word":"\u4e09\u5927","count":"11"},{"yName":"Stopkiddinstudio","word":"\u6b4c\u624b","count":"11"},{"yName":"Stopkiddinstudio","word":"Should","count":"11"},{"yName":"Stopkiddinstudio","word":"That","count":"11"},{"yName":"Stopkiddinstudio","word":"\u7f8e\u98df","count":"11"},{"yName":"Stopkiddinstudio","word":"\u65e9\u9910","count":"11"},{"yName":"Stopkiddinstudio","word":"Snacks","count":"11"},{"yName":"Stopkiddinstudio","word":"YouTuber","count":"11"},{"yName":"Stopkiddinstudio","word":"\u0430","count":"11"},{"yName":"Stopkiddinstudio","word":"\u5be6\u6e2c","count":"11"},{"yName":"Stopkiddinstudio","word":"\u897f\u73ed\u7259","count":"11"},{"yName":"Stopkiddinstudio","word":"Show","count":"10"},{"yName":"Stopkiddinstudio","word":"\u7537\u53cb","count":"10"}];

					series.dataFields.word = "tag";
					series.dataFields.value = "count";

					series.heatRules.push({
					 "target": series.labels.template,
					 "property": "fill",
					 "min": am4core.color("#6640FF"),
					 "max": am4core.color("#DB7093"),
					 "dataField": "value"
					});

					
					series.labels.template.urlTarget = "_blank";
					series.labels.template.tooltipText = "{word}: {value}";

					var hoverState = series.labels.template.states.create("hover");
					hoverState.properties.fill = am4core.color("#FFA631");

					

					var title = chart.titles.create();
					title.text = "Youtuber最常用關鍵字";
					title.fontSize = 20;
					title.fontFamily="微軟正黑體"

					}); // end am4core.ready()

am4core.ready(function() {

							// Themes begin
							am4core.useTheme(am4themes_animated);
							// Themes end

							var iconPath = "M53.5,476c0,14,6.833,21,20.5,21s20.5-7,20.5-21V287h21v189c0,14,6.834,21,20.5,21 c13.667,0,20.5-7,20.5-21V154h10v116c0,7.334,2.5,12.667,7.5,16s10.167,3.333,15.5,0s8-8.667,8-16V145c0-13.334-4.5-23.667-13.5-31 s-21.5-11-37.5-11h-82c-15.333,0-27.833,3.333-37.5,10s-14.5,17-14.5,31v133c0,6,2.667,10.333,8,13s10.5,2.667,15.5,0s7.5-7,7.5-13 V154h10V476 M61.5,42.5c0,11.667,4.167,21.667,12.5,30S92.333,85,104,85s21.667-4.167,30-12.5S146.5,54,146.5,42 c0-11.335-4.167-21.168-12.5-29.5C125.667,4.167,115.667,0,104,0S82.333,4.167,74,12.5S61.5,30.833,61.5,42.5z"



							var chart = am4core.create("chartdiv2", am4charts.SlicedChart);
							chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
							
							chart.data = [{"yName":"Stopkiddinstudio","name":"\u904a\u6232","value":"6"},{"yName":"Stopkiddinstudio","name":"\u958b\u7bb1","value":"1"},{"yName":"Stopkiddinstudio","name":"\u7f8e\u98df","value":"31"},{"yName":"Stopkiddinstudio","name":"\u65c5\u904a","value":"8"},{"yName":"Stopkiddinstudio","name":"\u65e5\u5e38","value":"2"},{"yName":"Stopkiddinstudio","name":"\u5a1b\u6a02","value":"437"},{"yName":"Stopkiddinstudio","name":"\u97f3\u6a02","value":"1"},{"yName":"Stopkiddinstudio","name":"\u77e5\u8b58","value":"577"},{"yName":"Stopkiddinstudio","name":"\u5176\u4ed6","value":"6"}];

							var series = chart.series.push(new am4charts.PictorialStackedSeries());
							series.dataFields.value = "value";
							series.dataFields.category = "name";
							series.alignLabels = true;

							series.maskSprite.path = iconPath;
							series.ticks.template.locationX = 1;
							series.ticks.template.locationY = 0.5;

							series.labelsContainer.width = 200;

							chart.legend = new am4charts.Legend();
							chart.legend.position = "top";
							chart.legend.valign = "bottom";


							var title = chart.titles.create();
							title.text = "Youtube頻道組成成分";
							title.fontSize = 20;
							title.fontFamily="微軟正黑體"

							}); // end am4core.ready()



							
am4core.ready(function() {

// Themes begin
							am4core.useTheme(am4themes_animated);
							// Themes end

							// Create chart instance
							var chart = am4core.create("chartdiv3", am4charts.PieChart);

							// Add data
							chart.data = [{"class":"\u5176\u4ed6","count":"1"},{"class":"\u5a1b\u6a02","count":"6"}];

							// Add and configure Series
							var pieSeries = chart.series.push(new am4charts.PieSeries());
							pieSeries.dataFields.value = "count";
							pieSeries.dataFields.category = "class";
							pieSeries.slices.template.stroke = am4core.color("#fff");
							pieSeries.slices.template.strokeWidth = 2;
							pieSeries.slices.template.strokeOpacity = 1;

							// This creates initial animation
							pieSeries.hiddenState.properties.opacity = 1;
							pieSeries.hiddenState.properties.endAngle = -90;
							pieSeries.hiddenState.properties.startAngle = -90;
	var title = chart.titles.create();
							title.text = "影片數量(支)";
							title.fontSize = 20;
							title.fontFamily="微軟正黑體"

							}); // end am4core.ready()


//-----------------------ALL--------------------------------------------------------//
am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdivALL2", am4charts.PieChart);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart.data = [
  {
    country: "遊戲",
    value: 2688
  },
  {
    country: "開箱",
    value: 408
  },
  {
    country: "美食",
    value: 1699
  },
  {
    country: "旅遊",
    value: 429
  },
  {
    country: "日常",
    value: 1723
  },
  {
    country: "娛樂",
    value: 12182
  },
  {
    country: "音樂",
    value: 1487
  },
  {
    country: "彩妝",
    value: 56
  },
  {
    country: "宗教",
    value: 295
  },
  {
    country: "教學",
    value: 382
  },
  {
    country: "知識",
    value: 2262
  },
  {
    country: "其他",
    value: 1090
  }
];
chart.radius = am4core.percent(70);
chart.innerRadius = am4core.percent(40);
chart.startAngle = 180;
chart.endAngle = 360;  

var series = chart.series.push(new am4charts.PieSeries());
series.dataFields.value = "value";
series.dataFields.category = "country";

series.slices.template.cornerRadius = 10;
series.slices.template.innerCornerRadius = 7;
series.slices.template.draggable = true;
series.slices.template.inert = true;
series.alignLabels = true;

series.hiddenState.properties.startAngle = 90;
series.hiddenState.properties.endAngle = 90;

chart.legend = new am4charts.Legend();

var title = chart.titles.create();
title.text = "Youtube組成影片類型";
title.fontSize = 20;
title.fontFamily="微軟正黑體"

}); // end am4core.ready()
am4core.ready(function() {
					// Themes begin
					am4core.useTheme(am4themes_animated);
					// Themes end

					var chart = am4core.create("chartdivALL", am4plugins_wordCloud.WordCloud);
					chart.fontFamily = "微軟正黑體";
					var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
					series.randomness = 0.1;
					series.rotationThreshold = 0.5;

					series.data = [{"word":"\u5eb7\u7199\u4f86\u4e86","count":"1715"},{"word":"\u5b8c\u6574\u7248","count":"1619"},{"word":"\u599e\u599e","count":"1455"},{"word":"\u73a9\u5177","count":"1436"},{"word":"NyoNyoTV","count":"1351"},{"word":"TV","count":"1351"},{"word":"Joeman","count":"1263"},{"word":"\u7d9c\u85dd\u73a9\u5f88\u5927","count":"1243"},{"word":"\u5152\u6b4c","count":"1087"},{"word":"\u8c37\u963f\u83ab","count":"860"},{"word":"\u78b0\u78b0\u72d0","count":"859"},{"word":" ","count":"831"},{"word":"\u566a\u5496","count":"787"},{"word":"\u5206\u9418","count":"757"},{"word":"\u770b\u5b8c","count":"747"},{"word":"DE","count":"714"},{"word":"\u5eb7\u7199","count":"660"},{"word":"\u8521\u963f\u560e","count":"633"},{"word":"JuN","count":"631"},{"word":"\u505a","count":"622"},{"word":"\u5728\u4e0d\u760b\u72c2\u5c31\u7b49\u6b7b","count":"621"},{"word":"\u96fb\u5f71","count":"598"},{"word":"\u266b","count":"560"},{"word":"\u266c","count":"560"},{"word":"\u7d50\u77f3","count":"560"},{"word":"\u8056","count":"559"},{"word":"Saint","count":"549"},{"word":"\u76f4\u64ad","count":"509"},{"word":"WACKYBOYS","count":"488"},{"word":" ","count":"484"},{"word":" ","count":"482"},{"word":"\u25ba","count":"471"},{"word":"\u5289\u6c9b","count":"470"},{"word":"\u660e\u661f","count":"454"},{"word":"vs","count":"450"},{"word":"\u5152\u7ae5","count":"446"},{"word":"\u6b4c\u8a5e","count":"443"},{"word":"\u5144\u5f1f","count":"425"},{"word":"\u52d5\u614b","count":"408"},{"word":"\u773e\u91cf\u7d1a","count":"406"},{"word":"\u9ec3\u6c0f","count":"401"},{"word":"CROWD","count":"400"},{"word":" ","count":"397"},{"word":"\u53f0\u7063","count":"375"},{"word":"\u661f\u57f9","count":"362"},{"word":"\u542b\u7f9e\u8349\u65e5\u8a18","count":"361"},{"word":"\u557e\u557e","count":"359"},{"word":"\u9811GAME","count":"336"},{"word":"HowFun","count":"334"},{"word":"\u8521\u963f\u560e","count":"333"},{"word":" ","count":"331"},{"word":"\u978b","count":"327"},{"word":"\u5bf6\u53ef\u5922","count":"314"},{"word":"PINKFONG","count":"309"},{"word":" ","count":"305"},{"word":"\u746a\u838e","count":"300"},{"word":"\u96c6","count":"288"},{"word":"Lyrics","count":"283"},{"word":"seanchou","count":"281"},{"word":"music","count":"281"},{"word":"channel","count":"281"},{"word":"Taiwan","count":"281"},{"word":"\u5b8c\u6574\u7248","count":"279"},{"word":"\u73a9","count":"278"},{"word":"\u96c6","count":"275"},{"word":"\u718a","count":"275"},{"word":"\u53cd\u9aa8\u7537\u5b69","count":"268"},{"word":"\u6728\u66dc","count":"266"},{"word":"Jasper","count":"264"},{"word":"\u7a7f\u8d8a","count":"254"},{"word":"\u5929\u540e","count":"248"},{"word":"\u9ebb\u8fa3","count":"243"},{"word":"\u8001\u5916","count":"240"},{"word":"\u963f\u6ef4\u82f1\u6587","count":"226"},{"word":"ft","count":"225"},{"word":"\u5b89\u557e","count":"224"},{"word":"DIY","count":"223"},{"word":"\u96c6","count":"223"},{"word":"\u7cbe\u5f69","count":"216"},{"word":"\u309d","count":"215"},{"word":"\u2200","count":"215"},{"word":"\uff65","count":"215"},{"word":"\u863f\u6f54\u5854\u7684\u5eda\u623f","count":"212"},{"word":"\u7537\u53cb","count":"208"},{"word":"\u7cbe\u83ef","count":"206"},{"word":"X","count":"203"},{"word":"\u5973\u53cb","count":"194"},{"word":"\u4eba","count":"193"},{"word":"x","count":"193"},{"word":"\u9019\u7fa4","count":"192"},{"word":"TGOP","count":"191"},{"word":"Painting","count":"188"},{"word":"\u53f0\u7063","count":"188"},{"word":"\u5361\u63d0\u8afe\u72c2\u65b0\u805e","count":"187"},{"word":"\u958b\u7bb1","count":"186"},{"word":"\u82f1\u6587","count":"180"},{"word":"Z","count":"179"},{"word":"\u7279\u8f2f","count":"179"},{"word":"P","count":"175"},{"word":"\u653e\u706b","count":"175"},{"word":"\u2661","count":"173"},{"word":"\u90b0\u667a\u6e90","count":"169"},{"word":"\u535a\u6069\u591c\u591c\u79c0","count":"168"},{"word":"In","count":"167"},{"word":"\u5c0f","count":"166"},{"word":"Life","count":"166"},{"word":"\u5bf6\u5bf6","count":"163"},{"word":"\u5b57\u5e55","count":"160"},{"word":"\u5b8c\u6574","count":"160"},{"word":"\u9ad8\u6e05","count":"160"},{"word":"\u97f3\u8cea","count":"160"},{"word":"VLOG","count":"159"},{"word":"\u56f0\u64fe","count":"158"},{"word":"\u4e00\u65e5","count":"156"},{"word":"\u904a\u6232","count":"154"},{"word":"\u53ea\u6709\u59b3\u77e5\u9053","count":"152"},{"word":"\u6cf1\u6cf1","count":"150"},{"word":"Sandy","count":"145"},{"word":"s","count":"145"},{"word":"\u95dc\u5361","count":"145"},{"word":"\u4e94\u500b","count":"144"},{"word":"2018","count":"140"},{"word":"PRANK","count":"140"},{"word":"\u6e38\u5426\u5e0c","count":"138"},{"word":"\u8ddf\u73ed","count":"135"},{"word":"to","count":"134"},{"word":"\u5287\u60c5","count":"134"},{"word":"Mandy","count":"134"},{"word":"\u904a\u6232","count":"133"},{"word":"\u4e00\u65e5\u7cfb\u5217","count":"133"},{"word":"\u4e92\u6574\u60c5\u4fb6","count":"133"},{"word":"\u9bca\u9b5a","count":"131"},{"word":"\u524d\u4e94\u540d","count":"130"},{"word":"FULL","count":"129"},{"word":"\u767d\u7661\u516c\u4e3b","count":"126"},{"word":"\u52d5\u7269","count":"126"},{"word":"Stop","count":"125"},{"word":"\u6b4c\u8a5e\u7248","count":"125"},{"word":"MV","count":"125"},{"word":"2017","count":"124"},{"word":"\u4eca\u5929TEST","count":"124"},{"word":"\u9b6f\u86c7\u8fa6\u516c\u5ba4","count":"121"},{"word":"\u60c5\u4fb6\u5927\u5c0f\u4e8b","count":"121"},{"word":"T","count":"120"},{"word":"\u5b8b\u4e03\u529b\u554f\u7b54","count":"120"},{"word":"\u7bc0\u9304","count":"120"},{"word":"\u30fc","count":"120"},{"word":"\u6eab\u59ae","count":"119"},{"word":"feat","count":"119"},{"word":"Taiwanese","count":"116"}];

					series.dataFields.word = "tag";
					series.dataFields.value = "count";

					series.heatRules.push({
					 "target": series.labels.template,
					 "property": "fill",
					 "min": am4core.color("#6640FF"),
					 "max": am4core.color("#DB7093"),
					 "dataField": "value"
					});

					
					series.labels.template.urlTarget = "_blank";
					series.labels.template.tooltipText = "{word}: {value}";

					var hoverState = series.labels.template.states.create("hover");
					hoverState.properties.fill = am4core.color("#FFA631");

					

					var title = chart.titles.create();
					title.text = "Youtuber最常用關鍵字";
					title.fontSize = 20;
					title.fontFamily="微軟正黑體"

					}); // end am4core.ready()
am4core.ready(function() {

// Themes begin
							am4core.useTheme(am4themes_animated);
							// Themes end

							// Create chart instance
							var chart = am4core.create("chartdiv4", am4charts.PieChart);

							// Add data
							chart.data = [{"class":"\u5176\u4ed6","total":"2807"},{"class":"\u5a1b\u6a02","total":"7858"}];

							// Add and configure Series
							var pieSeries = chart.series.push(new am4charts.PieSeries());
							pieSeries.dataFields.value = "total";
							pieSeries.dataFields.category = "class";
							pieSeries.slices.template.stroke = am4core.color("#fff");
							pieSeries.slices.template.strokeWidth = 2;
							pieSeries.slices.template.strokeOpacity = 1;

							// This creates initial animation
							pieSeries.hiddenState.properties.opacity = 1;
							pieSeries.hiddenState.properties.endAngle = -90;
							pieSeries.hiddenState.properties.startAngle = -90;
								
							var title = chart.titles.create();
							title.text = "觀看人數(次)";
							title.fontSize = 20;
							title.fontFamily="微軟正黑體"

							}); // end am4core.ready()
