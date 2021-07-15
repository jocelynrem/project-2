const urlParams = new URLSearchParams(window.location.search);
const eventId = urlParams.get('eventId');
const link = document.getElementById('beseatedURL');
const linkDL = document.getElementById('linkToDL');
const qrTitle = document.getElementById('qrTitle');
const title = document.getElementById('title');
const guestFrame = document.getElementById('guestFrame');

if (eventId) {
  title.innerHTML = '<h3 class="fw-bold">There are two ways guests can find their seat: </h3>';
  link.innerHTML = `<h4>1. Use this link to access the guest page:</h4><h5 class="text-break"><a href="https://beseated.herokuapp.com/guestPage?eventId=${eventId}" target="_blank">https://beseated.herokuapp.com/guestPage?eventId=${eventId}</h5></a>`;
  qrTitle.innerHTML =
    '<h4> 2. Use the event code. Guests simply scan it with their phone camera.</h4>';
  document.getElementById(
    'qrURL'
  ).src = `https://api.qrserver.com/v1/create-qr-code/?data=https://beseated.herokuapp.com/guestPage?eventId=${eventId}&amp;size=250x250`;
  document.getElementById('qrURL').alt = 'QRCODE';
  linkDL.innerHTML = `<ul><h5> <li>To <section class="fw-bold d-inline text-uppercase">download</section> the code and add it to your event graphics simply right click on the QR Code and "Save Image As..."</li><li class="py-3">To <section class="fw-bold d-inline text-uppercase">print</section> the QRCode, please click <a href="https://api.qrserver.com/v1/create-qr-code/?data=https://beseated.herokuapp.com/guestPage?eventId=${eventId}&amp;size=250x250" target="_blank">here</a></li></h5></ul>`;
  guestFrame.innerHTML = `<iframe src="https://beseated.herokuapp.com/guestPage?eventId=${eventId}" width="300" height="450" title="Guest Page"></iframe>`;
}
