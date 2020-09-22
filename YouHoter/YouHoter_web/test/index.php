<!--
    旋風之音 GoneTone
    https://blog.reh.tw/
    範例教學
    <blockquote class="wp-embedded-content" data-secret="nO0XSd4MvA"><a href="https://blog.reh.tw/archives/662">jQuery Ajax 實現不刷新頁面提交資料 (後端使用 PHP 處理回傳 json)</a></blockquote><iframe class="wp-embedded-content" sandbox="allow-scripts" security="restricted" style="position: absolute; clip: rect(1px, 1px, 1px, 1px);" src="https://blog.reh.tw/archives/662/embed#?secret=nO0XSd4MvA" data-secret="nO0XSd4MvA" width="500" height="282" title="「jQuery Ajax 實現不刷新頁面提交資料 (後端使用 PHP 處理回傳 json)」 — 旋風之音 GoneTone" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
-->
<!DOCTYPE html>
<html>
    <head>
        <title>jQuery Ajax 實現不刷新頁面提交資料 Demo (後端使用 PHP 處理回傳 json)</title>
    </head>
    <body>
        <h1>jQuery Ajax 實現不刷新頁面提交資料 Demo (後端使用 PHP 處理回傳 json)</h1>
        <h2>教學文章：<a href="https://blog.reh.tw/archives/662" target="_blank">https://blog.reh.tw/archives/662</a></h2>
        <hr><br>
		
		<?php
		 $array=array("y001"=>"HowFun","y002"=>"JayLeePainting");
		 $year=array("2009"=>"2009","2010"=>"2010","2011"=>"2011","2012"=>"2012","2013"=>"2013",
					 "2014"=>"2014","2015"=>"2015","2016"=>"2016","2017"=>"2017","2018"=>"2018","2019"=>"2019");
		 ?>
        <form id="demo">
            暱稱：
			<select id="nickname">
                <option value="0">選擇頻道</option>
			<?php
			 foreach($array as $key => $value){
				 echo "<option value='".$key."'>".$value."</option>";
			 }
			 ?>
            </select>
            性別：
            <select id="gender">
                <option value="0">選擇年份</option>
			<?php
			 foreach($year as $key => $value){
				 echo "<option value='".$key."'>".$value."</option>";
			 }
			 ?>
            </select>
            <button type="button" id="submitExample">執行範例</button>
        </form>
        <br><hr>
        <p id="result"></p> <!-- 顯示回傳資料 -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> <!-- 引入 jQuery -->
        <script type="text/javascript">
        $(document).ready(function() {
            $("#submitExample").click(function() { //ID 為 submitExample 的按鈕被點擊時
                $.ajax({
                    type: "POST", //傳送方式
                    url: "service.php", //傳送目的地
                    dataType: "json", //資料格式
                    data: { //傳送資料
                        nickname: $("#nickname").val(), //表單欄位 ID nickname
                        gender: $("#gender").val() //表單欄位 ID gender
                    },
                    success: function(data) {
                        if (data.nickname) { //如果後端回傳 json 資料有 nickname
                            $("#demo")[0].reset(); //重設 ID 為 demo 的 form (表單)
                            $("#result").html('<font color="#007500">您的暱稱為「<font color="#0000ff">' + data.nickname + '</font>」，性別為「<font color="#0000ff">' + data.gender + '</font>」！</font>');
                        } else { //否則讀取後端回傳 json 資料 errorMsg 顯示錯誤訊息
                            $("#demo")[0].reset(); //重設 ID 為 demo 的 form (表單)
                            $("#result").html('<font color="#ff0000">' + data.errorMsg + '</font>');
                        }
                    },
                    error: function(jqXHR) {
                        $("#demo")[0].reset(); //重設 ID 為 demo 的 form (表單)
                        $("#result").html('<font color="#ff0000">發生錯誤：' + jqXHR.status + '</font>');
                    }
                })
            })
        });
        </script>
    </body>
</html>