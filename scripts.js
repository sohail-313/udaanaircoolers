const price = [
  '₹1850', '₹2500', '₹2100', '₹2200', '₹1650', '₹1900', '₹1500', '₹2400', '₹2350', '₹2250',
  '₹2500', '₹2250', '₹2100', '₹2350', '₹2350', '₹2200', '₹1750', '₹1500', '₹1400', '₹3150',
  '₹1850', '₹2500', '₹2100', '₹2200', '₹1650', '₹1900', '₹1500', '₹2400', '₹2350', '₹2250',
  '₹1850', '₹2500', '₹2100'
]

//Diet,


// Function to add images to the gallery
function addImagesToGallery() {
  let gallery = document.getElementById('image-gallery');
  for (let i = 1; i <= 33; i++) { // Change 6 to the number of images in your folder
    let col = document.createElement('div');
    col.classList.add('col-md-4', 'col-lg-3');
    let img = document.createElement('img');
    img.src = `images/${i}.png`; // Replace 'image' with your image file name and extension
    img.classList.add('img-fluid');
    col.appendChild(img);

    let priceTag = document.createElement('div');
    priceTag.innerHTML = price[i];
    priceTag.classList.add('price-tag');
    col.appendChild(priceTag);

    gallery.appendChild(col);
  }
}

// Call the function to add images to the gallery
addImagesToGallery();






var formSubmitted = false;
window.addEventListener('scroll', function () {
  var form = document.getElementById('myModal');
  var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  var pageHeight = document.documentElement.scrollHeight;
  var body = document.getElementsByTagName('body')[0];
  if (scrollPosition > (pageHeight / 6) && !formSubmitted) {
    form.style.display = 'block';
    body.style.overflow = 'hidden';
    window.addEventListener('wheel', preventScrolling, { passive: false });

  }
});

function preventScrolling(event) {
  event.preventDefault();
  event.stopPropagation();
}

// Add form validation code here
var formElement = document.querySelector('form');
formElement.addEventListener('submit', function (event) {
  event.preventDefault();
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var passwordInput = document.getElementById('password');
  var nameValue = nameInput.value.trim();
  var emailValue = emailInput.value.trim();
  var passwordValue = passwordInput.value.trim();
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var nameError = document.getElementById('name-error');
  var emailError = document.getElementById('email-error');
  var passwordError = document.getElementById('password-error');
  var hasErrors = false;
  if (nameValue === '') {
    nameError.style.display = 'block';
    hasErrors = true;
  } else {
    nameError.style.display = 'none';
  }
  if (emailValue === '' || !emailRegex.test(emailValue)) {
    emailError.style.display = 'block';
    hasErrors = true;
  } else {
    emailError.style.display = 'none';
  }
  if (passwordValue === '') {
    passwordError.style.display = 'block';
    hasErrors = true;
  } else {
    passwordError.style.display = 'none';
  }
  if (!hasErrors) {
    formElement.submit();
  }
});




// Form
const scriptURL = 'https://script.google.com/macros/s/AKfycbx-VswapWyN7mMdGHbol_WknyN7RoEOXHec_RPQEe9JuswDnSGMc_5L4cUBbBEGf5f8qw/exec'
const form = document.forms['google-sheet']
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      alert("Thanks for Contacting us..! We Will Contact You Soon...");
      // Remove the class or styles that prevent scrolling
      formSubmitted = true;
      var form = document.getElementById('myModal');
      var body = document.getElementsByTagName('body')[0];
      form.style.display = 'none';
      body.style.overflow = 'auto';
      window.removeEventListener('wheel', preventScrolling, { passive: false });
    })
    .catch(error => console.error("Error!", error.message))
})