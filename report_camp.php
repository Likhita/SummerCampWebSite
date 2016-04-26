<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<!--    Likhita, Gonchikara    Account:  jadrn052
        CS545, Fall 2012
        Project #3
-->   
<head>
	<title>Report page</title>
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
		<h1>Report of children enrolled sorted by camp</h1><br />
<?php	
    $server = 'opatija.sdsu.edu:3306';
    $user = 'jadrn052';
    $password = 'stopper';
    $database = 'jadrn052';          
    if(!($db = mysqli_connect($server, $user, $password, $database))) 
        die('SQL ERROR: Connection failed: '.mysqli_error($db));
	
	$camp_names=array("Band camp","Swimming","Nature discovery","Basketball camp","Physical training");
	$check = " select * from camp";    
    if(!($result_camp = mysqli_query($db,$check)))
        die('SQL ERROR: '.mysqli_error($db));
	$camp = $result_camp->fetch_array();
	
	$i=0;
	while($camp[0]){
		echo "<table><caption>Children enrolled in $camp[1]</caption>";
		echo "<tr><th>Last name</th><th>First name</th><th>Sex</th><th>Age</th><th>Medical conditions</th></tr>";
		$check = "select last_name,first_name,gender,birthdate,medical_conditions from child where id in (select child_id from enrollment where camp_id=$camp[0]) order by last_name";    
		if(!($result = mysqli_query($db,$check)))
			die('SQL ERROR: '.mysqli_error($db));
		$field = $result->fetch_array();
		
		while($field[0]){
			$date_array = explode('-',$field[3]);
			$now = getdate(time());
			$current_year = $now['year'];
			$age = $current_year - $date_array[2];
			echo "<tr><td>$field[0]</td><td>$field[1]</td><td>$field[2]</td><td>$age</td><td>$field[4]</td>";
			$field = $result->fetch_array();
		}
		echo "</table><br /><br />";
		$i++;
		$camp = $result_camp->fetch_array();
	}	
	do_disconnect($db);


function do_disconnect($db) {
    if($db)
        mysqli_close($db);
    }
	
function generate_report($child_id,$db){
	$i=0;
	$check = " select * from child WHERE id = \"$child_id\"";    
    if(!($result = mysqli_query($db,$check)))
        die('SQL ERROR: '.mysqli_error($db));
	$field = $result->fetch_array();
    echo "<tr><td>$field[4]</td><td>$field[2]</td><td>$field[7]</td><td>$field[8]</td><td>$field[9]</td>";	
}
?>
	<div id=\"footer\">
	</div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
	</div> 
	</div> 
	</body>
	</html>