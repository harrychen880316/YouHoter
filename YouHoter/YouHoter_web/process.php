<?php
$youtuberid = $_REQUEST["youtubername"];
$c= $_REQUEST["Year"];


switch ($c) {
  case 2006:
    $year="'2006-01-01' and '2006-12-31'";
    break;	
  case 2007:
    $year="'2007-01-01' and '2007-12-31'";
    break;
  case 2008:
    $year="'2008-01-01' and '2008-12-31'";
    break;	
  case 2009:
    $year="'2009-01-01' and '2009-12-31'";
    break;
  case 2010:
    $year="'2010-01-01' and '2010-12-31'";
    break;
  case 2011:
    $year="'2011-01-01' and '2011-12-31'";
    break;
  case 2012:
    $year="'2012-01-01' and '2012-12-31'";
    break;
  case 2013:
    $year="'2013-01-01' and '2013-12-31'";
    break;
  case 2014:
    $year="'2014-01-01' and '2014-12-31'";
    break;
  case 2015:
    $year="'2015-01-01' and '2015-12-31'";
    break;
  case 2016:
    $year="'2016-01-01' and '2016-12-31'";
    break;
  case 2017:
    $year="'2017-01-01' and '2017-12-31'";
    break;
  case 2018:
    $year="'2018-01-01' and '2018-12-31'";
    break;
  case 2019:
    $year="'2019-01-01' and '2019-10-01'";
    break;
}
$servername = "localhost:3306";
$username = "freeman";
$password = "MIS5627";
$db = "youhoter";

// 创建连接
$conn = new mysqli($servername, $username, $password,$db);



mysqli_set_charset($conn,'UTF-8');


$sql="
SELECT v.viewer,v.date,v.title,y.yName
FROM video as v join youtuber as y on v.yID=y.yID
where y.yID='$youtuberid'AND v.date BETWEEN $year";

$result = mysqli_query($conn,$sql);

$y=mysqli_fetch_all($result,MYSQLI_ASSOC);
//echo json_encode($result);
//print_r($k);
echo  json_encode($y);

#print_r($a);
?>