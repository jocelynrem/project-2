console.log('test')

// write front end js to get the input value on click

const inputVal = document.getElementById('searchInput')

// add search buytton on click 
searchButton.click(function () {
    const userSearch = $(".searchInput").val();
    runSearch(userSearch);
  });


//send their name , let the db lookup by name, and whatever else

function runSearch(userSearch) {
    const userSearchSplit = userSearch.split(" ");
    // console.log(userSearchSplit);
    const firstName = userSearchSplit[0].trim();
    const lastName = userSearchSplit[1].trim();
}
// api request to the server to get that users table


// get the response back and update the front end