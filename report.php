<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<!--    Likhita, Gonchikara    Account:  jadrn052
        CS545, Fall 2012
        Project #3
-->   
<head>
	<title>Happy Days Summer camp</title>
	<meta http-equiv="content-type" 
		content="text/html;charset=utf-8" />

    <link rel="stylesheet" type="text/css" href="login.css" />
	<link href='http://fonts.googleapis.com/css?family=Headland+One|Oxygen+Mono|Griffy|Jacques+Francois+Shadow' rel='stylesheet' type='text/css'/>

</head>
<body>
	<div id="container">
		<div id="content">
<?php
    session_start();
    
    if($_SESSION['valid']) {    
        //echo "The session is valid.<br />\n";
        }
    else {
            $page = file_get_contents("unauth_login.html");
            echo $page;
            exit;
            }    
?>		
		<a id="logout" href="logout.php">Logout Now</a>	
		<h1>Happy days Summer camp</h1><br />
		<h2>Report</h2><br />
<?php	
    $server = 'opatija.sdsu.edu:3306';
    $user = 'jadrn052';
    $password = 'stopper';
    $database = 'jadrn052';          
    if(!($db = mysqli_connect($server, $user, $password, $database))) 
        die('SQL ERROR: Connection failed: '.mysqli_error($db));
	
	$check = " select count(*) from child";    
    if(!($result = mysqli_query($db,$check)))
        die('SQL ERROR: '.mysqli_error($db));
	$child_num = $result->fetch_array();
	
	do_disconnect($db);
	
	for($child_id=1;$child_id<=$child_num[0];$child_id++){
		generate_report($child_id);
	}

function do_disconnect($db) {
    if($db)
        mysqli_close($db);
    }
	
function generate_report($child_id){
	$i=0;
    $server = 'opatija.sdsu.edu:3306';
    $user = 'jadrn052';
    $password = 'stopper';
    $database = 'jadrn052';          
    if(!($db = mysqli_connect($server, $user, $password, $database))) 
        die('SQL ERROR: Connection failed: '.mysqli_error($db));
	
	$check = " select * from child WHERE id = \"$child_id\"";    
    if(!($result = mysqli_query($db,$check)))
        die('SQL ERROR: '.mysqli_error($db));
	$field = $result->fetch_array();
	//echo "Camps enrolled :$field[$i]\n";
	
	//$i++;
	$fname = $_FILES['file']['name'];

	$UPLOAD_DIR = 'images/';
	echo "<h2 id=\"childtitle\"><b>$field[2] $field[3] $field[4]</b><br /><br /></h2>";
	echo "<img id=\"childphoto\" src=\"$UPLOAD_DIR/$field[6]\""." width='250px' />";
	echo "<div id=\"camps\">";
	echo "<h3><b>Camps enrolled</b><br /></h3>";
	echo "<b><br />Camps enrolled :</b>";
	$check = " select description from camp where id in (select camp_id from enrollment WHERE child_id = \"$child_id\")";    
    if(!($result = mysqli_query($db,$check)))
        die('SQL ERROR: '.mysqli_error($db));
	$camp = $result->fetch_array();	
	$i=0;
	while($camp[$i]){
		echo "     $camp[$i]<br />";
		$camp = $result->fetch_array();
	}
	echo "</div>";
	
	echo "<div id=\"childdetails\">";
	echo "<h3><b>Child information</b><br /></h3>";
	echo "<p>";
	echo "<br /><b>First name:</b> $field[2]<br />";
	echo "<b>Middle name:</b> $field[3]<br />";
	echo "<b>Last name:</b> $field[4]<br />";
	echo "<b>Nick name:</b> $field[5]<br />";
	echo "<b>Gender:</b> $field[7]<br />";
	echo "<b>DOB:</b> $field[8]<br />";
	echo "<b>Medical conditions:</b> $field[9]<br />";
	echo "<b>Dietary requirements:</b> $field[10]<br />";
	echo "<b>Emergency contact name:</b> $field[11]<br />";
	echo "<b>Emergency contact number:</b> $field[12]</p>";
	echo "</div>";
	
	$check = " select * from parent WHERE id = \"$field[1]\"";    
    if(!($result = mysqli_query($db,$check)))
        die('SQL ERROR: '.mysqli_error($db));
	$field = $result->fetch_array();
	
	echo "<div id=\"parentdetails\">";
	echo "<h3><b>Parent information</b></h3>";
	echo "<br /><b>First name:</b>$field[1]<br />";
	echo "<b>Middle name:</b> $field[2]<br />";
	echo "<b>Last name:</b> $field[3]<br />";
	echo "<b>Relationship to child:</b> $field[4]<br />";
	echo "<b>Address Line 1:</b> $field[5]<br />";
	echo "<b>Address Line 2:</b> $field[6]<br />";
	echo "<b>City:</b> $field[7]<br />";
	echo "<b>State:</b> $field[8]   ";
	echo "<b>Zip:</b> $field[9]<br />";
	echo "<b>Primary phone:</b> $field[10]<br />";
	echo "<b>Secondary phone:</b> $field[11]<br />";
	echo "<b>Email:</b> $field[12]<br />";
	
	echo "</div><br /><br /><br />";
	echo "<br /><hr /><br />";
	
	do_disconnect($db);
}
?>
	<div id=\"footer\">
	</div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
	</div> 
	</div> 
	</body>
	</html>