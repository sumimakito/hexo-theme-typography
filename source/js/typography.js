var stage;
var siteNavShown = true;

function triggerSiteNav() {
    return;
    if (siteNavShown) {
        $('#site-nav').hide(300);
        siteNavShown = false;
    } else {
        $('#site-nav').show(300);
        siteNavShown = true;
    }
}
function updateSidebar() {
    if (window.innerWidth <= 768 || window.innerHeight <= 600) {
        $('#side-bar').innerWidth($('#stage').width());
        $('#main-container').removeClass('col-sm-9');
        //$('#site-nav').hide();
        //siteNavShown = false;
    } else {
        //$('#site-nav').show();
        //siteNavShown = true;
        var sidebarW =
            stage.width() - $('#main-container').outerWidth() + (window.innerWidth - stage.innerWidth()) / 2;
        $('#side-bar').outerWidth(sidebarW);
        console.log("sidebarW=" + sidebarW);
        $('#main-container').addClass('col-sm-9');
    }
}
$(document).ready(function () {
    stage = $('#stage');
    $(window).resize(function () {
        updateSidebar();
    });
    updateSidebar();
    $('#main-container').removeClass('invisible');
    $('#main-container').addClass('fadeInTop');
    if (window.innerWidth <= 768) {
        $('#side-bar').removeClass('invisible');
        $('#side-bar').addClass('fadeInTop');
    }else{
        $('#side-bar').removeClass('invisible');
        $('#side-bar').addClass('fadeInRight');
    }
    $('.site-title').click(function () {
        $('.site-title a')[0].click();
    })
});