'use strict';

function handleClick() {
  $("form").submit(event, function() {
  event.preventDefault();
  const breed = $(".breed").val().trim();
  const url = `https://dog.ceo/api/breed/${breed}/images/random`

  fetch (url)
  .then(response => {
    if (response.ok) {
      return response.json();
    } 
    throw new Error(response.statusText);
  })
  .then(responseJson => displayImages(responseJson.message, breed))
  .catch(error => displayError(breed))
  // .catch(error => displayError(error.statusText))
  }) 
}

function displayImages(img, breed) {
  let displayArea = $('.display-results');

  displayArea.removeClass("hidden");
  displayArea.removeClass("hidden");
  displayArea.html(`<h2>Here is your ${breed}</h2>
                    <img src="${img}" class="dog-img" alt="${breed} dog">`);
}

function displayError(breed) {
  let displayArea = $('.display-results');

  displayArea.removeClass("hidden");
  displayArea.html(`<p class="red">There are no ${breed}'s in the datatbase</p>`);
}

$(handleClick);