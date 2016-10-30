Array.prototype.forEach.call(document.getElementsByTagName('pre'), function(c){
  if(c.classList.contains("src")) {
    var l1 = null;
    Array.prototype.forEach.call(c.getElementsByClassName('linenr'), function(l){
      if(l1 == null) {
        l.style.paddingTop = '0.5em';
      }
      l.innerHTML = l.innerHTML.slice(0, -2);
      l1 = l;
    });
    if(l1 != null) {
      l1.style.paddingBottom = '0.5em';
    }
  }
})

