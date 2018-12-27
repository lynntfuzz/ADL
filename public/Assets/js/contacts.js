var nameInput = $("#name");
var emailInput = $("#email");
var phoneInput = $("#phone");
var infoInput = $("#info");

  // Username "on-the-fly" validation
  nameInput.bind('input propertychange', function() {
		console.log("input property change for name");
    if (nameInput.val().trim().length < 3) {
      $("#name-form").removeClass("has-success");

      $("#name-form").addClass("has-error");
      $("#name-feedback").text("Please enter full name.");
    } else {
      $("#name-form").removeClass("has-error");

      $("#name-form").addClass("has-success");
      $("#name-feedback").text("Username valid!");
    }
	});
	
	  // Email "on-the-fly" validation
		emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		emailInput.bind('input propertychange', function() {
			console.log("input property change for email");
			if (!emailRegEx.test($(this).val()))
			{
				$("#email-form").removeClass("has-success");
	
				$("#email-form").addClass("has-error");
				$("#email-feedback").text("Invalid Email");
				$("#email-additional-feedback").text("Ex: someone@example.com");
			
			} else {
				$("#email-form").removeClass("has-error");
	
				$("#email-form").addClass("has-success");
				$("#email-feedback").text("Valid Email!");
				$("#email-additional-feedback").text("");
			}
		});

function submitContact(contact) {
  $.post("/contacts", contact, function() {
      console.log(contact)
  }).then(function(data) {
		alert("thank you for registering!");
		nameInput.val("");
		emailInput.val("");
		phoneInput.val("");
		infoInput.val("");
	}).catch(function(err) {
		console.log(err);
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
	submitContact(newContact);
	
}

$("#contactForm").on("submit", handleFormSubmit);