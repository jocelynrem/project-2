const urlParams = new URLSearchParams(window.location.search);
const urleventId = urlParams.get('eventId');

$('#update_Guest').on('click', function (event) {
  event.preventDefault();
  $('#user-info').modal('show');
});

$('#add_Guest').on('click', function (event) {
  event.preventDefault();
  $('#add-user-info').modal('show');
});

$('#delete_Guest').on('click', function (event) {
  event.preventDefault();
  $('#delete-user-info').modal('show');
});

$('#closeModal').on('click', function (event) {
  event.preventDefault();
  $('#user-info').modal('hide');
});
$('#closeModalAdd').on('click', function (event) {
  event.preventDefault();
  $('#add-user-info').modal('hide');
});
$('#closeModalDelete').on('click', function (event) {
  event.preventDefault();
  $('#delete-user-info').modal('hide');
});

document.querySelector('#updateGuestBtn').addEventListener('click', (e) => {
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
  fetch(`/api/tables/${urleventId}/update`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      $('#user-info').modal('hide');
      console.log(result);
      location.reload();
    })
    .catch((error) => console.log('error', error));
});

document.querySelector('#add_GuestBtn').addEventListener('click', (e) => {
  const firstName = document.querySelector('#guestaddFName').value.trim();
  console.log('firstName:', firstName);
  const lastName = document.querySelector('#guestaddLName').value.trim();
  console.log('lastName:', lastName);
  const table = document.querySelector('#guestaddTable').value.trim();
  console.log('table:', table);
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    firstName: firstName,
    lastName: lastName,
    tableNumber: table
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(`/api/tables/${urleventId}/new`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      $('#add-user-info').modal('hide');
      console.log(result);
      location.reload();
    })
    .catch((error) => console.log('error', error));
});

document.querySelector('#delete_GuestBtn').addEventListener('click', (e) => {
  const firstName = document.querySelector('#guestdeleteFName').value.trim();
  console.log('firstName:', firstName);
  const lastName = document.querySelector('#guestdeleteLName').value.trim();
  console.log('lastName:', lastName);
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    firstName: firstName,
    lastName: lastName
  });

  const requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(`/api/tables/${urleventId}/delete`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      $('#delete-user-info').modal('hide');
      console.log(result);
      location.reload();
    })
    .catch((error) => console.log('error', error));
});
