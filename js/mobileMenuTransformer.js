;
var _MOBILE_MODE;

//here we have logic which describes which items should be replaced on window init
function runMenuMobileTransform(){
    $('.sub-menu[data-active-submenu]').each(function() {
        var menuItem = $(this).attr('data-active-submenu');
        handleResize(".sub-menu[data-active-submenu="+menuItem+"]", ".menu-item[data-item="+menuItem+"] .mobile-menu", ".sidebar-navigation.navigation" );
    });
}

//here we have logic which describes which items should be replaced on window resize
function runMenuMobileTransformOnResize(){
    $(window).resize(function() {
        $('.sub-menu[data-active-submenu]').each(function() {
            var menuItem = $(this).attr('data-active-submenu');
            handleResize(".sub-menu[data-active-submenu="+menuItem+"]", ".menu-item[data-item="+menuItem+"] .mobile-menu", ".sidebar-navigation.navigation" );
        });
    });
}
//here we have function which replace items according to resolution
function handleResize(component, mobileDiv, desktopDiv) {
    console.log('sadad');
    if (window.innerWidth <= 991) {
        _MOBILE_MODE = true
    } else {
        _MOBILE_MODE = false
    }
    if (_MOBILE_MODE) {
        if (!$(desktopDiv).html() == '') {
            $(component).appendTo(mobileDiv);
        }
    } else {
        if (!$(mobileDiv).html() == '') {
            $(component).appendTo(desktopDiv);
        }

    }
}

function reinitMenu() {
    if (window.innerWidth <= 767 && !$('.menu-sidebar').hasClass('disable-menu') ) {
        $('.header-burger-menu').trigger('click');
    } else if( window.innerWidth >= 768 && $('.menu-sidebar').hasClass('disable-menu') ){
        $('.header-burger-menu').trigger('click');
    }
}