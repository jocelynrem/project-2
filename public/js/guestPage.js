const input = document.getElementById('searchInput');
const searchButton = document.getElementById('searchBtn');

searchButton.addEventListener ('click', (e) => {
  if(input.value.trim()) {
    document.location.replace(`/guestView?eventId=1&fullName=${input.value.trim()}`);
  }
});
