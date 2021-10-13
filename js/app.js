//Storing the images in an array for faster and easier access through this script
const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', ];

//To randomly select images from the images array above
const selectedDefaultImage = (Math.floor(Math.random() * images.length));

const defaultContent = `<img src= "./images/img${selectedDefaultImage}.jpg"/>`;

document.querySelector('.default-image').innerHTML = defaultContent;

const thumbnailsContainer = document.querySelector('.thumbnails');

let content = '';

images.map(image => {
    //We use the map array method to visit every array element,
    //And add a boilerplate code containing an image to the content variable
    content += `<div class="img-container">
        <img src="./images/${image}" alt="${image}" onclick="showModal(this)"/>
    </div> \n`
});

thumbnailsContainer.innerHTML = content;

function showModal(pic) {
    //On click this will set the DOM element to the selected image from the image source
    document.querySelector('.modal-image').setAttribute("src", pic.src);
    //to remove the invisible class
    document.querySelector('.modal').classList.remove("invisible");

}
// here the modal invisble class was restored 
function modalDisappear(i) {
    document.querySelector('.modal').classList.add("invisible");
}