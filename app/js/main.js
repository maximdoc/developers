$(function () {

    $('.slider__inner').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 7000,
        arrows: true,
        variableWidth: true,
        prevArrow:'.slick__prev',
        nextArrow:'.slick__next',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 1,
                }
            },

            {
                breakpoint: 440,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.menu__btn').on('click', function () {
        $('.menu__btn').toggleClass('menu__btn--active');
        $('.menu__list').toggleClass('menu__list--active');
    });

    $('.header__menu-link').on('click', function () {
        $('.menu__btn').removeClass('menu__btn--active');
        $('.menu__list').removeClass('menu__list--active');
    });

    var mixer = mixitup('.shop__inner-mobile', {
        load: {
            filter: '.left'
        },
        animation: {
            duration: 600
        }
    });

});