const event = window.location.search.split('=');
const eventid = event[1];
let eventName = '';
const renderEvent = document.getElementById('renderEventName');
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch(`../api/admin/eventinfo/${eventid}`, requestOptions)
  .then((response) => response.text())
  .then((result) => {
    const myArray = result.split(',');

    eventName = myArray[2].substring(13, myArray[2].length - 1);
    renderEvent.innerHTML = `${eventName}`;
  })
  .catch((error) => console.log('error', error));
