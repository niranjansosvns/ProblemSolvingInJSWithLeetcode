var email = document.getElementById("pmail");
if(email){
	email.addEventListener("input", function(ev){
	if(email.validity.typeMismatch){
		email.setCustomValidity("i expect an e-mail, dude");

	}
	else{
		email.setCustomValidity("");
	}
})
}