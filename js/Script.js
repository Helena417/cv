// padding icon hide
function Icon_hidden(obj) {
  if (obj.style.display == 'block') {
    obj.style.display = 'none';
  } else {
    obj.style.display = 'block';
  }
}
function padding_slide(obj) {}

window.onload = function () {
  let dsn = document.getElementById('design');
  let cod = document.getElementById('code');
  let btnL = document.getElementById('left-btn');
  let btnR = document.getElementById('right-btn');
  let ds = document.getElementById('design-slide');
  let cs = document.getElementById('code-slide');

  dsn.onclick = function () {
    Icon_hidden(btnR);
    padding_slide(ds);
    // return false;
  };
  cod.onclick = function () {
    Icon_hidden(btnL);
    padding_slide(cs);
    // return false;
  };
};
