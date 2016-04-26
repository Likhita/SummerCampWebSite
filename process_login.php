<?php
        include 'login_helper_functions.php';
        
        $entered_user = trim($_POST['username']);
        $entered_password = trim($_POST['password']);
                
        if(check_login($entered_user, $entered_password)) {
			header ("Location: /~jadrn052/proj3/links.php");
            }
        else {
            $page = file_get_contents("error_login.html");
            echo $page;
            exit;
            }
            
        session_start();
        $_SESSION['valid'] = 1;
        $_SESSION['user'] = $username;
?>  