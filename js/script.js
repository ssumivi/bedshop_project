window.addEventListener("load", function () {
  const header = document.querySelector(".header");
  const mbt = this.document.querySelector(".mobile-btn");
  const rightDepth1 = this.document.querySelector(".right-depth1-img");
  const rightDepth2 = this.document.querySelector(".right-depth2-img");
  const rightDepth3 = this.document.querySelector(".right-depth3-img");
  const scMbBtn = this.document.querySelector(".mobile-btn");
  let scy = 0;

  window.addEventListener("scroll", function () {
    // 스크롤바의 픽셀 위치값을 파악
    var scy = this.document.documentElement.scrollTop;
    // class 적용 여부를 결정하는 요소들을 배열로 관리
    var elements = [header, rightDepth1, rightDepth2, rightDepth3, scMbBtn];
    // 스크롤 위치에 따라 클래스 적용 여부를 결정하는 for 루프
    for (var i = 0; i < elements.length; i++) {
      if (scy > 0) {
        elements[i].classList.add("active");
      } else {
        elements[i].classList.remove("active");
      }
    }
  });
  //mobile menu
  const navmb = this.document.querySelector(".mobile-menu");
  const mbBtn = this.document.querySelector(".mobile-btn");
  const htmlRoot = this.document.querySelector("html");
  const bgc = this.document.querySelector(".mobile-nav");

  mbt.addEventListener("click", function () {
    const state = this.classList.contains("ani");
    if (state) {
      //햄버거 버튼 눌렀을 때 X 모양으로 바뀜
      this.classList.remove("ani");
      //모바일 메뉴창 열리는 코드
      navmb.classList.remove("active");
      //메뉴창 열렸을 때 스크롤 안 생기게 해줌
      htmlRoot.classList.remove("active");
      bgc.classList.remove("active");
      mbBtn.classList.remove("active");
    } else {
      //햄버거 버튼 눌렀을 때 X 모양으로 바뀜
      this.classList.add("ani");
      //모바일 메뉴창 열리는 코드
      navmb.classList.add("active");
      //메뉴창 열렸을 때 스크롤 안 생기게 해줌
      htmlRoot.classList.add("active");
      bgc.classList.add("active");
      mbBtn.classList.add("active");
    }
  });

  var leftDepth1MbItems = document.querySelectorAll(".left-depth1-mb > li");

  leftDepth1MbItems.forEach(function (item) {
    item.addEventListener("click", function () {
      var leftDepth2Mb = this.querySelector(".left-depth2-mb");
      var allDepth2Mb = document.querySelectorAll(".left-depth2-mb");
      var mbAni = this.querySelector(".chevron"); // 클릭된 li에 속한 chevron 요소만 선택

      allDepth2Mb.forEach(function (depth2Item) {
        if (depth2Item !== leftDepth2Mb) {
          depth2Item.classList.remove("show");
        }
      });

      if (leftDepth2Mb) {
        leftDepth2Mb.classList.toggle("show");
        mbAni.classList.toggle("ani"); // 클릭된 li에 속한 chevron 요소에만 애니메이션 클래스 추가
        // 화살표 상태를 로컬 스토리지에 저장
        if (mbAni.classList.contains("ani")) {
          localStorage.setItem("arrowState", "flipped");
        } else {
          localStorage.removeItem("arrowState");
        }
      }
    });
  });
  //aos 추가
  AOS.init();
  //visual slide
  var swiper = new Swiper(".mainVisual", {
    loop: true,
    // autoplay: true,
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

  let ww = window.innerWidth;
  let aboutSlider = null; // null로 초기화

  responsiveSwiper();

  function initSwiper(effect) {
    if (aboutSlider !== null) {
        aboutSlider.destroy(); // 기존 슬라이더가 존재하면 파괴
    }
    
    let slidesPerViewValue = 1; // 슬라이드 당 보여질 개수 기본값
    let spaceBetweenValue = 20; // 슬라이드 사이의 간격 기본값
    
    if (ww < 1150) {

        slidesPerViewValue = 1.2; // 1150px 미만일 때 1.2개의 슬라이드를 보여줌
    } 
    if (ww < 980) {
        slidesPerViewValue = 1.1; // 980px 미만일 때 1.1개의 슬라이드를 보여줌
        spaceBetweenValue = 10; // 980px 미만일 때 슬라이드 사이의 간격을 10px로 설정
    }


    aboutSlider = new Swiper(".about_slider", {
      fadeEffect: { crossFade: true },
      speed: 1000,
      loop: false,
      slidesPerView: slidesPerViewValue, // slidesPerView 설정
      spaceBetween: spaceBetweenValue,
      on: {
        slideChange: function () {
          const idx = this.realIndex;
          for (let menu of menus) {
            menu.classList.remove("act");
          }
          menus[idx].classList.add("act");
        },
      },
      effect: effect,
    });

    return aboutSlider; // aboutSlider 반환
  }

  function responsiveSwiper() {
    if (ww < 1150) {
      initSwiper("slide");
    } else if (ww >= 1150) {
      initSwiper("fade");
    }
  }

  window.addEventListener("resize", function () {
    ww = window.innerWidth;
    responsiveSwiper();
  });

  document.addEventListener("DOMContentLoaded", function () {
    // 페이지가 로드될 때 첫 번째 메뉴 항목에 대한 마우스 오버 이벤트를 수행
    menus[0].dispatchEvent(new MouseEvent("mouseover"));
    var arrowState = localStorage.getItem("arrowState");
    if (arrowState === "flipped") {
      var arrow = document.querySelector(".left-depth1-mb > li > a::before");
      arrow.classList.add("flipped");
    }
  });

  const menus = document.querySelectorAll(".about-repose .about-list li");
  function getElementIndex(element) {
    return Array.from(element.parentElement.children).indexOf(element);
  }
  // 메뉴 항목에 대한 이벤트 핸들러 설정
  menus.forEach((menu, idx) => {
    menu.addEventListener("mouseover", () => {
      aboutSlider.slideTo(idx);
    });
  });

  if (window.innerWidth <= 1150) {
    var swiper = new Swiper(".mobile-collec", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
  //collection mobile
  var swiper = new Swiper(".collec-swiper", {
    slidesPerView: 1.05,
    spaceBetween: 10,
    // loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
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
    slidesPerView: 2,
    spaceBetween: 20,
    freeMode: true,
    breakpoints: {
      735: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      480: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      320: {
        slidesPerView: 3,
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
