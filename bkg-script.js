const images = [
    "../images/background-imgs/IMG_2391.jpg",
    "../images/background-imgs/IMG_2392.jpg",
    "../images/background-imgs/IMG_2394.jpg",
    "../images/background-imgs/5721E5DD-AEF1-4029-B4C1-640D5C1B928A 1.jpg",
];


const background = document.getElementById("background");

const numberOfTiles = 100;

for (let i = 0; i < numberOfTiles; i++) {

    const img = document.createElement("img");

    const randomImage =
        images[Math.floor(Math.random() * images.length)];

    img.src = randomImage;

    background.appendChild(img);
}
