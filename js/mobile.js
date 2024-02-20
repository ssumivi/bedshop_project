window.addEventListener("load", function () {
    if(this.window.innerWidth < 1150){
        const aboutMbSlider = new Swiper(".mobile-collec", {
            loop: true,
            slidesPerView: 2,
            spaceBetween: 5,
          });
    }
    
});
