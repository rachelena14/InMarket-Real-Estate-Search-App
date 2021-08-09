//function to delete from database (not implemented)
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

//front end delete for the saved properties
function deletePropertyHandler() {
    var myobj = document.querySelector(".deleteProperty");
    myobj.remove();
  }