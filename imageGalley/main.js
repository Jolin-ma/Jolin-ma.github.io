const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const baseURL = "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

const altText = [
  "Closeup of a human eye",
  "Rock that looks like a wave",
  "Purple and white pansies",
  "Section of wall from a pharaoh's tomb",
  "Large moth on a leaf",
];

const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

function updateDisplayedImage(src, alt) {
  displayedImage.src = src;
  displayedImage.alt = alt;
}

for (let i = 1; i <= images.length; i++) {
  const newImage = document.createElement("img");
  newImage.src = baseURL + images[i - 1];
  newImage.alt = altText[i - 1];
  newImage.tabIndex = 0;

  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", () => {
    updateDisplayedImage(newImage.src, newImage.alt);
  });
}

btn.addEventListener("click", () => {
  const btnClass = btn.getAttribute("class");

  if (btnClass === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
  }
});
