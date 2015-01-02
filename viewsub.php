<?php
$con=mysql_connect('118.67.248.238','bcausesql','$BcauseSQL123$');
if (mysqli_connect_errno($con))
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  die();
  }
 mysql_select_db('bcausedb');
 $sql = "SELECT * FROM `subscription`";
 $sql1=mysql_query($sql);
 ?>
 <?php
 session_start();
 if((isset($_POST['pass'])&&$_POST['pass']=="pass")||(isset($_SESSION['log'])&&$_SESSION['log']=="1")){
	if(!(isset($_SESSION['log'])&&$_SESSION['log']=="1"))
	$_SESSION['log']=1;	
 if(isset($_GET['save'])&&$_GET['save']==true){

 	$f = fopen('php://memory', 'w');
	$sql = "SELECT * FROM `subscription`";
	$sql1=mysql_query($sql);
	while ($data=mysql_fetch_assoc($sql1)) {
	$i=$data['i'];
	$email=$data['email'];
	$date=$data['date'];
	$line =array($i,$email,$date);
	fputcsv($f, $line, ';'); 
	}
	fseek($f, 0);	
	header('Content-Type: application/csv');
	header("Content-Disposition: attachment; filename=db.csv");
	fpassthru($f);
	die();
 }
 // savefile();
 ?>
<style type="text/css">
td{
	padding: 2px;
}
</style>
<button id="save">Save</button>
<script src="js/jquery.js" type="text/javascript" ></script>
<script type="text/javascript">
		$('#save').click(function(){
			window.location.href='viewsub.php?save=true';
		});
</script>
<table border="1">
<tr style="text-align:center;font-weight:bold;"><td>Id</td><td>Email</td><td>Date</td></tr>
<?php
while ($data=mysql_fetch_assoc($sql1)) {
echo '<tr';
$i=$data['i'];
$email=$data['email'];
$date=$data['date'];

$s=(($i%2)==0)?('><td>'):(' style="background-color:yellow;"><td>');
echo $s;
echo $i.'</td><td>';
echo $email.'</td><td>';
echo $date.'</td>';
echo '</tr>';
}
?>
</table>
<?php }
else {
	echo '<script src="js/jquery.js" type="text/javascript" ></script>';
	?>
	<script type="text/javascript">
	$(function(){
		$('#log').click(function(){
			$.post('viewsub.php',{pass: $('#pass').val()},function(){
				window.location.href='viewsub.php';
			});
		})
	});</script>
	<label>Password:</label><input type="password" name="pass" value="" id="pass">
	<button id="log">Login</button>
	<?php
	// die('invalid pass');
}

?>