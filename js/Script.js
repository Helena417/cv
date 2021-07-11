$(document).ready(function () {

  //menu自動收合
  $('.menu__item a').on('click', function(){
    $('#menu-toggle input').click();
  });

  // wow plugin
  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true,       // default
    scrollContainer: null // 可以設定成只套用在某個container中捲動才呈現, 不設定就是整個視窗
  }
  )
  wow.init();


  // 滑鼠卷軸
  $(window).on('scroll',function () {
    // 向下指引箭頭隱藏
    var scrollDistance = $(window).scrollTop();
    if(scrollDistance > 350){
      $('.scroll-icon').css('visibility','hidden');
    }else{
      $('.scroll-icon').css('visibility','visible');
    }

    // navbar 
    var $navShow = $(".js-nav")
    if(scrollDistance>600){
      $navShow.addClass("navbar-md")
    }else{
      $navShow.removeClass("navbar-md")
    }
    // skill背景動畫
    var $aboutAnimationL  = $(".js-AnimationL");
    var $aboutAnimationR  = $(".js-AnimationR");
    var $aboutPhoto = $(".js-photo")
    var $aboutContent =$(".js-content")
    if(scrollDistance > 400){
      $aboutContent.addClass("about__group")
      $aboutPhoto.addClass("photo")
      $aboutAnimationL .addClass("bgL");
      $aboutAnimationR .addClass("bgR");
      $aboutAnimationR .removeClass("bgR2");
      $aboutAnimationL .removeClass("bgL2");
    }else{
      $aboutContent.removeClass("about__group")
      $aboutPhoto.removeClass("photo")
      $aboutAnimationR .addClass("bgR2");
      $aboutAnimationL .addClass("bgL2");
    }

  })
})


// padding icon hide
function icon_hidden(obj) {
  if (obj.style.display == 'block') {
    obj.style.display = 'none';
  } else {
    obj.style.display = 'block';
  }
}

var state ={
  click:false
}
let scroll_lock = function() {
  if(state.click){
      //點選彈出時允許圖片放大並禁止滑動
      $('#design-slide').css('display', 'block');
      $('#code-slide').css('display', 'block');
      document.documentElement.style.overflow = 'hidden'; //電腦端禁止滑動
  }else{
      document.documentElement.style.overflow = 'visible';
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


  dsn.addEventListener('click',function () {
    state.click=!state.click;
    icon_hidden(btnR);
    slider();
    scroll_lock();
  })
  cod.addEventListener('click',function () {
    state.click=!state.click;
    icon_hidden(btnL);
    slider();
    scroll_lock();
  })

};
