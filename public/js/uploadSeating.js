const cookie = document.cookie;
const href = window.location.href.split('=');
const eventID = href[href.length - 1];

const uploadFormHandler = async (event) => {
  event.preventDefault();
  const uploadfile = document.getElementById('myFile').files[0];
  const formData = new FormData();
  formData.append('uploadfile', uploadfile);

  const response = await fetch(`../api/file/uploadfile/${eventID}`, {
    method: 'POST',
    body: formData,
    headers: { 'Cookie': cookie }
  });

  if (response.ok) {
    alert('Seating chart uploaded');
    window.location.reload();
  } else {
    alert('Failed to load chart');
  }
};

document
  .querySelector('.submitButton')
  .addEventListener('click', uploadFormHandler);
