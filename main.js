

const reviewText = document.getElementById("text");
const reviewImage = document.getElementById("person-img");
const nextButton = document.getElementById("next-button");
let currentIndex = 0;

  // Function to handle the next button click
function handleNextClick() {
    fetchText();
    fetchImage();
  }

function fetchText() {
    fetch("https://baconipsum.com/api/?type=all-meat&sentences=1")
    .then(response => response.json())
    .then( data => {
        const text = data[0];
        reviewText.textContent = text;
    })
    .catch(error => {
        console.error("Error fetching data" , error);
    })
}

function fetchImage() {
    const timestamp = new Date().getTime();
    const imageUrl = `https://xsgames.co/randomusers/avatar.php?g=male&_=${timestamp}`;
    setTimeout(() => {
        reviewImage.src = imageUrl;
    }, 110);
}

fetchText();
fetchImage();
  

