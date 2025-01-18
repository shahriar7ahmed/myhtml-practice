jQuery(document).ready(function () {
    // Character Image Js
    var scene = document.querySelectorAll(".scene");
    scene.forEach(function (el) {
        var parallax = new Parallax(el);
    });

    // Slider Js
    jQuery('.banner-section-inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        speed: 500,
        asNavFor: '.controller-right-icons-inner',
        touchThreshold: 100,
    });

    jQuery('.controller-right-icons-inner').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.banner-section-inner',
        arrows: false,
        dots: false,
        focusOnSelect: true,
        variableWidth: true,
    });

    function onLoadTest() {
        jQuery(".banner-section-loop").each(function (i) {
            var j = i + 1;
            if (j % 3 === 1) {
                jQuery(this).addClass("banner-loop-one");
            } else if (j % 3 === 2) {
                jQuery(this).addClass("banner-loop-second");
            } else {
                jQuery(this).addClass("banner-loop-third");
            }
        });
    }

    window.onload = onLoadTest;

    function customclassadd() {
        var classMappings = {
            'banner-loop-one': 'header-section-blue',
            'banner-loop-second': 'header-section-orange',
            'banner-loop-third': 'header-section-green'
        };

        var currentSlideClass = '';
        for (var className in classMappings) {
            if (jQuery("." + className).hasClass('slick-current')) {
                currentSlideClass = classMappings[className];
                break;
            }
        }

        jQuery(".header-section-main").removeClass().addClass("header-section-main " + currentSlideClass);
    }

    jQuery('.banner-section-inner').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        customclassadd();
        jQuery(".banner-main-img .main-img").addClass("character-animation");
    });

    // Custom Mouse Pointer 
    let cursor = document.querySelector('.cursor');
    let cursorScaleContainer = document.querySelector('.header-menu');
    let mouseX = 0;
    let mouseY = 0;

    gsap.to({}, 0.016, {
        repeat: -1,
        onRepeat: function () {
            gsap.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY,
                }
            })
        }
    });

    cursorScaleContainer.addEventListener('mousemove', (e) => {
        if (e.target.classList.contains('cursor-scale')) {
            cursor.classList.add('grow');
            if (e.target.classList.contains('small')) {
                cursor.classList.remove('grow');
                cursor.classList.add('grow-small');
            }
        }
    });

    cursorScaleContainer.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
    });
});
