function fav(bev, flav, favColor) {
  return "your favorite beverage is " + bev + ", your favorite food is " + flav +
  " and your favorite color is " + favColor;
}




$(document).ready(function() {
  $("button#submit").click(function(event) {
    event.preventDefault();
    const beverage = $("#beverage").val();
    const flavor = $("input:radio[name=flavor]:checked").val();
    const favoriteColor = $("#color").val();
    console.log(beverage);
    const result = fav(beverage, flavor, favoriteColor);
    $("#output").text(result);
  });
});