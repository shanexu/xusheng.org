Array.forEach(document.getElementsByClassName('linenr'), function(e){
  e.innerHTML = e.innerHTML.slice(0, -2) + ' ';
});

