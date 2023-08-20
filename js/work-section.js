$(document).ready(function () {


// 獲取圖片軌道元素和其中的圖片元素
  const track = document.getElementById("image-track");
  const images = track.getElementsByClassName("image");

// 拖動效果變數
  let isDragging = false;
  let startX = 0; // 起始拖動時的 X 坐標
  let startScrollLeft = 0; // 起始拖動時的滾動條左偏移
  let startPercentage = 0; // 起始拖動時的百分比

  window.start = false;

  const startAnimation = () => {
      if (!window.start) {
          const sections = gsap.utils.toArray('.work-section');

          sections.forEach((section, index) => {
              const content = section.querySelector('.wrapper-text');
              if (content) {

                  const [x, xEnd] = index % 2 ? ['100%', (content.scrollWidth - section.offsetWidth) * -1] : [content.scrollWidth * -1, 0];

                  // 設定每個section的滾動效果
                  gsap.fromTo(content, {x}, {
                      x: xEnd,
                      scrollTrigger: {
                        objectPosition: "center center",
                          trigger: section, // 將觸發器改為整個section元素
                          scrub: 0.5
                      }
                  });
              }

          });

      }
  }

  // 定義當元素進入視野時要執行的回呼函式
  function onElementInView(entries, observer) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // 元素已進入視野
              console.log("元素在視野中！");
              startAnimation()
              // 在此處觸發您想要執行的動作
              // 例如，您可以添加CSS類別、觸發事件，或執行任何其他動作
          } else {
              // 元素未在視野中
              console.log("元素不在視野中！");
              // 當元素不再在視野中時，您可以執行其他任何動作
          }
      });
  }

  // 使用回呼函式建立新的Intersection Observer實例
  const observer = new IntersectionObserver(onElementInView);

  // 獲取您想要追蹤的目標元素
  const targetElement = document.getElementById("trigger-element");

  // 開始觀察目標元素
  observer.observe(targetElement);

});


let currentScrollTop = 0;

const handleOnScroll = () => {
  const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
  const scrollDelta = scrollTop - currentScrollTop;
  currentScrollTop = scrollTop;

  if (!isDragging) {
      const maxDelta = window.innerHeight / 2;
      const percentage = (scrollDelta / maxDelta) * -100;
      const nextPercentageUnconstrained =
          parseFloat(track.dataset.prevPercentage) + percentage;
      const nextPercentage = Math.max(
          Math.min(nextPercentageUnconstrained, 0),
          -100
      );

      track.dataset.prevPercentage = nextPercentage;
  }
};

window.addEventListener("scroll", handleOnScroll);


var state = {
  click: false
}


