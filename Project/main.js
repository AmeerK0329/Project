const boxes = document.querySelectorAll('.box');


function isMobile() {
    return /iPhone|Android/i.test(navigator.userAgent);
  }

  // Toggle the menu links when the burger menu is clicked

  if (isMobile()) {
    var paragraphs = document.getElementsByTagName('p');
    for (var i = 0; i < paragraphs.length; i++) {
      let p = paragraphs[i];
      p.style.fontSize = '15px';
      boxes[i].style.height = '1000px';
    }
  }


const URLs = [
    "classical.html",
    "hellenistic.html",
    "archaic.html"
];
boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        const page = URLs[index];
        window.location.href = page;
    })
})
