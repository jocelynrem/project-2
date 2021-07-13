/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
const uploadFormHandler = async (event) => {
    event.preventDefault();
  
    let seatingChart = document.getElementById('myFile').files[0];
    // left formData = new FormData();
    // const firstName = document.querySelector('#firstName-signup').value.trim();
    // const lastName = document.querySelector('#lastName-signup').value.trim();
    // const email = document.querySelector('#email-signup').value.trim();
    // console.log('email:', email);
    // const password = document.querySelector('#password-signup').value.trim();
    // console.log('password:', password);
  
    if (seatingChart) {
      const response = await fetch('/api/file/uploadfile/login', {
        method: 'POST',
        body: seatingChart,
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        // document.location.replace('/dashboard/{{santiago}}');
        alert('Form submitted');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
document
    .querySelector('.submitButton')
    .addEventListener('click', uploadFormHandler);
    




  
//   if (email && password) {
//     const response = await fetch('/api/file/uploadfile/login', {
//       method: 'POST',
//       body: JSON.stringify({ email, password }),
//       headers: { 'Content-Type': 'application/json' }
//     });




const uploadFormHandler = async (event) => {
    event.preventDefault();
  
    let seatingChart = document.getElementById('myFile').files[0];
    let formData = new FormData();
    formData.append('uploadFile', seatingChart)
  
    if (seatingChart) {
      const response = await fetch('/api/file/uploadfile/4', {
        method: 'POST',
        body: seatingChart,
        //headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        // document.location.replace('/dashboard/{{santiago}}');
        alert('Form submitted');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  