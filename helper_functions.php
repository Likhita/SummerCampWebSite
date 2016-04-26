<?php
    
function get_connection() {
    $server = 'opatija.sdsu.edu:3306';
    $user = 'jadrn052';
    $password = 'stopper';
    $database = 'jadrn052';          
    if(!($db = mysqli_connect($server, $user, $password, $database))) 
        die('SQL ERROR: Connection failed: '.mysqli_error($db));
    return $db;
    }    
    
function do_disconnect($db) {
    if($db)
        mysqli_close($db);
        }
        
function store_data() {
    $db = get_connection();
    
    if(!(is_duplicate_parent($db))) 
        insert_parent_record($db);        

    if(!(is_duplicate_child($db))) 
        insert_child_record($db);        
    
    if(is_duplicate_camp($db)) {
        do_disconnect($db);
        return false;
        }        
    else
        insert_camp_records($db);
    do_disconnect($db); 
    return true;
    }        

# It is possible to have two children with the same name, but different parents        
function get_child_id($db) { 
    $parent_id = get_parent_id($db);
    $child_id_query = "SELECT id FROM child WHERE first_name='$_POST[childfname]' ";
    $child_id_query .= "AND last_name='$_POST[childlname]' ";   
    $child_id_query .= "AND parent_id='$parent_id'";
    if(!($result = mysqli_query($db,$child_id_query)))
        die('SQL ERROR: '.mysqli_error($db));
    $field = $result->fetch_array();
    $child_id = $field[0]; # we should get the child id, if not ERROR 
    return $child_id;
    }   

# Using first name, last name and phone number as the check for duplicates    
function get_parent_id($db) {
   $phone = $_POST['area_phone'].'-'.$_POST['prefix_phone'].'-'.$_POST['phone']; 
   $query = "SELECT id from parent WHERE first_name='$_POST[fname]' ";        
   $query .= "AND last_name='$_POST[lname]' ";
   $query .= "AND primary_phone='$phone'";
   if(!($result = mysqli_query($db,$query)))
       die('SQL ERROR: '.mysqli_error($db));
   $field = $result->fetch_array();
   $parent_id = $field[0]; # we should get the parent id, if not ERROR 
   return $parent_id;
   }       

# Returns true if the child first name, last name and parent id is in the db       
function is_duplicate_child($db) {
    $parent_id = get_parent_id($db);   
    if(!($parent_id)) return false;
    $check_dup_query  = "SELECT first_name, last_name, parent_id FROM child ";
    $check_dup_query .= "WHERE first_name='$_POST[childfname]' ";
    $check_dup_query .= "AND last_name='$_POST[childlname]' ";
    $check_dup_query .= "AND parent_id='$parent_id'";        
    if(!($result = mysqli_query($db,$check_dup_query)))
        die('SQL ERROR: '.mysqli_error($db));    
    $field = $result->fetch_array(); # get one row of the result set array out
    if(count($field) == 0)
        return false;
    return true;
    }
    
function insert_child_record($db) {  
   # first get the parent_id so we can do the child insertion
   $parent_id = get_parent_id($db);   
   # we now have the parent_id, do the child insert
   $to_insert = "INSERT INTO child VALUES
           ('','$parent_id','$_POST[cfname]','$_POST[clname]')";                
   if(!($result = mysqli_query($db,$to_insert)))
       die('SQL ERROR:  '.mysqli_error($db));
       }
                  
function is_duplicate_parent($db) {
    # Since the form has the phone number in three pieces, concatenate them into one.
    $phone = $_POST['area_phone'].'-'.$_POST['prefix_phone'].'-'.$_POST['phone'];
    $check_dup_query = "SELECT first_name, last_name, primary_phone FROM parent ";
    $check_dup_query .= "WHERE first_name='$_POST[fname]' ";
    $check_dup_query .= "AND last_name='$_POST[lname]' ";
    $check_dup_query .= "AND primary_phone='$phone'";
    if(!($result = mysqli_query($db,$check_dup_query)))
        die('SQL ERROR: '.mysqli_error($db));    
    $field = $result->fetch_array(); # get one row of the result set array out
    if(count($field) == 0)
        return false;
    return true;
    }
            
function insert_parent_record($db) {
    $phone = $_POST['area_phone'].'-'.$_POST['prefix_phone'].'-'.$_POST['phone'];
    $to_insert = "INSERT INTO parent VALUES
        ('','$_POST[fname]','$_POST[lname]','$phone')";
    if(!($result = mysqli_query($db,$to_insert)))
        die('SQL ERROR: '.mysqli_error($db));
    }

# We must loop through the camps selected, and see if we already have the child
# enrolled in that camp.  If any camp is a duplicate, the form is invalid
# That is, Johnny might be enrolled in Band Camp.  If his parent submits a new
# form with Band Camp and Basketball Camp, the form is rejected even though
# Basketball camp is new.  The Band Camp is a duplicate so the form is rejected.    
function is_duplicate_camp($db) {
    $camps = $_POST['camp'];
    $child_id = get_child_id($db);
	$i=0;
	foreach($camps as $camp) {
		$camp_check="select * from camp where description =\"$camp\"";
		if(!($result = mysqli_query($db,$camp_check)))
			die('SQL ERROR: '.mysqli_error($db));
		$field = $result->fetch_array(); 
		$camp_id_array[$i]=$field[0];
		$i++;
	}
    foreach($camp_id_array as $selected_camp) {
        $camp_check = "SELECT * FROM enrollment WHERE camp_id='$selected_camp' ";
        $camp_check .= "AND child_id='$child_id'";        
        if(!($result = mysqli_query($db,$camp_check)))
            die('SQL ERROR: '.mysqli_error($db));
        $field = $result->fetch_array();
        if(count($field) != 0)            
            return true;
    }
        return false;
}        
    
function insert_camp_records($db) {  
    $child_id = get_child_id($db);  
    $camps = $_POST['camp'];
    foreach($camps as $selected_camp) {    
        $to_insert = "INSERT INTO enrollment VALUES
            ('$selected_camp', '$child_id')";
        if(!($result = mysqli_query($db,$to_insert)))
            die('SQL ERROR: '.mysqli_error($db));                        
        }
    }              
?>    
