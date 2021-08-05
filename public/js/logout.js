//logout
const logoutFormHandler = async () => {
    const res = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    //if everything went ok the return to login page
    if (res.ok) {
      document.location.replace('/login');
    } else {
      alert("Logout failed");
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logoutFormHandler);