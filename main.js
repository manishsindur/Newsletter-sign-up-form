const subscribeButton = document.getElementById("subscribe_button");
subscribeButton.addEventListener("click", validateForm);

function validateForm() {
	const email = document.getElementById("email").value;
	const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

	if (email === "") {
		alert("Please enter your Email");
	} else if (!isValidEmail) {
		alert("Please enter a valid email address");
	} else {
		document.getElementById("myForm").submit();

		const successMessage = document.getElementById("success_message");
		const card = document.getElementById("card");

		successMessage.style.display = "flex";
		card.style.display = "none";
		document.getElementById("entered_email").innerText = email;
	}
}

const dismissButton = document.getElementById("dismiss_button");
dismissButton.addEventListener("click", resetFunction);

function resetFunction() {
	document.getElementById("myForm").reset();
	document.getElementById("success_message").style.display = "none";
	document.getElementById("card").style.display = "grid";
}
