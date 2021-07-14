const urlParams = new URLSearchParams(window.location.search);
const eventId = urlParams.get('eventId');
console.log('myParam:', eventId);
const link = document.getElementById('beseatedURL');
const linkDL = document.getElementById('linkToDL');
const qrTitle = document.getElementById('qrTitle');

if (eventId) {
  link.innerHTML = `https://beseated.herokuapp.com/guestPage?eventId=${eventId}`;
  qrTitle.innerHTML =
    'Right click on the QR Code below and "Save Image As..." to download it';
  document.getElementById(
    'qrURL'
  ).src = `https://api.qrserver.com/v1/create-qr-code/?data=https://beseated.herokuapp.com/guestPage?eventId=${eventId}&amp;size=250x250`;
  document.getElementById('qrURL').alt = 'QRCODE';
  linkDL.innerHTML = `If you like to print the QRCode, please click <a href="https://api.qrserver.com/v1/create-qr-code/?data=https://beseated.herokuapp.com/guestPage?eventId=${eventId}&amp;size=250x250" target="_blank">here</a>`;
}
