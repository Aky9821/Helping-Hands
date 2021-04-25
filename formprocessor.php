<?php
define('DB_NAME', 'b18_28421545_formdata');
define('DB_USER', 'b18_28421545');
define('DB_PASSWORD', 'Aky_9821');
define('DB_HOST', 'sql110.byethost18.com');

$link = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
        
if($link === false){
    die("ERROR: Could not connect. 1"  . mysqli_connect_error());
}

$db_selected =mysql_select_db(DB_NAME,$link);
if($db_selected === false){
    die("ERROR: Could not connect. 2"  . mysqli_connect_error());
}


$name=$_POST['name'];
$email=$_POST['email'];
$complainttype=$_POST['complainttype'];
$days=$_POST['days'];
$address=$_POST['address'];
$address2=$_POST['email'];
$city=$_POST['city'];
$state=$_POST['state'];
$zip=$_POST['zip'];
$complaint=$_POST['complaint'];


$statusMsg = '';


$targetDir = "userimages/";
$fileName = basename($_FILES["image"]["name"]);
$targetFilePath = $targetDir . $fileName;
$fileType = pathinfo($targetFilePath,PATHINFO_EXTENSION);

$targetDir2 = "uservideos/";
$fileName2 = basename($_FILES["video"]["name"]);
$targetFilePath2 = $targetDir2 . $fileName2;
$fileType2 = pathinfo($targetFilePath2,PATHINFO_EXTENSION);

if(!empty($_FILES["video"]["name"])){
    
        if(move_uploaded_file($_FILES["image"]["tmp_name"], $targetFilePath) && move_uploaded_file($_FILES["video"]["tmp_name"], $targetFilePath2) ){
            $insert = $link->query("INSERT into Data (name,email,days,complainttype,address,address2,city,state,zip,complaint,image,video) VALUES ('$name','$email','$days','$complainttype','$address','$address2','$city','$state','$zip','$complaint','".$fileName."','".$fileName2."')");
        }
}
else{
    if(move_uploaded_file($_FILES["image"]["tmp_name"], $targetFilePath)){
            $insert = $link->query("INSERT into Data (name,email,days,complainttype,address,address2,city,state,zip,complaint,image) VALUES ('$name','$email','$days','$complainttype','$address','$address2','$city','$state','$zip','$complaint','".$fileName."')");
    }
}
?>


if(mysqli_query($link, $sql)){
    echo "<h3>data stored in a database successfully." 
        . " Please browse your localhost php my admin" 
        . " to view the updated data</h3>"; 

    echo nl2br("\n$name\n $days\n "
        . "$email $city $address $address2 ");
} else{
    echo "ERROR: Hush! Sorry $sql. " 
        . mysqli_error($conn);
}

mysql_close();
?>