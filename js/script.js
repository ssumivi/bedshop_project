window.addEventListener("load", function () {
  const header = document.querySelector(".header");
  const rightDepth1 = this.document.querySelector(".right-depth1");
  let scy = 0;

  window.addEventListener("scroll", function () {
    // 새로 고침 / url 입력해서 html 출력시
    // 1.스크롤바의 픽셀 위치값을 파악해서
    scy = this.document.documentElement.scrollTop;
    // 2.class 적용 여부 결정
    if (scy > 0) {
      header.classList.add("active");
      rightDepth1.classList.add("active");
    } else {
      header.classList.remove("active");
      rightDepth1.classList.remove("active");
    }
  });
  //    스와이퍼
  var swiper = new Swiper(".repos-img", {
    slidesPerView:3,
    // spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    scrollbar: {
        el: ".repos-img .swiper-scrollbar",
      },
    navigation: {
      nextEl: ".repos-img .swiper-button-next",
      prevEl: ".repos-img .swiper-button-prev",
    },
    
  });
});
