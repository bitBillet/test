(function ($) {

    var mySwiper = new Swiper('.main-banner-swiper', {
        speed: 600,
        spaceBetween: 0,
        loop: true,
        autoplay: true,
        navigation: {
            nextEl: '.main-banner-next',
            prevEl: '.main-banner-prev',
        },
        pagination: {
            el: '.main-banner-pagination',
            clickable: true,
        },
    });

    var mySwiper = new Swiper('.about-swiper', {
        speed: 600,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.about-swiper-pagination',
            clickable: true,
        },
    });

    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.gallery-top-next',
            prevEl: '.gallery-top-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });

    $('.js-show-password').click(function () {
        if ($(this).attr('data-show') === 'hide') {
            $(this).attr('data-show', 'show');
            $(this).parent().find('.form-control').attr('type', 'text');
        } else {
            $(this).attr('data-show', 'hide');
            $(this).parent().find('.form-control').attr('type', 'password');
        }
    });


    /*modal*/
    $('.modal').on('show.bs.modal', function () {
        $('.modal').modal('hide');
    });

    $('.modal').on('shown.bs.modal', function () {
        $('body').addClass('modal-open');
    });


    /*valid form*/
    $('input.floatNumber').on('input', function () {
        this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    });

    $('input.onlyText').on('input', function () {
        this.value = this.value.replace(/[^A-Za-zА-Яа-яЁё ]/g, '');
    });

    $('.input-phone').mask("+7 (999) 999-99-99");


    /*header menu*/
    $('.header__top-menu--btn').click(function () {
        if ($(this).attr('data-open') === 'close') {
            $(this).attr('data-open', 'open');
            $('.header__top-menu').addClass('show');
            $('.header__menu-wrap').addClass('show');
            $('body').addClass('modal-open');
        } else {
            $(this).attr('data-open', 'close');
            $('.header__top-menu').removeClass('show');
            $('.header__menu-wrap').removeClass('show');
            $('body').removeClass('modal-open');
        }
    });


    $('.dropdown-toggle__icon').click(function () {
        if ($(this).parent().attr('data-open') === 'close') {
            $(this).parent().attr('data-open', 'open');
        } else {
            $(this).parent().attr('data-open', 'close');
        }
    });


    $(window).on("load", function () {
        if ($(".js-list-questions").length > 0) {
            $(".js-list-questions").mCustomScrollbar({
                theme: "dark",
                axis: "y",
                scrollbarPosition: "outside"
            });
        }
    });

    /*aside*/
    $('.aside-event-type__item').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    var $start = $('#start-date'),
        $end = $('#end-date');

    // $start.datepicker({
    //     clearButton: $('.filter__reset'),
    //     onSelect: function (fd, date) {
    //         $end.data('datepicker')
    //             .update('minDate', date);
    //
    //         $end.focus();
    //     }
    // });

    // $end.datepicker({
    //     onSelect: function (fd, date) {
    //         $start.data('datepicker')
    //             .update('maxDate', date)
    //     }
    // });

    // $('.filter__reset').click(function () {
    //     $('.datepicker-here').datepicker('setDate', null);
    // })

    /*lk*/

    // $('.date-birthday').datepicker({
    //     maxDate: new Date(),
    //     autoClose: true,
    // });

    $('.lk__block--change').click(function () {
        if ($(this).attr('data-change') === 'false') {
            $(this).attr('data-change', 'true');
            $(this).closest('div.lk__block').find('.lk__block--body').addClass('change');
        } else {
            $(this).attr('data-change', 'false');
            $(this).closest('div.lk__block').find('.lk__block--body').removeClass('change');
        }
    });
})(jQuery);
