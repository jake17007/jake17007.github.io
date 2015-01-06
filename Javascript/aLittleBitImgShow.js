//Make the a-little-bit image appear only after the user scrolls far enough to
// make the signature image in the header shrink to its smaller size

window.addEventListener('scroll', function(e){
    if (classie.has(img,"smaller")) {

      aLittleBitImg = document.querySelector("#a-little-bit");

      classie.add(aLittleBitImg, "visibleNow");

    }
  });
