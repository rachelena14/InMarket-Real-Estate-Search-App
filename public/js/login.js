//Login
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    //get input values
    const username = document.querySelector('#usernameLogin').value.trim();
    const password = document.querySelector('#passwordLogin').value.trim();
  
    //if you get both then send them to the route
    if (username && password) {
      const res = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ 
          username, 
          password 
        }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      //if everything was ok then go back to the dashboard page
      if (res.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  //eventlistener
  document.querySelector('.loginForm').addEventListener('submit', loginFormHandler);