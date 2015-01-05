
function init() {

  jb = document.getElementById("jb-logo-nav");
  email = document.getElementById('contact-logo-nav');
  soundcloud = document.getElementById("soundcloud-logo-nav");
  github = document.getElementById("github-logo-nav");
  twitter = document.getElementById("twitter-logo-nav");
  facebook = document.getElementById("facebook-logo-nav");
  instagram = document.getElementById("instagram-logo-nav");
  sigImg = document.getElementById("sigImg");
  about = document.getElementById("navAboutId");
  tech = document.getElementById("navTechId");
  music = document.getElementById("navMusicId");
  contact = document.getElementById("navContactId");
  img = document.getElementById("sigImg");

  //Left side of navigation

  jb.addEventListener('mouseover', function(e){
    classie.add(email, "more-transparent");
    classie.add(soundcloud, "more-transparent");
    classie.add(github, "more-transparent");
    classie.add(twitter, "more-transparent");
    classie.add(facebook, "more-transparent");
    classie.add(instagram, "more-transparent");
  });
  jb.addEventListener('mouseout', function(e){
    classie.remove(email, "more-transparent");
    classie.remove(soundcloud, "more-transparent");
    classie.remove(github, "more-transparent");
    classie.remove(twitter, "more-transparent");
    classie.remove(facebook, "more-transparent");
    classie.remove(instagram, "more-transparent");
  });

  email.addEventListener('mouseover', function(e){
    classie.add(jb, "more-transparent");
    classie.add(soundcloud, "more-transparent");
    classie.add(github, "more-transparent");
    classie.add(twitter, "more-transparent");
    classie.add(facebook, "more-transparent");
    classie.add(instagram, "more-transparent");
  });
  email.addEventListener('mouseout', function(e){
    classie.remove(jb, "more-transparent");
    classie.remove(soundcloud, "more-transparent");
    classie.remove(github, "more-transparent");
    classie.remove(twitter, "more-transparent");
    classie.remove(facebook, "more-transparent");
    classie.remove(instagram, "more-transparent");
  });

  soundcloud.addEventListener('mouseover', function(e){
    classie.add(jb, "more-transparent");
    classie.add(email, "more-transparent");
    classie.add(github, "more-transparent");
    classie.add(twitter, "more-transparent");
    classie.add(facebook, "more-transparent");
    classie.add(instagram, "more-transparent");
  });
  soundcloud.addEventListener('mouseout', function(e){
    classie.remove(jb, "more-transparent");
    classie.remove(email, "more-transparent");
    classie.remove(github, "more-transparent");
    classie.remove(twitter, "more-transparent");
    classie.remove(facebook, "more-transparent");
    classie.remove(instagram, "more-transparent");
  });

  github.addEventListener('mouseover', function(e){
    classie.add(jb, "more-transparent");
    classie.add(email, "more-transparent");
    classie.add(soundcloud, "more-transparent");
    classie.add(twitter, "more-transparent");
    classie.add(facebook, "more-transparent");
    classie.add(instagram, "more-transparent");
  });
  github.addEventListener('mouseout', function(e){
    classie.remove(jb, "more-transparent");
    classie.remove(email, "more-transparent");
    classie.remove(soundcloud, "more-transparent");
    classie.remove(twitter, "more-transparent");
    classie.remove(facebook, "more-transparent");
    classie.remove(instagram, "more-transparent");
  });

  twitter.addEventListener('mouseover', function(e){
    classie.add(jb, "more-transparent");
    classie.add(email, "more-transparent");
    classie.add(soundcloud, "more-transparent");
    classie.add(github, "more-transparent");
    classie.add(facebook, "more-transparent");
    classie.add(instagram, "more-transparent");
  });
  twitter.addEventListener('mouseout', function(e){
    classie.remove(jb, "more-transparent");
    classie.remove(email, "more-transparent");
    classie.remove(soundcloud, "more-transparent");
    classie.remove(github, "more-transparent");
    classie.remove(facebook, "more-transparent");
    classie.remove(instagram, "more-transparent");
  });

  facebook.addEventListener('mouseover', function(e){
    classie.add(jb, "more-transparent");
    classie.add(email, "more-transparent");
    classie.add(soundcloud, "more-transparent");
    classie.add(github, "more-transparent");
    classie.add(twitter, "more-transparent");
    classie.add(instagram, "more-transparent");
  });
  facebook.addEventListener('mouseout', function(e){
    classie.remove(jb, "more-transparent");
    classie.remove(email, "more-transparent");
    classie.remove(soundcloud, "more-transparent");
    classie.remove(github, "more-transparent");
    classie.remove(twitter, "more-transparent");
    classie.remove(instagram, "more-transparent");
  });

  instagram.addEventListener('mouseover', function(e){
    classie.add(jb, "more-transparent");
    classie.add(email, "more-transparent");
    classie.add(soundcloud, "more-transparent");
    classie.add(github, "more-transparent");
    classie.add(twitter, "more-transparent");
    classie.add(facebook, "more-transparent");
  });
  instagram.addEventListener('mouseout', function(e){
    classie.remove(jb, "more-transparent");
    classie.remove(email, "more-transparent");
    classie.remove(soundcloud, "more-transparent");
    classie.remove(github, "more-transparent");
    classie.remove(twitter, "more-transparent");
    classie.remove(facebook, "more-transparent");
  });

  //Right side of navigation

  about.addEventListener('mouseover', function(e){
    classie.add(tech, "more-transparent");
    classie.add(music, "more-transparent");
    classie.add(contact, "more-transparent");
  })
  about.addEventListener('mouseout', function(e){
    classie.remove(tech, "more-transparent");
    classie.remove(music, "more-transparent");
    classie.remove(contact, "more-transparent");
  })

  tech.addEventListener('mouseover', function(e){
    classie.add(about, "more-transparent");
    classie.add(music, "more-transparent");
    classie.add(contact, "more-transparent");
  })
  tech.addEventListener('mouseout', function(e){
    classie.remove(about, "more-transparent");
    classie.remove(music, "more-transparent");
    classie.remove(contact, "more-transparent");
  })

  music.addEventListener('mouseover', function(e){
    classie.add(about, "more-transparent");
    classie.add(tech, "more-transparent");
    classie.add(contact, "more-transparent");
  })
  music.addEventListener('mouseout', function(e){
    classie.remove(about, "more-transparent");
    classie.remove(tech, "more-transparent");
    classie.remove(contact, "more-transparent");
  })

  contact.addEventListener('mouseover', function(e){
    classie.add(about, "more-transparent");
    classie.add(tech, "more-transparent");
    classie.add(music, "more-transparent");
  })
  contact.addEventListener('mouseout', function(e){
    classie.remove(about, "more-transparent");
    classie.remove(tech, "more-transparent");
    classie.remove(music, "more-transparent");
  })

  //Middle of navigation bar - only works when sigImg is small and in nav
  /*
  window.addEventListener('scroll', function(e){
    if (classie.has(img,"smaller")) {

      img.addEventListener('mouseover', function(e){
        classie.add(jb, "more-transparent");
        classie.add(email, "more-transparent");
        classie.add(soundcloud, "more-transparent");
        classie.add(github, "more-transparent");
        classie.add(twitter, "more-transparent");
        classie.add(facebook, "more-transparent");
        classie.add(instagram, "more-transparent");
        classie.add(about, "more-transparent");
        classie.add(tech, "more-transparent");
        classie.add(music, "more-transparent");
        classie.add(contact, "more-transparent");
      });

      img.addEventListener('mouseout', function(e){
        classie.remove(jb, "more-transparent");
        classie.remove(email, "more-transparent");
        classie.remove(soundcloud, "more-transparent");
        classie.remove(github, "more-transparent");
        classie.remove(twitter, "more-transparent");
        classie.remove(facebook, "more-transparent");
        classie.remove(instagram, "more-transparent");
        classie.remove(about, "more-transparent");
        classie.remove(tech, "more-transparent");
        classie.remove(music, "more-transparent");
        classie.remove(contact, "more-transparent");
      });
    } else {
      img.removeEventListener('mouseover', function(e){
        classie.add(jb, "more-transparent");
        classie.add(email, "more-transparent");
        classie.add(soundcloud, "more-transparent");
        classie.add(github, "more-transparent");
        classie.add(twitter, "more-transparent");
        classie.add(facebook, "more-transparent");
        classie.add(instagram, "more-transparent");
        classie.add(about, "more-transparent");
        classie.add(tech, "more-transparent");
        classie.add(music, "more-transparent");
        classie.add(contact, "more-transparent");
      });
    }
  });
  */
}

window.onload = init();
