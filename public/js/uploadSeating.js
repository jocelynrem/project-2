const cookie = document.cookie;
// console.log(window.location.href)
const href = window.location.href.split('=');
// console.log(href)
const eventid = href[href.length - 1];
// console.log('../api/file/uploadfile/'+eventid)

const uploadFormHandler = async (event) => {
  event.preventDefault();
  const uploadfile = document.getElementById('myFile').files[0];
  const formData = new FormData();
  formData.append('uploadfile', uploadfile);
  // const reader = new FileReader();

  console.log(uploadfile);
  console.log(formData);
  // console.log(reader.readAsText(myFile))
  const response = await fetch(`../api/file/uploadfile/${eventid}`, {
    method: 'POST',
    body: formData,
    headers: { 'Cookie': cookie }
    // headers: { "Content-Type": "multipart/form-data" }
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
