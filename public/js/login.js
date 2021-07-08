const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#inputEmail').value.trim();
  console.log('email:', email);
  const password = document.querySelector('#inputPassword').value.trim();
  console.log('password:', password);

  if (email && password) {
    const response = await fetch('/api/admin/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard/{{id}}');
    } else {
      alert('Failed to log in.');
    }
  }
};

document
  .querySelector('.loginForm')
  .addEventListener('click', loginFormHandler);
