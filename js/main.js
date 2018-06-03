

$(document).ready(function(){

    function aosInit(event) {
        AOS.init();
    }
    
    $(".have-dropdown").on("click", function() {

        var $this = $(this);
        var $dropdown = $(this).children(".dropdown");
        var $win = $(window);

        $this.addClass("have-dropdown-open");
    });

    $(".have-submenu").on("click", function(){
        $(this).addClass("have-submenu-open");
    });

    $(".hamburger-btn").on("click", function(){
        $(".mobile-menu-content").toggleClass("show");
        $(this).toggleClass("hamburger-btn-open");
    });

    $(".owl-carousel-logos").owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        responsive : {
            0 : {
                items: 3
            },
            480 : {
                items: 3
            },
            768 : {
                items: 4
            },
            991 : {
                items: 6
            }
        }
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
        dotsContainer: '.dots-works',
        onInitialized: aosInit
    });

    $(".owl-item").addClass("col");
})

$(document).mouseup(function(e) 
{
    var container = $(".have-dropdown");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
            container.removeClass("have-dropdown-open");
        }

    var submenu = $(".submenu");
    if (!submenu.is(e.target) && submenu.has(e.target).length === 0) 
        {
            submenu.parent().removeClass("have-submenu-open");
        }
});
