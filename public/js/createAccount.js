const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  console.log('name:', name);
  const email = document.querySelector('#email-signup').value.trim();
  console.log('email:', email);
  const password = document.querySelector('#password-signup').value.trim();
  console.log('password:', password);

  if (email && password) {
    const response = await fetch('/api/admin/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard/{{id}}');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document
  .querySelector('.register')
  .addEventListener('click', signupFormHandler);

function showPassword() {
  var x = document.getElementById("password-signup");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}