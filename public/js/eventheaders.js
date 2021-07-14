const event = window.location.search.split('=');
const eventId = event[1];
let eventName = '';
const renderEvent = document.getElementById('eventName');
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch(`../api/admin/eventinfo/${eventId}`, requestOptions)
  .then((response) => response.text())
  .then((result) => {
    console.log('result:', result);
    const myArray = result.split(',');
    console.log('myArray:', myArray);

    eventName = myArray[2].substring(13, myArray[2].length - 1);
    renderEvent.innerHTML = `${eventName}`;
  })
  .catch((error) => console.log('error', error));
