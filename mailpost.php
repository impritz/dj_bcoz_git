<?php
$con=mysql_connect('118.67.248.238','bcausesql','$BcauseSQL123$');
if (mysqli_connect_errno($con))
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  die();
  }
 mysql_select_db('bcausedb');
if(!$con)
	die('No DB');
if(isset($_POST['email'])){
	$email=$_POST['email'];
	$sql = "SELECT * FROM `subscription` WHERE email='$email'";
	$sql=mysql_query($sql);
 	if(mysql_num_rows($sql)==0){
	$sql = "INSERT INTO `subscription`(`email`, `date`) VALUES ('$email',CURRENT_TIMESTAMP)";
	$sql=mysql_query($sql);
	echo 'done';
	}
	else{
		echo 'already';
	}
}
else
	die("No email");
?>