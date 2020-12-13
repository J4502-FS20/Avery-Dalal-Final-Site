"use strict";

var photoDivs = document.getElementsByClassName("imageHolder");

var nextButton = document. getElementById("button_next");

var previousButton = document.getElementById("button_previous")

var currentPhotoNumber = 0;

photoDivs[0].classList.remove('hideThisDiv');

nextButton.addEventListener('click', function() {
    photoDivs[currentPhotoNumber].classList.add('hideThisDiv');
    currentPhotoNumber = currentPhotoNumber + 1;

    console.log(currentPhotoNumber);

    if (currentPhotoNumber === photoDivs.length) {
      currentPhotoNumber = 0;
    }

    photoDivs[currentPhotoNumber].classList.remove('hideThisDiv');

 });

 previousButton.addEventListener('click', function() {
     photoDivs[currentPhotoNumber].classList.add('hideThisDiv');
     currentPhotoNumber = currentPhotoNumber - 1;

     console.log(currentPhotoNumber);

     if (currentPhotoNumber < 0) {
       currentPhotoNumber = photosDivs.length - 1;
     }

     photoDivs[currentPhotoNumber].classList.remove('hideThisDiv');

  });
