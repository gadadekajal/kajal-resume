function togglePDF(pdfId, button) {
    const pdfFrame = document.getElementById(pdfId);
  
    if (pdfFrame.style.display === "none" || pdfFrame.style.display === "") {
      pdfFrame.style.display = "block";
      button.textContent = "Hide Certificate";
    } else {
      pdfFrame.style.display = "none";
      button.textContent = "Show Certificate";
    }
  }

  
// const toggleBtn = document.getElementById("toggleBtn");
// const images = document.querySelectorAll(".toggle-image");

// let isVisible = false;

// toggleBtn.addEventListener("click", () => {
//   isVisible = !isVisible;
//   images.forEach(img => {
//     img.style.display = isVisible ? "block" : "none";
//   });

//   toggleBtn.textContent = isVisible ? "Hide Certificate" : "Certificate";
// });



function toggleImage(imageId, button) {
    const img = document.getElementById(imageId);
  
    if (img.style.display === "none" || img.style.display === "") {
      img.style.display = "block";
      button.textContent = "Hide Certificate";
    } else {
      img.style.display = "none";
      button.textContent = "Show Certificate";
    }
  }
  
  