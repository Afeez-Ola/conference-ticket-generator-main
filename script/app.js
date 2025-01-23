const form  = document.getElementById("form")
const email = document.getElementById("email");
const fullName = document.getElementById("fullName");
const userName = document.getElementById("username");
const imageInput = document.getElementById("imageInput");
const imagePreview = document.getElementById("imagePreview")

const uploadErrorElement = document.getElementById("uploadError");
const emailErrorElement = document.getElementById("emailError");

imageInput.addEventListener('change', function(event) {
      const file = event.target.files[0]; // Get the selected file
      if (file) {
        const reader = new FileReader();

        // Once the file is read, set it as the source of the image preview
        reader.onload = function(e) {
          imagePreview.src = e.target.result; // Set the image preview source
          console.log(imagePreview.src);
        };

        reader.readAsDataURL(file); // Read the file as a data URL
      }
    });

