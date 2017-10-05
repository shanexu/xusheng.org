Array.prototype.forEach.call(document.getElementsByTagName('code'), function(c) {
  if(c.classList.contains("src")) {
    Array.prototype.forEach.call(c.getElementsByClassName('linenr'), function(l) {
      l.innerHTML = l.innerHTML.slice(0, -2);
      l1 = l;
    });
  }
})

