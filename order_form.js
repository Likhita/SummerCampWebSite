/*  form.js
    Likhita Gonchikara proj#4
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
		
	$('[name="szip"]').on('blur', function(e) {
        var input = $.trim($('[name="szip"]').val());
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
	
	$('[name="fname"]').on('blur', function(e) {
        if(!is_blank($('[name="fname"]').val())) {
            this.style.border = "1px solid black";
            $('#message_line').text(""); 
            }
        });	
	
	$('[name="lname"]').on('blur', function(e) {
        if(!is_blank($('[name="lname"]').val())) {
            this.style.border = "1px solid black";
            $('#message_line').text(""); 
            }
        });

	$('[name="sfname"]').on('blur', function(e) {
        if(!is_blank($('[name="sfname"]').val())) {
            this.style.border = "1px solid black";
            $('#message_line').text(""); 
            }
        });			
    
	$('[name="slname"]').on('blur', function(e) {
        if(!is_blank($('[name="slname"]').val())) {
            this.style.border = "1px solid black";
            $('#message_line').text(""); 
            }
        });	
		
	$('[name="address1"]').on('blur', function(e) {
        if(!is_blank($('[name="address1"]').val())) {
            this.style.border = "1px solid black";
            $('#message_line').text(""); 
            }
        });	

	$('[name="saddress1"]').on('blur', function(e) {
        if(!is_blank($('[name="saddress1"]').val())) {
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
	
	$('[name="state"]').on('blur',function(){
		var tmp=$.trim($('[name="state"]').val());
		if(tmp == "")	return;
		var stateTester =/^[A-Z][A-Z]$/;
		if(!stateTester.test(tmp)){
			$('#message_line').text("Your state appears to be invalid");
			this.style.border = "2px solid red";	
		}
		else{
			this.style.border="1px solid black";
			$('#message_line').text("");
			}
		});
		
	$('[name="sstate"]').on('blur',function(){
		var tmp=$.trim($('[name="sstate"]').val());
		if(tmp == "")	return;
		var stateTester =/^[A-Z][A-Z]$/;
		if(!stateTester.test(tmp)){
			$('#message_line').text("Your state appears to be invalid");
			this.style.border = "2px solid red";	
		}
		else{
			this.style.border="1px solid black";
			$('#message_line').text("");
			}
		});	

	$('[name="card"]').on('blur',function(){
		var tmp=$.trim($('[name="card"]').val());
		if(tmp=="")	return;
		if(not_valid_card(tmp)){
			$('#message_line').text("card number format appears to be invalid");
			this.style.border = "2px solid red";	
		}
		else{
			this.style.border="1px solid black";
			$('#message_line').text("");
			}
		});	
		
	function not_valid_card(card){
		var datetester=/^\d{16}$/;
		if (!datetester.test(card)){
			return true;
		}
		return false;
	}
	
	$('[name="exp_date"]').on('blur',function(){
		var tmp=$.trim($('[name="exp_date"]').val());
		if(tmp=="")	return;
		if(not_valid_date_format(tmp)){
			$('#message_line').text("Expiry Date format appears to be invalid");
			this.style.border = "2px solid red";	
		}
		else if(not_valid_date(tmp)){
			$('#message_line').text("Expiry date appears to be invalid");
			this.style.border = "2px solid red";
		}
		else{
			this.style.border="1px solid black";
			$('#message_line').text("");
			}
		});	

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
            return;
            }      
        });
        
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
        
   
	$(':checkbox').on('blur',function(){ 
		if(this.checked)
		$('[name="fname"]').val([name="sfname"]);
		$('[name="lname"]').val([name="slname"]);
		$('[name="address1"]').val([name="saddress1"]);
		$('[name="address2"]').val([name="saddress2"]);
		$('[name="city"]').val([name="scity"]);
		$('[name="state"]').val([name="sstate"]);
		$('[name="zip"]').val([name="szip"]);
		});
         
		
    function validate_fields_on_submit() {   
        var bad=false;
		$('#boxes').removeClass("displayerror");
        if(is_blank($('[name="fname"]').val())) {
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
        else if(is_blank($('[name="sfname"]').val())) {
            bad=true; 
            $('[name="sfname"]').focus();
            $('[name="sfname"]').addClass("displayerror");     
            $('#message_line').text("Please enter the first name in shipping details");            
            } 
        else if(is_blank($('[name="slname"]').val())) {
            bad=true; 
            $('[name="slname"]').focus();
            $('[name="slname"]').addClass("displayerror");     
            $('#message_line').text("Please enter the last name in shipping details");            
            }              
		else if(is_blank($('[name="saddress1"]').val())) {
            bad=true; 
            $('[name="saddress1"]').focus();
            $('[name="saddress1"]').addClass("displayerror");     
            $('#message_line').text("Please enter the address in shipping details");            
            } 	
		else if(is_blank($('[name="scity"]').val())) {
            bad=true; 
            $('[name="scity"]').focus();
            $('[name="scity"]').addClass("displayerror");     
            $('#message_line').text("Please enter the city in shipping details");            
            } 
		else if(is_blank($('[name="sstate"]').val())) {
            bad=true; 
            $('[name="sstate"]').focus();
            $('[name="sstate"]').addClass("displayerror");     
            $('#message_line').text("Please enter the state in shipping details");            
            } 
		else if(is_blank($('[name="szip"]').val())) {
            bad=true; 
            $('[name="szip"]').focus();
            $('[name="szip"]').addClass("displayerror");     
            $('#message_line').text("Please enter the zip in shipping details");            
            } 		
        else if(not_valid_phone($('[name="sarea_phone"]').val(),3)) {
            bad=true; 
            $('[name="sarea_phone"]').addClass("displayerror");     
            $('#message_line').text("The area code appears to be invalid in shipping details");            
            $('[name="sarea_phone"]').focus();
            }   
        else if(not_valid_phone($('[name="sprefix_phone"]').val(),3)) {
            bad=true; 
            $('[name="sprefix_phone"]').addClass("displayerror");     
            $('#message_line').text("The prefix appears to be invalid in shipping details");            
            $('[name="sprefix_phone"]').focus();
            }
        else if(not_valid_phone($('[name="sphone"]').val(),4)) {
            bad=true; 
            $('[name="sphone"]').addClass("displayerror");     
            $('#message_line').text("The phone number appears to be invalid in shipping details");            
            $('[name="sphone"]').focus();
            } 	
		else if(is_blank($('input:radio[name=pay]:checked').val())){
			bad=true;
			$('[name="pay"]').focus();
			$('[name="pay"]').addClass("displayerror");
			$('#message_line').text("Please select the method of payment"); 
		}	
		else if(not_valid_date($('[name="card"]').val())) {
            bad=true; 
            $('[name="card"]').focus();
            $('[name="card"]').addClass("displayerror");     
            $('#message_line').text("Please enter a valid card number");            
            }	
		else if(is_blank($('[name="exp_date"]').val())) {
            bad=true; 
            $('[name="exp_date"]').focus();
            $('[name="exp_date"]').addClass("displayerror");     
            $('#message_line').text("Please enter the expiry date of the card");            
            } 
        if(bad)                                         
            return false;
        return true; // the form is valid  
        }   
                   
    }
);
