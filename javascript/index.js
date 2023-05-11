
var title = document.getElementsByClassName("name");
var index;
for (index = 0; index < title.length; index++) {
title[index].addEventListener("click", function() {
    this.classList.toggle("active");
    var currentElement = this.nextElementSibling;
    if (currentElement.style.display === "block") {
    currentElement.style.display = "none";
    } else {
    currentElement.style.display = "block";
    }
});
}
