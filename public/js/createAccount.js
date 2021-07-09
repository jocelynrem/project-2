/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
const signupFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector('#firstName-signup').value.trim();
  const lastName = document.querySelector('#lastName-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  console.log('email:', email);
  const password = document.querySelector('#password-signup').value.trim();
  console.log('password:', password);

  if (firstName && lastName && email && password) {
    const response = await fetch('/api/admin/signup', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, email, password }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard/{{santiago}}');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document
  .querySelector('.register')
  .addEventListener('click', signupFormHandler);

function showPassword () {
  let x = document.getElementById('password-signup');
  if (x.type === 'password') {
    x.type = 'text';
  } else {
    x.type = 'password';
  }
}
