async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="propiety-title"]').value;
    const propiety_content = document.querySelector('input[name="propiety-content"]').value;
  
    const response = await fetch(`/api/propieties`, {
      method: 'propiety',
      body: JSON.stringify({
        title,
        propiety_content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-propiety-form').addEventListener('submit', newFormHandler);