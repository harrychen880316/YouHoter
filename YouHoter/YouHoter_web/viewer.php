<!DOCTYPE html>
<?php
$youtuber=array("y011"=>"Stopkiddinstudio","y001"=>"counter656","y002"=>"DE JuN","y003"=>"HowFun",
"y004"=>"Jay Lee Painting","y005"=>"Joeman","y006"=>"NyoNyoTV妞妞TV",
"y007"=>"Odd Cactus","y008"=>"Rosalina's Kitchen 蘿潔塔的廚房","y009"=>"sandy mandy",
"y010"=>"seanchou music channel","y012"=>"STR Network",
"y013"=>"Taiwan Bar","y014"=>"the劉沛","y015"=>"WACKYBOYS 反骨男孩",
"y016"=>"千千進食中","y017"=>"大日宗","y018"=>"反正我很閒",
"y019"=>"木曜4超玩","y020"=>"主頻道【谷阿莫】","y021"=>"卡提諾狂新聞",
"y022"=>"白癡公主","y023"=>"在不瘋狂就等死 x 狂人娛樂","y024"=>"安啾咪",
"y025"=>"含羞草","y026"=>"我愛貓大","y027"=>"玖壹壹",
"y028"=>"放火 Louis","y029"=>"阿滴英文","y030"=>"星培Jasper",
"y031"=>"重量級CROWD","y032"=>"祐子和阿叡","y033"=>"理科太太 Li Ke Tai Tai",
"y034"=>"這群人TGOP","y035"=>"啾啾鞋","y036"=>"超粒方",
"y037"=>"黃大謙","y038"=>"黃氏兄弟","y039"=>"碰碰狐 (兒童兒歌・故事)",
"y040"=>"聖結石Saint","y041"=>"腦補給","y042"=>"葉式特工 Yes Ranger",
"y043"=>"頑GAME","y044"=>"綜藝玩很大 Mr.Player","y045"=>"蔡阿嘎",
"y047"=>"蔡阿嘎Life","y046"=>"噪咖EBCbuzz","y048"=>"瑪莎與熊 Masha and The Bear CH");

$year=array("2006"=>"2006","2007"=>"2007","2008"=>"2008","2009"=>"2009","2010"=>"2010","2011"=>"2011","2012"=>"2012",
			"2013"=>"2013","2014"=>"2014","2015"=>"2015","2016"=>"2016","2017"=>"2017","2018"=>"2018","2019"=>"2019"); 

$type=array("6"=>"娛樂","1"=>"遊戲","2"=>"開箱","3"=>"美食","4"=>"旅遊",
			"5"=>"日常","7"=>"音樂","8"=>"知識","9"=>"彩妝","10"=>"宗教",
			"11"=>"教學","12"=>"其他")
			
?>
<html lang="en">
	
	<style>
      .left {
        float: left;
      }
      .right {
        
        margin-left: 310px;
      }
    </style>
    <!-- Basic -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">   
   
    <!-- Mobile Metas -->
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
 
     <!-- Site Metas -->
    <title>輿情分析</title>  
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Site Icons -->
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
    <link rel="apple-touch-icon" href="images/apple-touch-icon.png">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <!-- Site CSS -->
    <link rel="stylesheet" href="style.css">
    <!-- Colors CSS -->
    <link rel="stylesheet" href="css/colors.css">
    <!-- ALL VERSION CSS -->
    <link rel="stylesheet" href="css/versions.css">
    <!-- Responsive CSS -->
    <link rel="stylesheet" href="css/responsive.css">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/custom.css">
	<script type="text/javascript" src="https://www.amcharts.com/lib/3/amcharts.js"></script>
	<script type="text/javascript" src="https://www.amcharts.com/lib/3/serial.js"></script>
	<script type="text/javascript" src="https://www.amcharts.com/lib/3/themes/light.js"></script>
	
	<!-- Resources -->
	<script src="https://www.amcharts.com/lib/4/core.js"></script>
	<script src="https://www.amcharts.com/lib/4/charts.js"></script>
	<script src="https://www.amcharts.com/lib/4/themes/animated.js"></script>
	<script src="https://www.amcharts.com/lib/4/plugins/wordCloud.js"></script>
	<script src="https://www.amcharts.com/lib/4/themes/animated.js"></script>
	<script src="https://www.amcharts.com/lib/4/themes/material.js"></script>
	

	
	

	<script
  src="https://code.jquery.com/jquery-3.4.1.js"
  integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
  crossorigin="anonymous"></script>
   <script type="text/javascript">//按下按鈕後的畫面
        
    </script>

</head>
<body class="seo_version">

    <!-- LOADER -->
	<div id="preloader">
		<div id="cupcake" class="box">
			<span class="letter">L</span>
			<div class="cupcakeCircle box">
				<div class="cupcakeInner box">
					<div class="cupcakeCore box"></div>
				</div>
			</div>
			<span class="letter box">A</span>
			<span class="letter box">D</span>
			<span class="letter box">I</span>
			<span class="letter box">N</span>
			<span class="letter box">G</span>
		</div>
	</div>
	<!-- END LOADER -->

   <header class="header header_style_01">
        <nav class="megamenu navbar navbar-default">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="index.php"><img src="images/logos/logo-seo.png" alt="image"></a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
					
                    <ul class="nav navbar-nav navbar-right menu-top">
                        <li><a href="index.php">首頁</a></li>
                        <li><a class="active" href="viewer.php">輿情分析</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <div class="all-page-title" style="background-image:url(images/pattern-4.png);">
        <div class="container text-center">
            <h1>Youtuber輿情分析</h1>
        </div>
		<!--Page -->
        <div class="page-info">
            <div class="container">
            	<div class="inner-container"> </div>
            </div>
        </div>
        <!--End Page-->
    </div><!-- end section -->
    <svg id="clouds" class="hidden-xs" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 85 100" preserveAspectRatio="none">
        <path d="M-5 100 Q 0 20 5 100 Z
            M0 100 Q 5 0 10 100
            M5 100 Q 10 30 15 100
            M10 100 Q 15 10 20 100
            M15 100 Q 20 30 25 100
            M20 100 Q 25 -10 30 100
            M25 100 Q 30 10 35 100
            M30 100 Q 35 30 40 100
            M35 100 Q 40 10 45 100
            M40 100 Q 45 50 50 100
            M45 100 Q 50 20 55 100
            M50 100 Q 55 40 60 100
            M55 100 Q 60 60 65 100
            M60 100 Q 65 50 70 100
            M65 100 Q 70 20 75 100
            M70 100 Q 75 45 80 100
            M75 100 Q 80 30 85 100
            M80 100 Q 85 20 90 100
            M85 100 Q 90 50 95 100
            M90 100 Q 95 25 100 100
            M95 100 Q 100 15 105 100 Z">
        </path>
    </svg>
	

	
    
<!-- end section -->
    <!-- end section -->
    <!-- end section -->
	<div>
		 
	<div style="text-align: center;">	
	 <form id = "idForm" name = "nameForm">
			
		<div><br><br><br><br></div>
		<div>

		<div id="chartdivALL"  style="width: 50%; height: 500px; " ></div>

		<div id="chartdivALL2" style="width: 50%; height: 500px;" ></div>	
		<br><br>
		</div>
		<h1>以各個頻道及年份去分類</h1>
		 頻道名稱:
		<select name="youtubername">
			<?php
			foreach( $youtuber as $key => $value ){
				echo "<option value='".$key."'>".$value."</option>";
			}
		?>
		</select>
		 年份:
		<select name="Year">
			<?php
			foreach( $year as $key => $value ){
				echo "<option value='".$key."'>".$value."</option>";
			}
		?>
		</select>
    <input type="button" value="確定" onclick="login1()">


	</div>
	</div>
	<div><br><br><br><br><br><br>
	</div>
	<div>
		<div id="chartdiv1" class="left" style="width: 50%; height: 500px; background-color: #FFFFFF;" ></div>
		<div id="chartdiv2" class="right" style="width: 50%; height: 500px; background-color: #FFFFFF;" ></div><br><br>	 
		<div id="chartdiv" style="width: 100%; height: 400px; background-color: #FFFFFF;" ></div>
		
    </div>
	<div style="text-align: center;">
		<h1>以年份去分析不同類型影片的影片量與觀看人數</h1>
		年份:
		<select name="Year2">
			<?php
			foreach( $year as $key => $value ){
				echo "<option value='".$key."'>".$value."</option>";
			}
		?>
		</select>
    <input type="button" value="確定" onclick="login()"> 
	</div>
		<div><br><br><br><br><br><br></div>
	
		<div class="col-md-6 col-sm-12">
		<div id="chartdiv3" style="width: 100%; height: 500px; background-color: #FFFFFF;" ></div>
			</div>
		<div class="col-md-6 col-sm-12">
		<div id="chartdiv4" style="width: 100%; height: 500px; background-color: #FFFFFF;" ></div>
			</div>
	</form>
	<div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div>
	<div>
		<div style="text-align: center;">
		<h1>每月發布之不同類型影片量</h1><br><br><br>
		</div>
	<div id="chartdiv5" style="width: 100%; height: 500px;"></div>
	</div>


<!-- end footer -->    <!-- end copyrights -->

    <a href="#" id="scroll-to-top" class="dmtop global-radius"><i class="fa fa-angle-up"></i></a>

    <!-- ALL JS FILES -->
    <script src="js/all.js"></script>
    <!-- ALL PLUGINS -->
    <script src="js/custom.js"></script>

</body>
<div class="copyrights">
        <div class="container">
            <div class="footer-distributed">
                <div class="footer-left">
                    <p class="footer-company-name">All Rights Reserved. &copy; 2018 <a href="#">FlaxSEO</a> Design By : <a href="https://html.design/">html design</a></p>
                </div>

            </div>
        </div><!-- end container -->
</div><!-- end copyrights -->

<script src="js/set.js"></script>

</html>
