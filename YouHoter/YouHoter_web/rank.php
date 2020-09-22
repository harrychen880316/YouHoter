<!DOCTYPE html>
<html lang="en">

    <!-- Basic -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">   
   
    <!-- Mobile Metas -->
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
 
     <!-- Site Metas -->
    <title>訂閱人數排名</title>  
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

	<!-- Styles -->


<!-- Resources -->
<script src="https://www.amcharts.com/lib/4/core.js"></script>
<script src="https://www.amcharts.com/lib/4/charts.js"></script>
<script src="https://www.amcharts.com/lib/4/themes/animated.js"></script>

<!-- Chart code -->
<script src="js/youtuberRank.js"></script>

	
</head>
<body>

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
                        <li><a class="active" href="rank.php">訂閱人數排名 </a></li>
                        <li><a href="viewer.php">觀看人數分析</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <div class="all-page-title" style="background-image:url(images/pattern-4.png);">
        <div class="container text-center">
            <h1>訂閱人數排名</h1>
        </div>
		<!--Page -->
        <div class="page-info">
            <div class="container">
            	<div class="inner-container">
                    <ul class="bread-crumb">
                        <li><a>訂閱排名截止至2019/10/15</a></li>
                        
                    </ul>
                </div>
            </div>
        </div>
        <!--End Page-->
    </div><!-- end section -->
	<div id="chartdiv" style="font-size:18px; height: 1250px; width: 100%;"></div>

	
	
	
    <div id="about" class="section wb nopadtop">
        <div class="container">
            <div class="row">
				<div>
					<!-- end messagebox -->
                </div><!-- end col -->                <!-- end col -->
            </div><!-- end row -->
        </div><!-- end container -->
    </div><!-- end section -->    <!-- end section -->
    <!-- end section -->
	<!-- end footer -->
	<!-- -->
	
	
    <div class="copyrights">
        <div class="container">
            <div class="footer-distributed">
<div class="footer-right">
          <form method="get" action="#">
</form>
                </div>
            </div>
        </div><!-- end container -->
    </div><!-- end copyrights -->

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