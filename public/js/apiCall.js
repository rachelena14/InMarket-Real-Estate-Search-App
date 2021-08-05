const seachFormHandler = async (event) => {
	event.preventDefault();

	const city = document.querySelector('#city-input').value.trim();
    const state = document.querySelector('#state-input').value.trim();

	if (city && state) {
		const res = await fetch('/', {
		  method: 'POST',
		  body: JSON.stringify({ 
			city, 
			state 
		  }),
		  headers: { 'Content-Type': 'application/json' },
		});
	
		if (res.ok) {
		  document.location.replace('/');
		} else {
		  alert('Failed to search');
		}
	  }
	};
}