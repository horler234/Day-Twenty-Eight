function dark() {
  let origin = document.getElementById('change');
  let body = document.getElementById('body');
  let beamer = document.getElementById('beamer')
  if (origin.className === 'head') {
    origin.className += ' dark';
  } else {
    origin.className = 'head';
  }

  if (body.className === 'sec') {
    body.className += ' dark';
  } else {
    body.className = 'sec';
  }
}

function search() {
  var find = document.getElementById('find');
  var filter = find.value.toLowerCase();
  var nodes = document.getElementsByClassName('country-link');
  var name = document.getElementsByClassName('name');
  var flex = document.getElementsByClassName('my-flex');

  for (var i = 0; i < nodes.length; i++) {
    if (name[i].innerText.toLowerCase().includes(filter)) {
      nodes[i].style.display = "block";
    } else {
      nodes[i].style.display = "none";
    }
  }
}
