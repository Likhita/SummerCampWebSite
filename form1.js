/*  form.js
    An example of javascript for validating a form.
    Alan Riggins
    CS545 Fall 2012
*/    

$(document).ready( function() {
    $('[name="pfname"]').focus(); // put focus on first field in form
        
    $('[name="zip"]').on('blur', function(e) {
        var input = $.trim($('[name="zip"]').val());
        var zipTester = /^\d{5}(-\d{4})?$/;
        if(!zipTester.test(input)) {
            $('#message_line').text("Your zip code appears to be invalid");
            this.style.border = "1px solid red";
            }
        else {
            this.style.border = "1px solid #DDD";
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
            this.style.border = "1px solid #DDD";
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
            this.style.border = "1px solid #DDD";
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
            this.style.border = "1px solid #DDD";
            $('#message_line').text("");
            }        
        });             
            
            
    $(':reset').on('click', function(e) {  
        $('input').text("");
        $('*').removeClass("error");
        $('#message_line').text("");
        $('[name="pfname"]').focus();        
        });      
        
    $(':submit').on('click', function(e) {
        $('input').removeClass("error");
        $('#message_line').text("");    
        var bad=false;
        if(is_blank($('[name="pfname"]').val())) {
            bad=true; 
            $('[name="pfname"]').focus();
            $('[name="pfname"]').addClass("error");     
            $('#message_line').text("Please enter the first name");            
            }
        else if(is_blank($('[name="plname"]').val())) {
            bad=true; 
            $('[name="plname"]').focus();
            $('[name="plname"]').addClass("error");     
            $('#message_line').text("Please enter the last name");            
            } 
        else if(not_valid_phone($('[name="area_phone"]').val(),3)) {
            bad=true; 
            $('[name="area_phone"]').addClass("error");     
            $('#message_line').text("The area code appears to be invalid");            
            $('[name="area_phone"]').focus();
            }   
        else if(not_valid_phone($('[name="prefix_phone"]').val(),3)) {
            bad=true; 
            $('[name="prefix_phone"]').addClass("error");     
            $('#message_line').text("The prefix appears to be invalid");            
            $('[name="prefix_phone"]').focus();
            }
        else if(not_valid_phone($('[name="phone"]').val(),4)) {
            bad=true; 
            $('[name="phone"]').addClass("error");     
            $('#message_line').text("The phone number appears to be invalid");            
            $('[name="phone"]').focus();
            }                                            
        else if(is_blank($('[name="cfname"]').val())) {
            bad=true; 
            $('[name="cfname"]').focus();
            $('[name="cfname"]').addClass("error");     
            $('#message_line').text("Please enter the child's first name");            
            } 
        else if(is_blank($('[name="clname"]').val())) {
            bad=true; 
            $('[name="clname"]').focus();
            $('[name="clname"]').addClass("error");     
            $('#message_line').text("Please enter the child's last name");            
            }              

        else if(is_camp_empty()) {
            bad=true; 
            $('#boxes').addClass("error");
            $('#message_line').text("Please select at least one camp");            
            }
        if(bad)                                         
            e.preventDefault();
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
        
    function is_camp_empty() {
        var empty=true;
        $(':checkbox').each(function() {
            if(this.checked)
                empty=false; 
            });
        return empty;
        }                   
    }
);

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
