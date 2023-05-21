function validateForm(event) {
  event.preventDefault(); // Prevent form submission for now

  // Reset previous error messages
  clearErrors();

  // Retrieve form field values
  const qualification = document.getElementById('qualification').value;
  const phone = document.getElementById('phone').value;
  const age = document.getElementById('age').value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const name = document.getElementById('name').value;
  const city = document.getElementById('city').value;

  // Validation patterns
  const phonePattern = /^\d{10}$/; // 10 digits only
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern

  // Perform field validations
  let isValid = true;

  if (!name)
  {
    showError('name', 'Please enter name.');
    isValid = false;
  }
  if (!qualification) {
    showError('qualification', 'Please select your educational qualification.');
    isValid = false;
  }

  if (!phonePattern.test(phone)) {
    showError('phone', 'Please enter a valid Indian mobile number.');
    isValid = false;
  }

  if (isNaN(age) || age <= 0) {
    showError('age', 'Please enter a valid age.');
    isValid = false;
  }

  if (!gender) {
    showError('gender', 'Please select your gender.');
    isValid = false;
  }

  if (!emailPattern.test(email)) 
  {
    showError('email', 'Please enter a valid email address.');
    isValid = false;
  }

  if (password.length < 6) {
    showError('password', 'Password must be at least 6 characters long.');
    isValid = false;
  }

  if (password !== confirmPassword) {
    showError('confirmPassword', 'Passwords do not match.');
    isValid = false;
  }

  if (!name) {
    showError('name', 'Please enter your name.');
    isValid = false;
  }

  if (!city) {
    showError('city', 'Please enter your city.');
    isValid = false;
  }

  // If all fields are valid, submit the form
  if (isValid) {
    document.getElementById('signupForm').submit();
  }
}

function showError(fieldId, message) {
  const errorSpan = document.createElement('span');
  errorSpan.className = 'error';
  errorSpan.textContent = message;

  const field = document.getElementById(fieldId);
  field.parentNode.appendChild(errorSpan);
}

function clearErrors() {
  const errorElements = document.querySelectorAll('.error');
  errorElements.forEach(element => {
    element.parentNode.removeChild(element);
  });
}