var element = document.getElementById("myElement");
var isResizing = false;
var startPosX, startWidth;

element.addEventListener("mousedown", function (e) {
  isResizing = true;
  startPosX = e.clientX;
  startWidth = parseInt(document.defaultView.getComputedStyle(element).width, 10);
});

document.addEventListener("mousemove", function (e) {
  if (!isResizing) return;
  
  var width = startWidth + (e.clientX - startPosX);
  element.style.width = width + "px";
});

document.addEventListener("mouseup", function () {
  isResizing = false;
});



