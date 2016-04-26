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
    
    <link rel="stylesheet" type="text/css" media="screen" href="login.css" />
    <link href='http://fonts.googleapis.com/css?family=Headland+One|Oxygen+Mono|Griffy|Jacques+Francois+Shadow' rel='stylesheet' type='text/css'/>
</head>

<body>
<!-- authenticate before printing the secret report! -->
<h1>Report Page</h1>
<?php

    session_start();
	
    if(isset($_COOKIE[session_name()])) {
        setcookie(session_name(), '', time()-1000,'/');
        session_destroy();        
        }
    ?>    
    <h2>You have now successfully logged out.</h2>
        
<a href="login.html">Click HERE to log in again</a>

</body>
</html>

