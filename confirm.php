<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<!--    Likhita, Gonchikara    Account:  jadrn052
        CS545, Fall 2012
        Project #2
--> 
<head>
	<title>Happy Days Summer camp</title>
	<meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <link rel="stylesheet" type="text/css" href="proj2.css" />
	<link href='http://fonts.googleapis.com/css?family=Headland+One|Oxygen+Mono|Griffy|Jacques+Francois+Shadow' rel='stylesheet' type='text/css'/>

</head>

<body>
	<div id="container">
		<div id="content">
		<h1>Thanks for Registering!</h1><br />
		<h2>Your information is below</h2> <br /><br />
    <table>
<?php    
	$fname = $_FILES['file']['name'];
	$UPLOAD_DIR = 'images/';
	echo "<img src=\"$UPLOAD_DIR/$fname\""." width='200px' />";
	$key_array=array("Camp:","First name:","Middle name:","Last name:","Relationship:","Address line 1:","Address line 2:","City:","State:",
	"Zip:","Phone :","","","Secondary phone:","","","Email :","Child first name:","Child middle name:","Child last name:",
	"Child nick name:","Gender:","Date of Birth","Medical conditions:","Dietary requirements","Emergency contact name:",
	"Emergency contact phone number:","","");
	$i=0;
	foreach($_POST as $k => $v) {
		echo "<tr>\n";
		echo "<td>$key_array[$i]</td>\n";
		if(is_array($v)){
			echo "<td>";
			foreach($v as $subitem)
				echo "$subitem<br />\n";
			echo "</td>\n";
		}
		else{						
			echo "<td>$v</td>\n";		
		}
		echo "</tr>\n";
	$i++;
	if($i > 28) break;
	}
	echo "</table>";
?>
        
	<div id="footer">
		</div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
		</div> 
	</div>      
</body>
</html>
