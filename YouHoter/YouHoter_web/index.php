<!DOCTYPE html>
<style>
#chartdiv {
  width: 100%;
height:550px;
}
</style>

<!-- Resources -->
<script src="https://www.amcharts.com/lib/4/core.js"></script>
<script src="https://www.amcharts.com/lib/4/charts.js"></script>
<script src="https://www.amcharts.com/lib/4/plugins/forceDirected.js"></script>
<script src="https://www.amcharts.com/lib/4/themes/animated.js"></script>

<script src="js/indexbubble.js"></script>
<script src="js/youtuberRank.js"></script>

<html lang="en">
	
    <!-- Basic -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">   
   
    <!-- Mobile Metas -->
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
 
     <!-- Site Metas -->
    <title>首頁</title>  
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

    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
<!-- Chart code -->


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
                        <li><a class="active" href="index.php">首頁</a></li>
                        <li><a href="viewer.php">輿情分析</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>


    <div id="home" class="parallax first-section" data-stellar-background-ratio="0.4" style="background-image:url('uploads/parallax_12.jpg');">
        <div class="container">
           
				<div>
				<div id="chartdiv" style="font-size: 18pt; height:600px"></div>
				</div>
           

                <div class="app_iphone_02 wow slideInUp hidden-xs hidden-sm" data-wow-duration="1s" data-wow-delay="0.5s">
                    <img src="uploads/rocket.png" alt="" class="img-responsive">
                </div>
            </div><!-- end row -->
        </div><!-- end container -->
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
<div>
	<div id="chartdivRank" style="font-size:18px; height:750px; width:100%;"></div>
	<p style="font-size: 28px" align="right">訂閱數截止至2019/10/15</p>
</div>
<div class="col-md-8 col-sm-12" >
                    <div class="big-tagline right" >
                      <h1><p style="font-size: 32px;">Youtuber輿情分析</p><br></h1>
						
						
                      <p class="lead" style="font-size: 22px; color: #6C6C6C;">
						  &emsp;&emsp;看影片是現代人的娛樂，不僅可打發時間、抒發壓力、從中學習新事物，而Youtube是大家不可或缺的平台，越來越多人不只是觀看影片，同時也製作影片上傳Youtube，藉著短片分享個人珍藏和心得，因此衍生出Youtuber此種新興職業。<br>
						  &emsp;&emsp;而我們很好奇這些熱門Youtuber他們的影片與其他Youtuber有甚麼不同之處，才能讓他們擁有眾多訂閱者。因此我們決定分析台灣熱門Youtuber受到喜愛的原因以及他們各自的主題類型、訂閱人數、以及每次發布影片的觀看人數，藉此去了解觀看者的喜好，以及不同Youtuber彼此的相似度和他們時常拍攝的主題類型。做成網站形式，不但操作簡易，使用者可以簡單快速的瀏覽網站，可以查詢想要了解的Youtuber資訊 。

						</p>
					</div>
	
</div>
<br><br>
<div class="col-md-4 col-sm-12" >
	
	<h1><p style="font-size: 32px;">指導老師</p></h1>
							<div style="font-size: 22px; color: #6C6C6C;">
							<font>&emsp;&emsp;國立澎湖科技大學 資訊管理系 李宗儒 教授</font><br>
							</div>
	<h1><p style="font-size: 32px;">參賽組員</p></h1>
							<div style="font-size: 22px; color: #6C6C6C;">
							<font>&emsp;&emsp;國立澎湖科技大學 資訊管理系 程宥升</font><br> 
							<font>&emsp;&emsp;國立澎湖科技大學 資訊管理系 王瑋琳</font><br>
							<font>&emsp;&emsp;國立澎湖科技大學 資訊管理系 張朔榕</font><br>
							</div>
</div>

    
    <hr class="invis">
<!-- end row -->
        </div><!-- end container -->
    </div><!-- end section -->    <!-- end section -->    <!-- end section -->
    <!-- end section -->

	<footer class="footer">
        <div class="container"> <!-- end row -->
        </div><!-- end container -->
    </footer><!-- end footer -->    <!-- end copyrights -->

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
</html>