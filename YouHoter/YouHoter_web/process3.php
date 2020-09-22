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
SELECT y.yName,vc.name,vc.value
FROM Vcount as vc join youtuber as y on vc.yID=y.yID
where y.yID='$youtuberid'and vc.value !=0
";

$result = mysqli_query($conn,$sql);

$k=mysqli_fetch_all($result,MYSQLI_ASSOC);
//echo json_encode($result);
//print_r($k);
echo  json_encode($k);

mysqli_close($conn);

#print_r($a);
?>