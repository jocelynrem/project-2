const signupFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector('#firstName-signup').value.trim();
  const lastName = document.querySelector('#lastName-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  let adminRedirect = '';

  if (firstName && lastName && email && password) {
    const response = await fetch('/api/admin/signup', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, email, password }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch(`/api/admin/admininfo?email=${email}`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          const myArray = result.split(',');
          adminRedirect = myArray[0].substring(11);
        })
        .then((result) => {
          document.location.replace(`/dashboard/${adminRedirect}`);
        })
        .catch((error) => console.log('error', error));
    } else {
      alert('Failed to sign up.');
    }
  }
};

document
  .querySelector('.register')
  .addEventListener('click', signupFormHandler);

// eslint-disable-next-line no-unused-vars
function showPassword () {
  // eslint-disable-next-line prefer-const
  let x = document.getElementById('password-signup');
  if (x.type === 'password') {
    x.type = 'text';
  } else {
    x.type = 'password';
  }
}
