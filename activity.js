$(document).ready(function () {
  $("td")
    .not("td:first-child")
    .click(function () {
      var selected = $(this).text();
      var content = $(this).text(); //get content of cell
      var colNum = $(this).index();
      var colTitle = $("th:eq(" + colNum + ")").text();

      if (selected != "Not Available") $(this).toggleClass("highlight"); //add or remove class when cell is selected

      if ($(this).hasClass("highlight")) {
        //check if selected cell has class
        $("#displaySelected").css("visibility", "visible"); //make display box visible
        $("#displaySelected").css("margin-top", "2em"); //add spaces above display box
        $("#result").append("<p>" + content + " at " + colTitle + "</p>"); //add child element with contents of cell
      } else {
        //if selected cell dont have class
        $("#result p:contains(' + selected + ')").remove(); //remove child element

        if ($("#result").has("p").length == false) {
          //check if there are any child elements within parent
          $("#displaySelected").css("visibility", "hidden"); //make display box hidden
          $("#displaySelected").css("margin-top", "0"); //remove spaces above display box
        }
      }
    });
});
