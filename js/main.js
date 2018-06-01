$(document).ready(function(){
    $(".owl-carousel-logos").owlCarousel({
        items: 6,
        loop: true,
        autoplay: true,
        dots: false
    });

    $(".customer-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 100,
        dotsContainer: '.dots-customer'
    });

    $(".works-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        dotsContainer: '.dots-works'
    });

    $(".owl-item").addClass("col");
})