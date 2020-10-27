function scrollToSection(that){
    id = $(that).attr("id");
    $(that).closest("ul").find('.active').removeClass('active');
    $(that).closest("li").addClass("active");
    $('html,body').animate({
        scrollTop: $("." + id).offset().top},'fast');
}