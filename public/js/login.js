//function to login
async function loginFormHandler(event) {
    event.preventDefault();
  
    //get the input values
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    //if we have both the values then save that information to the db
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      //redirect to dashbaord page
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }

  //eventlistener
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);