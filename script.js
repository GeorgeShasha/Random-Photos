const imageContainerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");

const addMoreImages = () => {
  for (let i = 0; i < imageNumber; i++) {
    const newImageEl = document.createElement("img");
    newImageEl.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imageContainerEl.append(newImageEl);
  }
};

btnEl.addEventListener("click", () => {
  imageNumber = 10;
  addMoreImages();
});
