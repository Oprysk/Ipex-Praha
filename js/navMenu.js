//here we init menu logic
function initMainMenu(){
    $( ".menu-item[data-item]" ).click(function() {
        var activeMenuTab = $(this).attr("data-item");
        $('.menu-item.active').removeClass('active');
        $(".navigation .menu-item[data-item="+activeMenuTab+"]").addClass("active");
        $(".sub-menu").hide();
        $(".sub-menu[data-active-submenu="+activeMenuTab+"]").show();

    });
}
//here we init submenu logic
function initSubmenu(){
    $( ".sub-menu .menu-item" ).click(function() {
        $(".sub-menu .menu-item.active").removeClass("active");
        $(this).addClass("active");
        $(this).find("ul.sub-menu--second").slideToggle();
    });
}