carouselCurrent = 1;
carouselNext = 2;

$(document).ready(function() {
  $("#carousel > img#1").fadeIn(300)
  startCarousel();

  $(".left").on("click", function(event) {
    event.preventDefault();
    prev();
  })  

  $(".right").on("click", function(event) {
    event.preventDefault();
    next();
  })
});

function startCarousel() {
  count = $("#carousel > img").length;

  loop = setInterval(function() {

    if(carouselNext > count) {
      carouselNext = 1; //If the carousel reaches the end loop to the beginning.
      carouselCurrent = 1;
    }

    $("#carousel > img").fadeOut(300); //All images fade out
    $("#carousel > img#" + carouselNext).fadeIn(300); //Only carousel next fades in

    carouselCurrent = carouselNext;
    carouselNext = carouselNext + 1;
  }, 3000); //Do this every three seconds
}

function prev() {
  prevImage = carouselCurrent - 1;
  showImage(prevImage);
}

function next() {
  nextImage = carouselCurrent + 1;
  showImage(nextImage);
}

function stopLoop() {
  window.clearInterval(loop);
}

function showImage(id) {
  stopLoop();

  if(id > count) {
    id = 1;
  }else if(id < 1) {
    id = count;
  } // If id is greater than count loop back. If id is less than one set it to length of carousel.

  $("#carousel > img").fadeOut(300);
  $("#carousel > img#" + id).fadeIn(300);

  carouselCurrent = id;
  carouselNext = id + 1;

  startCarousel(); //Restarts Interval
}

$("#carousel > img").hover(
  function() {
    stopLoop();
  }, function() {
    startCarousel();
  }
);
