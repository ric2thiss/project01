// variables
const input_text = document.getElementById('modal-vinude-input-text');
const input_text_container = document.getElementById('modal-vinude-frame133');
const input_text_description = document.getElementById('modal-vinude-frame13')
const input_description = document.getElementById('description-input');
// const resizer = document.getElementById('resizer');

input_text.addEventListener("focusin", function(){
    input_text_container.style.setProperty('border-color', 'rgb(15, 129, 199)');
});
input_text.addEventListener("focusout", function(){
    input_text_container.style.setProperty('border-color', 'rgba(154, 170, 184, 1)');
});

// Description
input_description.style.resize = "none";
input_description.style.overflow = "hidden";
// Wont work because it as conflict with css
// input_description.addEventListener('keyup', e=> {
//   input_description.style.height = `auto`
//   let scHeight = e.target.scrollHeight;
//   input_description.style.height = `${scHeight}px`
// } )


input_description.addEventListener("focusin", function(){
    input_text_description.style.setProperty('border-color', 'rgb(15, 129, 199)');

});
input_description.addEventListener("focusout", function(){
    input_text_description.style.setProperty('border-color', 'rgba(154, 170, 184, 1)');
});


// For length and Width
const element = document.getElementById("myElement");
const elementLength = document.getElementById("myElementLength");
let isResizing = false;
let isResizingLength = false;
let startPosX, startWidth;
let startPosY, startHeight;
const inputWidth = document.getElementById("input-width");
const inputLength = document.getElementById("input-length");
element.addEventListener("mouseover", function () {
  element.style.cursor = "ns-resize"; 
  element.addEventListener("mousedown", function (e) {
    isResizing = true;
    startPosX = e.clientX;
    startWidth = parseInt(document.defaultView.getComputedStyle(element).width, 10);
    element.style.cursor = "ns-resize"; 
  });
})

elementLength.addEventListener('mouseover',function(){
  elementLength.style.cursor = "ns-resize"; 
  elementLength.addEventListener("mousedown", function (e) {
    isResizingLength = true;
    startPosY = e.clientY;
    startHeight = parseInt(document.defaultView.getComputedStyle(elementLength).height, 10);
    elementLength.style.cursor = "ns-resize"; 
  });
})

document.addEventListener("mousemove", function (e) {
  if (isResizing) {
    let width = startWidth + (e.clientX - startPosX);
    if (width >= 0) {
      inputWidth.value = width;
    }
  }

  if (isResizingLength) {
    var height = startHeight + (e.clientY - startPosY);
    if (height >= 0) {
      inputLength.value = height;
    }
  }
});

document.addEventListener("mouseup", function () {
  isResizing = false;
  isResizingLength = false;
  element.style.cursor = "auto"; 
  elementLength.style.cursor = "auto";
});

const image = document.getElementById("myElement");
const imageLength = document.getElementById("myElementLength");

image.addEventListener("click", function () {
  let currentValue = parseInt(inputWidth.value, 10);
  inputWidth.value = currentValue + 1;
});

imageLength.addEventListener("click", function () {
  const currentValue = parseInt(inputLength.value, 10);
  inputLength.value = currentValue + 1;
});

image.addEventListener("wheel", function (e) {
  e.preventDefault();
  const delta = e.deltaY; 
  const currentValue = parseInt(inputWidth.value, 10);
  
  if (delta > 0) {
    // Scroll down, decrease width and Scroll up, increase width
    if (currentValue > 0) {
      inputWidth.value = currentValue - 1;
    }
  } else {
    inputWidth.value = currentValue + 1;
  }
});

imageLength.addEventListener("wheel", function (e) {
  e.preventDefault();
  const delta = e.deltaY; 
  const currentValue = parseInt(inputLength.value, 10);
     // Scroll down, decrease length and Scroll up, increase length
  if (delta > 0) {
    if (currentValue > 0) {
      inputLength.value = currentValue - 1;
    }
  } else {
    inputLength.value = currentValue + 1;
  }
});

// cm image to not be dragable 
  
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
image1.style.pointerEvents = "none";
image2.style.pointerEvents = "none";

//  The Data that Saved 

function saveData() {
    let width = inputWidth.value;
    let length = inputLength.value;
    let nameofPaint = input_text.value;
    let description = input_description.value;
    

    alert(`Name of Painting: ${nameofPaint}\n Description: ${description}\n Length: ${length}cm\n Width : ${width}cm`)
  }

  function deleteData() {
    const confirmDelete = confirm("Are you sure you want to delete?");

    if (confirmDelete) {
      alert("Deleted");
    }
  }







