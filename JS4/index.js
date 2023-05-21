const form = document.getElementById('myform');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      try {
        const email = emailInput.value;
        const password = passwordInput.value;

        removeerror();
        const emailPattern = /.+@.+\..+/gm; // I know it's not the best regex :(

        if (!emailPattern.test(email)) 
        {
          errorMessage.textContent = 'Please enter a valid email address.';
          errorMessage.classList.add('error');
          return false;
        }

        // Make the Fetch API POST request
        const response = await fetch('https://reqres.in/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
          // Success
          errorMessage.textContent = 'Sign in successful!';
          errorMessage.classList.remove('error');
        } else {
          // Error
          throw new Error(data.error || 'Sign in failed');
        }
      } catch (error) {
        // Handle any errors
        errorMessage.textContent = error.message;
        errorMessage.classList.add('error');
      }
    });

    function removeerror(){
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = '';
        errorMessage.classList.remove('error');
    }