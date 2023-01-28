//UI SELECTORS
var sTabNav = "#govt_tabs_nav_links";
var sTabNavs = ".govt_tabs_nav_link";
var sTabCont = "#govt_tabs_cont";
var sTabConts = ".govt_tab";

$(document).ready(function(){
  $(sTabNav + ' ' + sTabNavs + ' a').click(function(){
    display_tab($(this).attr('tab_id'));
  });
});

function display_tab(tabName){
  $(sTabNav + ' ' + sTabNavs + ' a.active').toggleClass('active');
  $(sTabNav + ' ' + sTabNavs + ' a[tab_id='+tabName+']').toggleClass('active');

  $(sTabCont + ' ' + sTabConts + '.active').toggleClass('active');
  $(sTabCont + ' ' + sTabConts + '[tab_id='+tabName+']').toggleClass('active');
}