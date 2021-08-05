//Signup
async function signupFormHandler(event) {
    event.preventDefault();

    //get input values
    const username = document.querySelector('#usernameSignup').value.trim();
    const password = document.querySelector('#passwordSignup').value.trim();

    //if you get both values then send it to the route
    if (username && password) {
        const res = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });

        //if everything goes ok then send them to the dashboard
        if (res.ok) {
            alert('Account created!');
            document.location.replace('/dashboard');
        } else {
            alert("Cannot signup");
        }
    }
}

//eventlistener
document.querySelector('.signupForm').addEventListener('submit', signupFormHandler);