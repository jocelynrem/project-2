const input = document.getElementById('searchInput');
const searchButton = document.getElementById('searchBtn');

searchButton.addEventListener('click', (e) => {
  const searchParams = (new URL(document.location)).searchParams;
  const eventId = searchParams.get('eventId');
  if (input.value.trim() && eventId) {
    document.location.replace(`/guestView?eventId=${eventId}&fullName=${input.value.trim()}`);
  }
});
