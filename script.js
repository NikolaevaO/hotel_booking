var menuVisible = false;

function showHideMenu() {
  if (menuVisible) {
    document.getElementById("mobileMenu").style.opacity = 0;
    menuVisible = false;
  } else {
    document.getElementById("mobileMenu").style.opacity = 1;
    menuVisible = true;
  }
}

$(function() {
  $( ".datepicker" ).datepicker();
} );
