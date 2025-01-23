const form  = document.getElementById("form")
const email = document.getElementById("email");
const fullName = document.getElementById("fullName");
const userName = document.getElementById("username");
const imageInput = document.getElementById("imageInput");
const imagePreview = document.getElementById("imagePreview")
const uploadButtons = document.getElementById("uploadButtons");
const uploadNote = document.getElementById("upload_note");

const uploadErrorElement = document.getElementById("uploadError");
const emailErrorElement = document.getElementById("emailError");

imageInput.addEventListener('change', function(event) {
      const file = event.target.files[0]; 
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          imagePreview.src = e.target.result; 
          console.log(imagePreview);
          uploadButtons.style.display = "block";
          uploadNote.style.display = "none";
        };

        reader.readAsDataURL(file); 
      }
    });

