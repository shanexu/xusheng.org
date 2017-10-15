Array.from(document.getElementsByClassName('linenr')).forEach(function(l) {
  l.innerHTML = l.innerHTML.slice(0, -2);
});
