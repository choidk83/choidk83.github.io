const images = [
    "back1.jpg",
    "back2.jpg",
    "back3.jpg",
    "back4.jpg",
    "back5.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenInage}`;
// console.log(bgImage);
// document.body.appendChild(bgImage);

document.body.style.backgroundImage = `url('img/${chosenImage}')`;