;
$( document ).ready(function() {
    initMenus(); //here we init menu and submenu logic
    initModalQuestion(); //here we init Modal_with_question logic
    runMenuMobileTransform(); //here we run logic which replace menus according to device/resolution on init (for mobile amd tab version)
    runMenuMobileTransformOnResize(); //here we run logic which replace menus according to device/resolution, on resize (for mobile amd tab version)
    initValidationItems(); //here we init function with list of items for validate
    burgerMenu();//here we init logic for burger menu
    wpc_add_img_bg('.js-bg-img > img', '.js-bg-img');//here we add images for background container
    initSlider();// here we init slider



    $(window).on('load', function () {
        $("#loading").delay(500).fadeOut("slow");//preloader
        reinitMenu();//reinit menu for desktop
    });

    $(window).on('resize', function () {
        reinitMenu();//reinit menu for mobile
    });

});

function initSlider() {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30
    });
}

function wpc_add_img_bg(img_sel, parent_sel, img_height) {
    if (!img_sel) {
        console.info('no img selector');
        return false;
    }
    var $parent, _this;
    $(img_sel).each(function() {
        _this = $(this);
        $parent = _this.closest(parent_sel);
        $parent = $parent.length ? $parent : _this.parent();
        if (img_height) {
            $parent.css('background-image', 'url(' + this.src + ')');
            _this.css('visibility', 'hidden');
        } else {
            $parent.css('background-image', 'url(' + this.src + ')');
            _this.hide();
        }
    });
}
function burgerMenu() {

    $('.header-burger-menu').click(function () {

        if($('.menu-sidebar').hasClass('disable-menu')){
            $('.menu-sidebar').toggle();
            $('.menu-sidebar, .main-wrapper').removeClass('disable-menu');
            $('.header-navigation').fadeIn();
        }else {
            $('.menu-sidebar').addClass('disable-menu');
            $('.header-navigation').fadeOut();
            setTimeout(function () {
                $('.menu-sidebar').toggle();
                $('.main-wrapper').addClass('disable-menu');
            },300);
        }

    });
}

function initValidationItems(){
    $("#commentForm").validate();
    $("#joinNewsletter").validate();
}

function initMenus(){
    initMainMenu();
    initSubmenu();
}












