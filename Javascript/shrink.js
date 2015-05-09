function init() {

  window.addEventListener('scroll', function(e){

    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOnSig = 15,
    shrinkOnSocial = 1,
    img = document.querySelector("#sigImg");
    background = document.querySelector("#nav-background");
    social = document.querySelector("#socialOnMobile");
    //img = document.getElementById("sigImg");

    if (distanceY > shrinkOnSig) {
      classie.add(img,"smaller");
      classie.add(background, "smaller");
    } else {
      if (classie.has(img,"smaller")) {
        classie.remove(img,"smaller");
        classie.remove(background, "smaller");
      }
    }

  });
}

window.onload = init();
