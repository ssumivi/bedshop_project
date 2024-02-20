window.addEventListener("load", function () {
  const header = document.querySelector(".header");
  const rightDepth1 = this.document.querySelector(".right-depth1-img");
  const rightDepth2 = this.document.querySelector(".right-depth2-img");
  const rightDepth3 = this.document.querySelector(".right-depth3-img");
  let scy = 0;

  window.addEventListener("scroll", function () {
    // 스크롤바의 픽셀 위치값을 파악
    var scy = this.document.documentElement.scrollTop;
    // class 적용 여부를 결정하는 요소들을 배열로 관리
    var elements = [header, rightDepth1, rightDepth2, rightDepth3];
    // 스크롤 위치에 따라 클래스 적용 여부를 결정하는 for 루프
    for (var i = 0; i < elements.length; i++) {
      if (scy > 0) {
        elements[i].classList.add("active");
      } else {
        elements[i].classList.remove("active");
      }
    }
  });
  //aos 추가
  AOS.init();
  //visual slide
  var swiper = new Swiper(".mainVisual", {
    loop: true,
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
  //about repose
  //page가 처음 로드 되었을 때
  document.addEventListener("DOMContentLoaded", function () {
    // 페이지가 로드될 때 첫 번째 메뉴 항목에 대한 마우스 오버 이벤트를 수행
    menus[0].dispatchEvent(new MouseEvent("mouseover"));
  });

  const menus = document.querySelectorAll(".about-repose .about-list li");
  const aboutSlider = new Swiper(".about_slider", {
    effect: "fade",
    speed: 1000,
    loop: false,
    on: {
      slideChange: function () {
        const idx = this.realIndex;
        for (let menu of menus) {
          menu.classList.remove("act");
        }
        menus[idx].classList.add("act");
      },
    },
  });
  function getElementIndex(element) {
    return Array.from(element.parentElement.children).indexOf(element);
  }
  // 메뉴 항목에 대한 이벤트 핸들러 설정
  menus.forEach((menu, idx) => {
    menu.addEventListener("mouseover", () => {
      aboutSlider.slideTo(idx);
    });
  });
  //repose product
  var swiper = new Swiper(".repos-img", {
    loop: true,
    // slidesPerView: 4,
    spaceBetween: 7,
    scrollbar: {
      el: ".s-scroll",
    },
    navigation: {
      nextEl: ".next-btn",
      prevEl: ".prev-btn",
    },
    breakpoints: {
      400: {
        slidesPerView: 1,
        spaceBetween: 3,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 3,
      },
      970: {
        slidesPerView: 3, //브라우저가 970보다 클 때
        spaceBetween: 3,
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 3,
      },
    },
  });
  //  insta
  var swiper = new Swiper(".insta-img", {
    loop: true,
    autoplay: true,
    delay: 800,
    speed: 1100,
    slidesPerView: 6,
    spaceBetween: 20,
    freeMode: true,
    breakpoints: {
      735: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      320: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
    },
  });
  //안내창
  const body = document.querySelector("body");
  const modal = document.querySelector(".modal-wrap");
  const modalClose = this.document.querySelector(".modal-close");
  // isOpen 값에 따라 스크롤을 제어하는 함수
  function controlScroll(isOpen) {
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }

  // 초기 모달 상태 설정
  const isOpen = true;
  controlScroll(isOpen);

  modalClose.addEventListener("click", function () {
    modal.style.display = "none";

    // 모달이 닫힐 때는 스크롤을 다시 활성화
    controlScroll(false);
  });
});
