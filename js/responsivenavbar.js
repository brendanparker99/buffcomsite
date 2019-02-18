function myFunction() {
  var x = document.getElementById("mynavbar");
  if (x.className === "navbar2") {
    x.className += " responsive";
  } else {
    x.className = "navbar2";
  }
}