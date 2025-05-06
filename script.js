$(document).ready(function() {
    $(window).scroll(function() {
        // Sticky navbar on scroll
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // Scroll-up button show/hide
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        // Disable smooth scroll after slide-up
        $('html').css("scrollBehavior", "auto");
    });

    // Smooth scroll on menu item click
    $('.navbar .menu li a').click(function() {
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle menu/navbar script for mobile
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing text animation
    new Typed(".typing", {
        strings: ["Software Engineer", "ML Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    new Typed(".typing-2", {
        strings: ["Data Analyst", "Backend Developer", "ML Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:    { items: 1, nav: false },
            600:  { items: 2, nav: false },
            1000: { items: 3, nav: false }
        }
    });
});
