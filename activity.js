$(document).ready(function () {
  $("td")
    .not("td:first-child")
    .click(function () {
      var selected = $(this).text();

      if (selected != "Not Available") $(this).toggleClass("highlight");
    });
});
