var nameInput = $("#name");
var emailInput = $("#email");
var phoneInput = $("#phone");
var infoInput = $("#info");

function submitContact(contact) {
  $.post("/contacts", contact, function() {
      console.log(contact)
  });
}

function handleFormSubmit(event) {
	event.preventDefault();
console.log("Submit contact");
	// Constructing a newContact object to hand to the database
	var newContact = {
	  name: nameInput
	    .val()
	    .trim(),
	  email: emailInput
	    .val()
	    .trim(),
	  phone: phoneInput
	  	.val()
	  	.trim(),
	  info: infoInput
	  	.val()
	  	.trim()
	};
	console.log(newContact);	
	submitContact(newContact);
	
}

$("#contactForm").on("submit", handleFormSubmit);