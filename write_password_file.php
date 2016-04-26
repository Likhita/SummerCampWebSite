<?php

// add your username and password pairs
$salt = '$1$lsoifkrhtpbmeoqmgti';
$num_entries = 3; // how many username/password pairs

$users =     array('cs545',    'likhita',  'report');
$passwords = array('fall2012', 'student', 'hopper');

foreach($passwords as $value) {
    echo "Encrypting $value to ".crypt($value, $salt)."\n";
    $encrypted_passwords[] = crypt($value, $salt);
 }
$to_store = '';    
for($i=0; $i < $num_entries; $i++) 
    $to_store .= $users[$i]."=".$encrypted_passwords[$i]."\n";
    
file_put_contents('passwords.dat',$to_store);       

?>
