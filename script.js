var menuVisible = false;

function showHideMenu() {
  if (menuVisible) {
    document.getElementById("mobileMenu").style.display = "none";
    menuVisible = false;
  } else {
    document.getElementById("mobileMenu").style.display = "block";
    menuVisible = true;
  }
}

$(function() {
  $( ".datepicker" ).datepicker();
} );
