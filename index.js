// Add 'show' class to the dropdown-menu for it to be initially open
document.querySelector('.dropdown-menu').classList.add('show');

const gridContainer = document.getElementById('grid-container');
        const btn2 = document.getElementById('btn1');
        const btn3 = document.getElementById('btn2');
        const btn4 = document.getElementById('btn3');

        btn1.addEventListener('click', () => {
            gridContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
        });

        btn2.addEventListener('click', () => {
            gridContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
        });

        btn3.addEventListener('click', () => {
            gridContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
        });

        // top button 
        
     // Get a reference to the button element
     const scrollToTopBtn = document.getElementById("scrollToTopBtn");

     // Add a click event listener to scroll to the top when clicked
     scrollToTopBtn.addEventListener("click", () => {
         // Scroll to the top of the document with smooth behavior
         window.scrollTo({
             top: 0,
             behavior: "smooth"
         });
     });

     // Show the button when the user scrolls down 20px from the top of the document
     window.addEventListener("scroll", () => {
         if (document.documentElement.scrollTop > 20) {
             scrollToTopBtn.style.display = "block";
         } else {
             scrollToTopBtn.style.display = "none";
         }
     });