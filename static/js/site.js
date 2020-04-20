$(document).scroll(function () {
  $('#share-button').toggle($(this).scrollTop() > 300);
});

$(window).scroll(function () {
  var offsetTop = $("#share-page").offset().top;
  var scrollTop = $(window).scrollTop();
  if (scrollTop > offsetTop - 500) {
    $("#share-button").fadeOut(0);
  }
});

$(document).ready(function () {
  $("#btn-nav").click(function () {
    if ($("#navbarSupportedContent").attr("class") == "collapse navbar-collapse") {
      $("#navbarSupportedContent").addClass("show")
      $("#btn-nav").addClass("collapsed").attr("aria-expanded", "false")
    } else {
      $("#navbarSupportedContent").removeClass("show")
      $("#btn-nav").removeClass("collapsed").attr('aria-expanded', 'true')
    }
  })
})