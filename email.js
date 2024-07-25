
function emailSend(){

    var userName = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;

	var messageBody = "Name " + userName +
	"<br/> Phone " + phone +
	"<br/> Email " + email;
        
    Email.send({
Host : "smtp.elasticemail.com",
Username : "waheed066khan@gmail.com",
Password : "F41A2BFFBC390E6F7DFD449A389D45341028",
To : 'codewithwaheedtest@gmail.com',
From : "waheed066khan@gmail.com",
Subject : "This is the subject",
Body : messageBody
}).then(
message => {
    if(message=='OK'){
        swal("Successful", "You clicked the button!", "success");
    }
    else{
        swal("Error", "You clicked the button!", "error");
    }
}
);
}