
const colorOne = Pickr.create({
  el: '.color-picker-one',
  theme: 'nano',
  components: {
    // Main components
    preview: true,
    hue: true,
    // Input / output Options
    interaction: {
      hex: true,
      input: true,
      save: true
    }
  }
});

colorOne.on('change', (color) => {
  const colorOneHEXA = color.toHEXA().toString();
  document.getElementById('guestView').style.background = colorOneHEXA;
});

const colorTwo = Pickr.create({
  el: '.color-picker-two',
  theme: 'nano',
  components: {
    // Main components
    preview: true,
    hue: true,
    // Input / output Options
    interaction: {
      hex: true,
      input: true,
      save: true
    }
  }
});

colorTwo.on('change', (color) => {
  const colorTwoHEXA = color.toHEXA().toString();
  document.getElementById('guestViewTwo').style.background = colorTwoHEXA;
});

const darkTextColor = document.getElementById('darkTextButton');

darkTextColor.on('click', function () {
  document.getElementById('guestText').style.color = 'black';
});

const lightTextColor = document.getElementById('lightTextButton');

lightTextColor.addEventListener('click', function () {
  document.getElementsById('guestText').style.color = 'white';
});
