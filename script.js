//Newsletter https://www.youtube.com/watch?v=BJrObOFv1_o

$(document).ready(function () {
  function showModal() {
    $("#modal-container").show();
  }

  function closeModal() {
    $("#modal-container").hide();
  }

  setTimeout(showModal, 3000);

  $("#close").click(function () {
    closeModal();
  });
});

//Newsletter slut

// Slideshow https://www.youtube.com/watch?v=0wvrlOyGlq0&t=107s
var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

//slideshow slut
