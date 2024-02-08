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
//aos 추가
AOS.init();
   })
   
   //visual slide
   var swiper = new Swiper(".mainVisual", {
    loop : true,
    autoplay: true,
    delay: 5000, 
    speed: 1500,
    pagination: {
      el: ".mainPaginationNum",
      type: "fraction",
    },
    scrollbar: {
      el: ".mainScrollBar",
    },
    navigation: {
      nextEl: ".mainNbtn",
      prevEl: ".mainPbtn",
    },
  });
  var swiper = new Swiper(".repos-img", {
    loop : true,
    slidesPerView: 4,
    spaceBetween:7,
    scrollbar: {
      el: ".s-scroll",
    },
    navigation: {
      nextEl: ".next-btn",
      prevEl: ".prev-btn",
    },
  });
  //  insta
  var swiper = new Swiper(".insta-img", {
    slidesPerView: 4,
    spaceBetween: 4,
    freeMode: true,
  
  });
})

