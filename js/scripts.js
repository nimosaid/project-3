//  what we do section
$(document).ready(function() {
  $("#click1").click(function() {
    $("#hide1").slideToggle();
    $("#click1").slideToggle("slow");
  });
  $("#hide1").click(function() {
    $("#click1").slideToggle();
    $("#hide1").slideToggle("slow");
  });

  $("#click2").click(function() {
    $("#hide2").slideToggle();
    $("#click2").slideToggle("slow");
  });
  $("#hide2").click(function() {
    $("#click2").slideToggle();
    $("#hide2").slideToggle("slow");
  });

  $("#click3").click(function() {
    $("#hide3").slideToggle();
    $("#click3").slideToggle("slow");
  });
  $("#hide3").click(function() {
    $("#click3").slideToggle();
    $("#hide3").slideToggle("slow");
  });
});
