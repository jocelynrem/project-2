// const colorOne = document.getElementById('ColorOneInput').value;
// const colorTwo = $('#ColorTwoInput').val();

// changeColorOne = () => {
//   const colorOne = document.getElementById('ColorOneInput').value;
// };

// $('#ColorOneInput').on('change', function () {
//   const newColorOne = this.value;
//   $('.colorOne').css('background-color', newColorOne);
// });

const changeColorOne = () => {
  document.getElementById('ColorOneInput').addEventListener('change', (e) => {
    const color = e.target.value;
    console.log('color:', color);
    document.getElementsByClassName('colorOne').style.backgroundColor = color;
  });
};

changeColorOne();
