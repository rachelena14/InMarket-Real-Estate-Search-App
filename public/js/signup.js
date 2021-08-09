//signup function
async function signupFormHandler(event) {
    event.preventDefault();
  
    //get the values from the input
    const username = document.querySelector('#username-signup').value.trim()
    const password = document.querySelector('#password-signup').value.trim();
    
  //if we get both values then post that information and save to db
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // check the response status and redirect to dashboard page
      if (response.ok) {
        console.log('success');
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
}
  
//eventlistener
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);