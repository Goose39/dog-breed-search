'use strict';

function handleClick() {
  $("form").submit(event, function() {
  event.preventDefault();
  let breed = $(".breed").val();
  fetch (`https://dog.ceo/api/breed/${breed}/images/random/`)
  .then(response => response.json())
  .then(responseJson => {
          console.log(`${responseJson.message}`)
          displayImages(responseJson.message);
          })
  .catch(error => displayError(error.message))
})
}

function displayImages(arr) {
  let displayArea = $('.display-results');

  displayArea.removeClass("hidden");
  displayArea.html(`<h2>Your Dogs</h2>
                    <img src="${img}" class="dog-img">`);
}

function displayError(errorMsg) {
  let displayArea = $('.display-results');
  
  displayArea.removeClass("hidden");
  displayArea.html(`<h2>An error occured</h2>
                    <p>${errorMsg}</p>`);
}

function printToConsole(msg) {
  console.log(`${msg}`);
}

$(handleClick);