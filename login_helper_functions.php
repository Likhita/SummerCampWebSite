<?php

function check_login($user, $pass) {
    $salt = '$1$lsoifkrhtpbmeoqmgti';

    $lines = file_get_contents('passwords.dat');
    $entries = explode("\n",$lines);
    foreach($entries as $line) {
        $pair = explode("=",$line); // split user=password
        if($pair[0] == $user && $pair[1] == crypt($pass,$salt))
            return true;
            }              
    return false;
}

?>
