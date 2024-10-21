// Allow for selection of image to trigger modal view
const images = document.querySelectorAll(".item");

images.forEach((image) => {
  image.title = "Click to enlarge";
  image.addEventListener("click", (e) => {
    const imgSrc = image.querySelector("img").src;
    // Create the modal div
    const modal = document.createElement("div");
    modal.classList.add("modal");
    // Create the img element
    const imgElement = document.createElement("img");
    imgElement.src = imgSrc;
    imgElement.alt = "enlarged abstract image";
    // Append the img to the div
    modal.appendChild(imgElement);
    // Add the modal to the body
    document.body.appendChild(modal);
    setTimeout(() => {
      imgElement.classList.add("reveal");
    }, 10);
    // Remove the modal when clicked
    modal.addEventListener("click", (e) => {
      imgElement.classList.remove("reveal");
      setTimeout(() => {
        modal.remove();
      }, 300);
    });
  });
});

// Function to check if page is scrolled and adjust the logo size
const checkScroll = () => {
  const navbar = document.getElementById("navbar");
  const logo = document.getElementById("logo");

  let scrollPos = window.scrollY;

  // Add/remove scrolled class based on scroll position

  if (scrollPos > 20) {
    navbar.classList.add("scrolled");
    logo.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    logo.classList.remove("scrolled");
  }

  // Calculate the new font-size based on scroll position
  let newSize = 3 - scrollPos * 0.03; // Descrease the font-size by 0.03 for every 1px scrolled

  // Clamping the font-size between 1.5 rem and 3rem;
  newSize = Math.max(1.5, newSize);

  logo.style.fontSize = newSize + "rem";
};

// Listen for scroll events
window.addEventListener("scroll", checkScroll);
