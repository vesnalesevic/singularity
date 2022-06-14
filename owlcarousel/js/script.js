// Owlcarousel
$(document).ready(function () {
    $(".testimonials .owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        autoplayHoverPause: false,
        center: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                margin: 0,
                items: 1
            },
            600: {
                margin: 0,
                items: 1
            },
            1024: {
                margin: -140,
                items: 3
            },
            1400: {
                margin: -140,
                items: 3
            }
        }
    });
});

$(document).ready(function () {
    $(".projects .owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        autoplayHoverPause: false,
        center: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                margin: 0,
                items: 1
            },
            600: {
                margin: 0,
                items: 1
            },
            1024: {
                margin: 0,
                items: 1
            },
            1400: {
                margin: 0,
                items: 1
            }
        }
    });
});