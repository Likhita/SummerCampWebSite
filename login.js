function init() {
	var handle = document.getElementById('username').focus();
	document.getElementById('button_handle').addEventListener('click', function(e) {
		var userHandle = document.getElementById('username');
		var passHandle = document.getElementById('password');    
		var errHandle = document.getElementById('error_message');
		userHandle.style.border = "2px solid #999"; 
		passHandle.style.border = "2px solid #999";           
		if(userHandle.value == "") {
			userHandle.style.border = "2px solid red";
			userHandle.value = "";
			userHandle.focus();
			e.preventDefault();
			errHandle.innerHTML = "You did not enter your username";
			return;
			}
		if(passHandle.value == "") {
			passHandle.style.border = "2px solid red";
			passHandle.value = "";
			passHandle.focus();
			e.preventDefault();
			errHandle.innerHTML = "You did not enter your password";        
			return;
			}      
	}, false);
}
