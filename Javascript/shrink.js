function init() {

  window.addEventListener('scroll', function(e){

    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 400,
    img = document.querySelector("#sigImg");
    //img = document.getElementById("sigImg");

    if (distanceY > shrinkOn) {
      classie.add(img,"smaller");
    } else {
      if (classie.has(img,"smaller")) {
        classie.remove(img,"smaller");
      }
    }
  });
}

window.onload = init();
