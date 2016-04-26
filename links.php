<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
	<title>Login page</title>
	<meta http-equiv="content-type" 
		content="text/html;charset=utf-8" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="expires" content="0" />        
	<meta http-equiv="Content-Style-Type" content="text/css" />   
    
	<link href='http://fonts.googleapis.com/css?family=Headland+One|Oxygen+Mono|Griffy|Jacques+Francois+Shadow' rel='stylesheet' type='text/css'/>
    <link rel="stylesheet" type="text/css" media="screen" href="login.css" />
      
</head>
<?php
    session_start();
    
    if($_SESSION['valid']) {    
        }
    else {
            $page = file_get_contents("unauth_login.html");
            echo $page;
            exit;
            }    
?>	
<body>
    <div id="content">
        <h1>Report Page</h1><br /><a id="logout" href="logout.php">Logout Now</a>
        <h2>Welcome, You are now logged in!</h2>      
		<h3> Please click on the report you want to view</h3>
        <a href="report.php">View report of all the children enrolled</a><br /><br />
        <a href="report_camp.php">View report of all children sorted by camp enrolled</a><br /><br />
    </div>    
</body>
</html>

