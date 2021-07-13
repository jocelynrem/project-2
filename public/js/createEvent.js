const eventFormHandler = async (event) => {
  event.preventDefault();

  let href = window.location.href.split('/')
  //console.log(href)
  let adminid = href[href.length - 1]
  const eventName = document.querySelector('#eventName').value.trim();

  if (eventName) {
    console.log(eventName, adminid);
    const response = await fetch(`/api/events/${adminid}`, {
      method: 'POST',
      body: JSON.stringify({adminid,eventName}),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      confirm('Event created');
    } else {
      alert('Failed to sign up.');
    }

  }
};

document
  .querySelector('.register')
  .addEventListener('click', eventFormHandler);



