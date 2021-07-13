const input = document.getElementById('searchInput');
const searchButton = document.getElementById('searchBtn');

// Need to work with Rob on rendering the eventId
searchButton.addEventListener ('click', (e) => {
  console.log(input.value.trim());
  const searchParams = (new URL (document.location)).searchParams;
  const eventId = searchParams.get('eventId');
  if (input.value.trim() && eventId) {
    document.location.replace(`/guestView?eventId=1&fullName=${input.value.trim()}`) 
  }
});
