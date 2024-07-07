# Newsletter-sign-up-form# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Screenshot](/design/desktop-design.jpg)

### Links

- Solution URL: [Click here](https://github.com/manishsindur/Newsletter-sign-up-form)
- Live Site URL: [Click here](https://manishsindur.github.io/Newsletter-sign-up-form/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Learned about if statement.

```js
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
```

## Author

- Frontend Mentor - [@manishsindur](https://www.frontendmentor.io/profile/manishsindur)
- Twitter - [@manishsindur](https://twitter.com/manishsindur)
