function sanitizeInput(input) {
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  
  function validateForm() {
    let firstName = document.forms["registrationForm"]["firstName"].value.trim();
    let lastName = document.forms["registrationForm"]["lastName"].value.trim();
    let email = document.forms["registrationForm"]["email"].value.trim();
    let password = document.forms["registrationForm"]["password"].value;
    let confirmPassword = document.forms["registrationForm"]["confirmPassword"].value;
  
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert("All fields must be filled out.");
      return false;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }
  
    // Sanitize inputs
    firstName = sanitizeInput(firstName);
    lastName = sanitizeInput(lastName);
    email = sanitizeInput(email);
    password = sanitizeInput(password);
    confirmPassword = sanitizeInput(confirmPassword);
  
    document.forms["registrationForm"]["firstName"].value = firstName;
    document.forms["registrationForm"]["lastName"].value = lastName;
    document.forms["registrationForm"]["email"].value = email;
    document.forms["registrationForm"]["password"].value = password;
    document.forms["registrationForm"]["confirmPassword"].value = confirmPassword;
  
    // 🎉 Show success message
    alert("Hooray! Successfully submitted.");
  
    // ❗ Prevent actual form submission to a server
    return false;
  }
  