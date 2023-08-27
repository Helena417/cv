Fancybox.bind("[data-fancybox]", {
    // Your custom options
    compact: false,
    Thumbs : false
});

$(document).ready(function () {
    $('.gallery-slider').slick({
        slidesToShow: 3, // 一次顯示的圖片數量
        slidesToScroll: 1, // 每次滾動的圖片數量
        prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        autoplay: true, // 自動輪播
        autoplaySpeed: 2500, // 輪播速度（毫秒）
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    // 在小螢幕上，顯示 1 張幻燈片
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // 當 Slick 項目被點擊時
    $('.gallery-slider').on('click', 'div.slick-slide a', function () {
        // 獲取被點擊項目的 img-src
        let img_src = $(this).find('img').attr('src');
        // 根據 src 在 lightbox 容器中找到對應的項目
        let match_lightbox_item = $('.lightbox-container').find(`[data-fancybox] img[src="${img_src}"]`).parent()[0];
        // 觸發對應項目的點擊事件，以開啟 Lightbox
        if (match_lightbox_item) match_lightbox_item.click();
    });
});
