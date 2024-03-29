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
    if(scrollDistance > 300){
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

var state ={
  click:false
}

// change menu bg
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar"); // 取得 navbar 元素
  const scrollPosition = window.scrollY; // 取得滾動的垂直位置

  // 如果滾動位置大於某個閾值（例如 100px），就改變 navbar 的背景顏色
  if (scrollPosition > 100) {
    navbar.classList.add("scroll-bg"); // 添加類別
  } else {
    navbar.classList.remove("scroll-bg"); // 移除類別
  }
});


