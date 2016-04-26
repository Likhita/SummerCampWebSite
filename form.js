/*  form.js
    Likhita Gonchikara proj#3
    CS545 Fall 2012
*/    


$(document).ready( function() {
    var valid = true;
    $('[name="fname"]').focus(); // put focus on first field in form
        
    $('[name="zip"]').on('blur', function(e) {
        var input = $.trim($('[name="zip"]').val());
        var zipTester = /^\d{5}(-\d{4})?$/;
        if(!zipTester.test(input)) {
            $('#message_line').text("Your zip code appears to be invalid");
            this.style.border = "1px solid red";
            }
        else {
            this.style.border = "1px solid black";
            $('#message_line').text("");            
            }
        }); 
        
    $('[name="area_phone"]').on('keyup', function() {
        if($('[name="area_phone"]').val().length == 3)       
            $('[name="prefix_phone"]').focus();
        });
            
    $('[name="prefix_phone"]').on('keyup', function() {
        if($('[name="prefix_phone"]').val().length == 3)       
            $('[name="phone"]').focus();
        }); 
        
    $('[name="area_phone"]').on('blur', function() {
        var tmp = $.trim($('[name="area_phone"]').val());
        if(tmp == "") return;
        if(tmp.length != 3 || !$.isNumeric(tmp))  {     
            $('#message_line').text("Your area code appears to be invalid");
            this.style.border = "1px solid red";
            }
        else {
            this.style.border = "1px solid black";
            $('#message_line').text("");
            }        
        });
        
    $('[name="prefix_phone"]').on('blur', function() {
        var tmp = $.trim($('[name="prefix_phone"]').val());
        if(tmp == "") return;        
        if(tmp.length != 3 || !$.isNumeric(tmp))  {     
            $('#message_line').text("Your phone number prefix appears to be invalid");
            this.style.border = "1px solid red";
            }
        else {
            this.style.border = "1px solid black";
            $('#message_line').text("");
            }        
        });    
        
    $('[name="phone"]').on('blur', function() {
        var tmp = $.trim($('[name="phone"]').val());
        if(tmp == "") return;        
        if(tmp.length != 4 || !$.isNumeric(tmp))  {     
            $('#message_line').text("Your phone number prefix appears to be invalid");
            this.style.border = "1px solid red";
            }
        else {
            this.style.border = "1px solid black";
            $('#message_line').text("");
            }        
        });             
	
	$('[name="sarea_phone"]').on('keyup', function() {
        if($('[name="sarea_phone"]').val().length == 3)       
            $('[name="sprefix_phone"]').focus();
        });
            
    $('[name="sprefix_phone"]').on('keyup', function() {
        if($('[name="sprefix_phone"]').val().length == 3)       
            $('[name="sphone"]').focus();
        }); 
        
    $('[name="sarea_phone"]').on('blur', function() {
        var tmp = $.trim($('[name="sarea_phone"]').val());
        if(tmp == "") return;
        if(tmp.length != 3 || !$.isNumeric(tmp))  {     
            $('#message_line').text("Your area code appears to be invalid");
            this.style.border = "1px solid red";
            }
        else {
            this.style.border = "1px solid black";
            $('#message_line').text("");
            }        
        });
        
    $('[name="sprefix_phone"]').on('blur', function() {
        var tmp = $.trim($('[name="sprefix_phone"]').val());
        if(tmp == "") return;        
        if(tmp.length != 3 || !$.isNumeric(tmp))  {     
            $('#message_line').text("Your phone number prefix appears to be invalid");
            this.style.border = "1px solid red";
            }
        else {
            this.style.border = "1px solid black";
            $('#message_line').text("");
            }        
        });    
        
    $('[name="sphone"]').on('blur', function() {
        var tmp = $.trim($('[name="sphone"]').val());
        if(tmp == "") return;        
        if(tmp.length != 4 || !$.isNumeric(tmp))  {     
            $('#message_line').text("Your phone number prefix appears to be invalid");
            this.style.border = "1px solid red";
            }
        else {
            this.style.border = "1px solid black";
            $('#message_line').text("");
            }        
        });	
	$('[name="area"]').on('keyup', function() {
        if($('[name="area"]').val().length == 3)       
            $('[name="prefix"]').focus();
        });
            
    $('[name="prefix"]').on('keyup', function() {
        if($('[name="prefix"]').val().length == 3)       
            $('[name="number"]').focus();
        }); 
        
    $('[name="area"]').on('blur', function() {
        var tmp = $.trim($('[name="area"]').val());
        if(tmp == "") return;
        if(tmp.length != 3 || !$.isNumeric(tmp))  {     
            $('#message_line').text("Your area code appears to be invalid");
            this.style.border = "1px solid red";
            }
        else {
            this.style.border = "1px solid black";
            $('#message_line').text("");
            }        
        });
        
    $('[name="prefix"]').on('blur', function() {
        var tmp = $.trim($('[name="prefix"]').val());
        if(tmp == "") return;        
        if(tmp.length != 3 || !$.isNumeric(tmp))  {     
            $('#message_line').text("Your phone number prefix appears to be invalid");
            this.style.border = "1px solid red";
            }
        else {
            this.style.border = "1px solid black";
            $('#message_line').text("");
            }        
        });    
        
    $('[name="number"]').on('blur', function() {
        var tmp = $.trim($('[name="number"]').val());
        if(tmp == "") return;        
        if(tmp.length != 4 || !$.isNumeric(tmp))  {     
            $('#message_line').text("Your phone number prefix appears to be invalid");
            this.style.border = "1px solid red";
            }
        else {
            this.style.border = "1px solid black";
            $('#message_line').text("");
            }        
        });
	
	$('[name="state"]').on('blur',function(){
		var tmp=$.trim($('[name="state"]').val());
		if(tmp == "")	return;
		var stateTester =/^[A-Z][A-Z]$/;
		if(!stateTester.test(tmp)){
			$('#message_line').text("Your state code appears to be invalid");
			this.style.border = "2px solid red";	
		}
		else{
			this.style.border="1px solid black";
			$('#message_line').text("");
			}
		});

	$('[name="dob"]').on('blur',function(){
		var tmp=$.trim($('[name="dob"]').val());
		if(tmp=="")	return;
		if(not_valid_date_format(tmp)){
			$('#message_line').text("Date format appears to be invalid");
			this.style.border = "2px solid red";	
		}
		else if(not_valid_date(tmp)){
			$('#message_line').text("Your date of birth appears to be invalid");
			this.style.border = "2px solid red";
		}
		else if(not_valid_age(tmp)){
			$('#message_line').text("Sorry, only children above 5 and below 18 can register");
			this.style.border = "2px solid red";
		}
		else{
			this.style.border="1px solid black";
			$('#message_line').text("");
			}
		});
		
	function not_valid_age(birthdate){
		var date_array = birthdate.split("-");
		birthday = new Date(date_array[2],date_array[1],date_array[0]);
		var current_date=new Date();
		if((current_date.getFullYear()- birthday.getFullYear())<18 && (current_date.getFullYear()- birthday.getFullYear())>5){
			return false;
		}
		else{
			return true;
			}
	}	

	function not_valid_date_format(date){
		var datetester=/^\d{2}\-\d{2}\-\d{4}$/;
		if (!datetester.test(date)){
			return true;
		}
		return false;
	}
	
	function not_valid_date(date){
		var month=date.split("-")[0];
		var day=date.split("-")[1];
		var year=date.split("-")[2];
		var birthdate = new Date(year, month, day);
		if ((birthdate.getMonth()!=month)||(birthdate.getDate()!=day)||(birthdate.getFullYear()!=year)){
			return true;
		}
		else
			return false;
	}
	
	$('[name="email"]').on('blur', function() {
        var tmp = $('[name="email"]').val();
        if(tmp.indexOf(".") == -1 || tmp.indexOf("@") == -1) {
            $('#message_line').text("Your Email address appears to be invalid");
            this.style.border = "1px solid red";           
            }
        else {
            this.style.border = "1px solid black";
            $('#message_line').text("");            
            }            
        });	
            
    $(':reset').on('click', function(e) {  
        $('input').text("");
        $('*').removeClass("displayerror");
        $('#message_line').text("");
        $('[name="fname"]').focus();        
        });      
        
    $(':submit').on('click', function(e) {
        $('input').removeClass("displayerror");
        $('#message_line').text("");    
        if(!validate_fields_on_submit()) {
            e.preventDefault();
			alert('fields not validated'); 
            return;
            }
        
        var params = $('form').serialize();      
        var url = "ajax_check_dups.php?" + params;
        var request = new HttpRequest(url, submitHandler);
        request.send();
		alert('request sent'); 
        $('#busy_wait').css('display','block');
        e.preventDefault();       
        });
        
    function submitHandler(response) {
        $('#message_line').text("");    
        response = $.trim(response);
		alert(response);
        if(response == "ok") {
            $('form').submit();
			alert('form submitted manually'); 
			}
        else 
            $('#message_line').text("Error, duplicate record");  
        $('#busy_wait').css('display','none');                                                        
        }
        
    function is_blank(str) {
        var input = $.trim(str);    
        if(input.length == 0)
            return true;
        return false;
        }
             
             
    function not_valid_phone(number, size) {                        
        var tmp = $.trim(number);
        if(tmp.length != size || !$.isNumeric(tmp))
            return true;
        return false;
        }
        
    function is_camp_empty() {
        var empty=true;
        $(':checkbox').each(function() {
            if(this.checked)
                empty=false; 
            });
        return empty;
        }  
		
    function validate_fields_on_submit() {   
        var bad=false;
		$('#boxes').removeClass("displayerror");
		if(is_camp_empty()) {
            bad=true; 
            $('#boxes').addClass("displayerror");
            $('#message_line').text("Please select at least one camp");            
            }
        else if(is_blank($('[name="fname"]').val())) {
            bad=true; 
            $('[name="fname"]').focus();
            $('[name="fname"]').addClass("displayerror");     
            $('#message_line').text("Please enter the first name");            
            }
        else if(is_blank($('[name="lname"]').val())) {
            bad=true; 
            $('[name="lname"]').focus();
            $('[name="lname"]').addClass("displayerror");     
            $('#message_line').text("Please enter the last name");            
            }
		else if(is_blank($('input:radio[name=relation]:checked').val())){
			bad=true;
			$('[name="relation"]').focus();
			$('[name="relation"]').addClass("displayerror");
			$('#message_line').text("Please select your relationship to child"); 
		}			
		else if(is_blank($('[name="address1"]').val())) {
            bad=true; 
            $('[name="address1"]').focus();
            $('[name="address1"]').addClass("displayerror");     
            $('#message_line').text("Please enter the address");            
            } 
		else if(is_blank($('[name="city"]').val())) {
            bad=true; 
            $('[name="city"]').focus();
            $('[name="city"]').addClass("displayerror");     
            $('#message_line').text("Please enter the city");            
            } 
		else if(is_blank($('[name="state"]').val())) {
            bad=true; 
            $('[name="state"]').focus();
            $('[name="state"]').addClass("displayerror");     
            $('#message_line').text("Please enter the state");            
            } 
		else if(is_blank($('[name="zip"]').val())) {
            bad=true; 
            $('[name="zip"]').focus();
            $('[name="zip"]').addClass("displayerror");     
            $('#message_line').text("Please enter the zip");            
            } 		
        else if(not_valid_phone($('[name="area_phone"]').val(),3)) {
            bad=true; 
            $('[name="area_phone"]').addClass("displayerror");     
            $('#message_line').text("The area code appears to be invalid");            
            $('[name="area_phone"]').focus();
            }   
        else if(not_valid_phone($('[name="prefix_phone"]').val(),3)) {
            bad=true; 
            $('[name="prefix_phone"]').addClass("displayerror");     
            $('#message_line').text("The prefix appears to be invalid");            
            $('[name="prefix_phone"]').focus();
            }
        else if(not_valid_phone($('[name="phone"]').val(),4)) {
            bad=true; 
            $('[name="phone"]').addClass("displayerror");     
            $('#message_line').text("The phone number appears to be invalid");            
            $('[name="phone"]').focus();
            } 
		else if(is_blank($('[name="email"]').val())) {
            bad=true; 
            $('[name="email"]').focus();
            $('[name="email"]').addClass("displayerror");     
            $('#message_line').text("Please enter the email id");            
            } 		
        else if(is_blank($('[name="childfname"]').val())) {
            bad=true; 
            $('[name="childfname"]').focus();
            $('[name="childfname"]').addClass("displayerror");     
            $('#message_line').text("Please enter the child's first name");            
            } 
        else if(is_blank($('[name="childlname"]').val())) {
            bad=true; 
            $('[name="childlname"]').focus();
            $('[name="childlname"]').addClass("displayerror");     
            $('#message_line').text("Please enter the child's last name");            
            }              
		else if(is_blank($('[name="file"]').val())) {
            bad=true; 
            $('[name="file"]').focus();
            $('[name="file"]').addClass("displayerror");     
            $('#message_line').text("Please upload a photo of the child");            
            }
		else if(is_blank($('input:radio[name=gender]:checked').val())){
			bad=true;
			$('[name="gender"]').focus();
			$('[name="gender"]').addClass("displayerror");
			$('#message_line').text("*Please select child's gender");
		}	
		else if(is_blank($('[name="dob"]').val())) {
            bad=true; 
            $('[name="dob"]').focus();
            $('[name="dob"]').addClass("displayerror");     
            $('#message_line').text("Please enter the child's DOB");            
            } 
		else if(not_valid_date($('[name="dob"]').val())) {
            bad=true; 
            $('[name="dob"]').focus();
            $('[name="dob"]').addClass("displayerror");     
            $('#message_line').text("Please enter a valid DOB");            
            } 	
		else if(is_blank($('[name="secname"]').val())) {
            bad=true; 
            $('[name="secname"]').focus();
            $('[name="secname"]').addClass("displayerror");     
            $('#message_line').text("Please enter the emergency contact name");            
            } 	
		else if(not_valid_phone($('[name="area"]').val(),3)) {
            bad=true; 
            $('[name="area"]').addClass("displayerror");     
            $('#message_line').text("The emergency contact number'sarea code appears to be invalid");            
            $('[name="area"]').focus();
            }   
        else if(not_valid_phone($('[name="prefix"]').val(),3)) {
            bad=true; 
            $('[name="prefix"]').addClass("displayerror");     
            $('#message_line').text("The emergency contact number's prefix appears to be invalid");            
            $('[name="prefix"]').focus();
            }
        else if(not_valid_phone($('[name="number"]').val(),4)) {
            bad=true; 
            $('[name="number"]').addClass("displayerror");     
            $('#message_line').text("The emergency contact number's phone number appears to be invalid");            
            $('[name="number"]').focus();
            } 		
        if(bad)                                         
            return false;
        return true; // the form is valid  
        }   
                   
    }
);
