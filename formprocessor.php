<?php

if(isset($_POST['submit'])){
    $name =$_POST['name'];
    $email =$_POST['email'];
    $complainttype =$_POST['complainttype'];
    echo "Name : ".$name;
    echo "Email : ".$email;
}