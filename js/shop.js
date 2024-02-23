window.addEventListener("load", function(){
    //shop
  let detailSwiper = new Swiper(".sw-shopping", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
  //메뉴 네비게이션
  // gotop btn
const goTop = document.querySelector(".top-btn");
goTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
const topPopup = document.querySelector(".top-popup");
  const shoppingInfoSection = document.querySelector(".shopping-info");

  // shopping-info 섹션에 도달했을 때 이벤트 리스너 추가
  const waypointShopping = new Waypoint({
    element: shoppingInfoSection,
    handler: function(direction) {
      if (direction === "down") {
        topPopup.style.display = "block";
      } else {
        topPopup.style.display = "none";
      }
    },
    offset: "80%" // shopping-info 섹션이 화면의 80%에 도달했을 때 실행
  
  });
  console.log(waypointShopping);

//장바구니
const addBuyBtns = document.querySelectorAll(".add-buy");

addBuyBtns.forEach(function(addBuyBtn) {
  addBuyBtn.addEventListener("click", function(event) {
    event.preventDefault();
    
    const result = confirm("장바구니에 상품이 담겼습니다.\n\n장바구니로 이동하시겠습니까?");
    
    if (result) {
      // 장바구니로 이동하는 로직을 여기에 추가할 수 있습니다.
      window.location.href = "#";
    } 
  });
});
})