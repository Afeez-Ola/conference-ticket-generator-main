const form = document.getElementById('form');
const email = document.getElementById('email');
const fullName = document.getElementById('fullName');
const userName = document.getElementById('username');
const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');
const uploadButtons = document.getElementById('uploadButtons');
const uploadNote = document.getElementById('upload_note');

const changeButton = document.getElementById('changeButton');
const removeButton = document.getElementById('removeButton');

const uploadErrorElement = document.getElementById('uploadError');
const emailErrorElement = document.getElementById('emailError');
const usernameError = document.getElementById('usernameError');

imageInput.addEventListener('change', function (event) {
 const file = event.target.files[0];
 if (file) {
  const reader = new FileReader();
  reader.onload = function (e) {
   imagePreview.src = e.target.result;
   console.log(imagePreview);
   uploadButtons.style.display = 'block';
   uploadNote.style.display = 'none';
   const fileSize = (file.size / 1024).toFixed(2);
   console.log(fileSize);
   if (fileSize > 500) {
    uploadErrorElement.style.display = 'block';
    form.reset();
    imagePreview.src = '/assets/images/icon-upload.svg';
    uploadButtons.style.display = 'none';
    uploadNote.style.display = 'block';
   }
  };
  reader.readAsDataURL(file);
 }
});

changeButton.addEventListener('click', function () {
 imageInput.click();
});

removeButton.addEventListener('click', function () {
 form.reset();
 imagePreview.src = '/assets/images/icon-upload.svg';
 uploadButtons.style.display = 'none';
 uploadNote.style.display = 'block';
});

form.addEventListener('submit', function (event) {
 event.preventDefault();

 const emailValue = email.value.trim();
 const usernameValue = userName.value.trim();

 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
 const usernameRegex = /^@[^\s]+$/; 

 let errors = [];

 if (!emailRegex.test(emailValue)) {
  errors.push('Invalid email format.');
  emailErrorElement.style.display = 'block';

 }
 
 if (!usernameRegex.test(usernameValue)) {
  errors.push("Username must start with '@' and contain no spaces.");
  usernameError.style.display = 'block';

 }

 if (errors.length > 0) {
  emailErrorElement.style.display = 'block';
 } else {
  output.style.color = 'green';
  output.textContent = 'Validation successful!';
 }
});
