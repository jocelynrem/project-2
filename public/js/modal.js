$('#addGuest').on('click', function (event) {
  event.preventDefault();
  $('#user-info').modal('show');
});

$('#closeModal').on('click', function (event) {
  event.preventDefault();
  $('#user-info').modal('hide');
});

document.querySelector('#updateGuest').addEventListener('click', (e) => {
  const firstName = document.querySelector('#guestFName').value.trim();
  console.log('firstName:', firstName);
  const lastName = document.querySelector('#guestLName').value.trim();
  console.log('lastName:', lastName);
  const table = document.querySelector('#guestNewTable').value.trim();
  console.log('table:', table);

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    firstName: firstName,
    lastName: lastName,
    tableNumber: table
  });

  const requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  console.log('testing');
  fetch('/api/tables/1/update', requestOptions)
    .then((response) => response.text())
    .then((result) => {
      $('#user-info').modal('hide');
      console.log(result);
      location.reload();
    })
    .catch((error) => console.log('error', error));
});
