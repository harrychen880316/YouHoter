<?php
$youtuberid = $_REQUEST["youtubername"];



$servername = "localhost:3306";
$username = "freeman";
$password = "MIS5627";
$db = "youhoter";

// 创建连接
$conn = new mysqli($servername, $username, $password,$db);



mysqli_set_charset($conn,'UTF-8');


$sql="
SELECT y.yName,c.word,c.count
FROM count as c join youtuber as y on c.yID=y.yID
where y.yID='$youtuberid'
Limit 0,150";

$result = mysqli_query($conn,$sql);

$j=mysqli_fetch_all($result,MYSQLI_ASSOC);
//echo json_encode($result);
//print_r($k);
echo  json_encode($j);

mysqli_close($conn);

#print_r($a);
?>