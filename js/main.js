const images = [
  "images/image-01.png", "images/image-02.png", "images/image-03.png"
];

let i = 0;
function placeImage(x, y) {

  const nextImage = images[i];
  const img = document.createElement("img");
  img.setAttribute("src", nextImage);
  img.style.left = x + "px";
  img.style.top = y + "px";
  img.style.width = 40 + "%";

  document.body.appendChild(img);

  i = i + 1;

  if(i >= images.length) {
    i = 0;
  };
};
document.addEventListener("click", function (event) {
  event.preventDefault();
  placeImage(event.pageX, event.pageY);
});

document.addEventListener("touched", function (event) {
  event.preventDefault();
  placeImage(event.pageX, event.pageY);
});
