// async function deletePropertyHandler() {

//     //send to the route
//     const res = await fetch(`/api/property/`, {
//         method: 'DELETE'
//       });

//       //if everything worked then go back to the dashboard page
//     if (res.ok) {
//         document.location.replace('/dashboard');
//       } else {
//         alert("Cannot delete this property");
//       }
//   }
  
//   //eventlistener
//   document.querySelector('.deleteButton').addEventListener('click', deletePropertyHandler);