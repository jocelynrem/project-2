const fetchButton = document.getElementById('qrButton');
const imageQR = document.getElementById('qr-image');
function getApi (events) {
  const requestUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${events}&size=250x250`;

  fetch(requestUrl)
    .then(function (response) {

    })
    .then(function (data) {
      const qrImage = $(`<img src="https://api.qrserver.com/v1/create-qr-code/?data=${events}&size=250x250">`);
      imageQR.append(qrImage);
    }
    );
}

fetchButton.addEventListener('click', getApi);
