<?php
$array=array("y001"=>"HowFun","y002"=>"JayLeePainting");
$year=array("2009"=>"2009","2010"=>"2010","2011"=>"2011","2012"=>"2012","2013"=>"2013",
					 "2014"=>"2014","2015"=>"2015","2016"=>"2016","2017"=>"2017","2018"=>"2018","2019"=>"2019");         
?>
<html>
<head>
	<script type="text/javascript" src="https://www.amcharts.com/lib/3/amcharts.js"></script>
	<script type="text/javascript" src="https://www.amcharts.com/lib/3/serial.js"></script>
	<script type="text/javascript" src="https://www.amcharts.com/lib/3/themes/light.js"></script>
		
	<script
  src="https://code.jquery.com/jquery-3.4.1.js"
  integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
  crossorigin="anonymous"></script>
   <script type="text/javascript">
        function login() {
            $.ajax({
            //几个参数需要注意一下
                type: "POST",//方法类型
                dataType: "json",//预期服务器返回的数据类型
                url: "process.php" ,//url
                data: $('#idForm').serialize(),
                success: function (result) {
					data=JSON.stringify(result)
                    $('#returndata').text(data);
					data=data.replace(/viewer/g, "column-1");
					data=data.replace(/date/g, "category");
					data=JSON.parse(data);
					$('#returndata').text(data);
					
				
					
					AmCharts.makeChart("chartdiv",
				{
					"type": "serial",
					"categoryField": "category",
					"autoMarginOffset": 40,
					"marginRight": 60,
					"marginTop": 60,
					"startDuration": 1,
					"fontSize": 13,
					"theme": "light",
					"categoryAxis": {
						"gridPosition": "start"
					},
					"trendLines": [],
					"graphs": [
						{
							"balloonText": "[[title]]<br>日期:[[category]]<br>觀看人數:[[value]]",
							"bullet": "round",
							"bulletSize": 10,
							"id": "AmGraph-1",
							"lineAlpha": 1,
							"lineThickness": 3,
							"valueField": "column-1"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"id": "ValueAxis-1",
							"title": ""
						}
					],
					"allLabels": [],
					"balloon": {},
					"titles": [],
					"dataProvider": data
				}
			);
					
					
					
					

                },
                error : function() {
                    $('#returndata').text("error");
                }
            });
        }
    </script>
</head>
	<body>
	<form id = "idForm" name = "nameForm">
		<select name="youtubername">
			<?php
			foreach( $array as $key => $value ){
				echo "<option value='".$key."'>".$value."</option>";
			}
		?>
		</select>

		<select name="Year">
			<?php
			foreach( $year as $key => $value ){
				echo "<option value='".$key."'>".$value."</option>";
			}
		?>
		</select>
    <input type="button" value="send" onclick="login()">
	</form>
		<p id= "returndata"></p>
		<div id="chartdiv" style="width: 100%; height: 400px; background-color: #FFFFFF;" ></div>
	</body>
</html>