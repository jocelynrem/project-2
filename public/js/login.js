const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#inputEmail').value.trim();
  const password = document.querySelector('#inputPassword').value.trim();

  let adminRedirect = '';

  if (email && password) {
    const response = await fetch('/api/admin/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
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
      alert('Failed to log in.');
    }
  }
};

// eslint-disable-next-line no-unused-vars
function showPassword () {
  const x = document.getElementById('inputPassword');
  if (x.type === 'password') {
    x.type = 'text';
  } else {
    x.type = 'password';
  }
}

document
  .querySelector('.loginForm')
  .addEventListener('click', loginFormHandler);
