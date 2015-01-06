function init() {

  window.addEventListener('scroll', function(e){

    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 15,
    img = document.querySelector("#sigImg");
    background = document.querySelector("#nav-background");
    //img = document.getElementById("sigImg");

    if (distanceY > shrinkOn) {
      classie.add(img,"smaller");
      classie.add(background, "smaller");
    } else {
      if (classie.has(img,"smaller")) {
        classie.remove(img,"smaller");
        classie.remove(background, "smaller");

        aLittleBit = document.querySelector()

      }
    }
  });
}

window.onload = init();
