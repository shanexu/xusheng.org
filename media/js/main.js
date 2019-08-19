// source code line number
Array.from(document.getElementsByClassName('linenr')).forEach(function(l) {
  l.innerHTML = l.innerHTML.slice(0, -2);
});

// active tab
Array.from(document.querySelectorAll('.nav a')).forEach(function(e) {
  if (window.location.href.startsWith(e.href)) {
    e.classList.add('active');
    return;
  }
  e.classList.remove('active');
});

