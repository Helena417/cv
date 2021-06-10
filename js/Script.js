// padding icon hide
function icon_hidden(obj) {
  if (obj.style.display == 'block') {
    obj.style.display = 'none';
  } else {
    obj.style.display = 'block';
  }
}

function slider() {
  let ds = document.getElementById('design-slide');
  let cs = document.getElementById('code-slide');
  ds.style.opacity = '1';
  cs.style.opacity = '1';
}

window.onload = function () {
  let dsn = document.getElementById('design');
  let cod = document.getElementById('code');
  let btnL = document.getElementById('left-btn');
  let btnR = document.getElementById('right-btn');

  dsn.onclick = function () {
    icon_hidden(btnR);
    slider();
    // return false;
  };
  cod.onclick = function () {
    icon_hidden(btnL);
    slider();
    // return false;
  };
};
