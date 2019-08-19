// source code line number
Array.from(document.getElementsByClassName('linenr')).forEach(function(l) {
  l.innerHTML = l.innerHTML.slice(0, -2);
});

// active tab
var pathParts = window.location.pathname.split('/');
pathParts.push('');
pathParts.push('');
var activeTab = pathParts[1];

Array.from(document.querySelectorAll('.nav a')).forEach(function(e) {
  var tab = e.id.toLowerCase().split('_')[0]
  if (tab == activeTab) {
    e.classList.add('active');
  } else {
    e.classList.remove('active');
  }
});

