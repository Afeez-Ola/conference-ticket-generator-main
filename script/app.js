const form  = document.getElementById("form")
const email = document.getElementById("email");
const fullName = document.getElementById("fullName");
const userName = document.getElementById("username");
const imageInput = document.getElementById("imageInput");
const imagePreview = document.getElementById("imagePreview")
const uploadButtons = document.getElementById("uploadButtons");
const uploadNote = document.getElementById("upload_note");

const changeButton = document.getElementById("changeButton");
const removeButton = document.getElementById("removeButton");

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
          const fileSize = (file.size/1024).toFixed(2);
          console.log(fileSize);
          if (fileSize > 500) {
            uploadErrorElement.style.display = "block";
            form.reset();
            imagePreview.src = "/assets/images/icon-upload.svg";
            uploadButtons.style.display = "none";
            uploadNote.style.display = "block";
          }
        };
        reader.readAsDataURL(file); 
      }
    });

changeButton.addEventListener('click', function() {
  imageInput.click();
})

removeButton.addEventListener('click', function() {
  form.reset();
  imagePreview.src = "/assets/images/icon-upload.svg";
  uploadButtons.style.display = "none";
  uploadNote.style.display = "block";
})



