document.addEventListener('DOMContentLoaded', () => {

    // --- Q&A Toggle Functionality ---
    const qaItems = document.querySelectorAll('.qa-item');

    qaItems.forEach(item => {
        const questionButton = item.querySelector('.question');
        // const answerDiv = item.querySelector('.answer'); // We don't hide/show directly anymore

        if (questionButton) {
            questionButton.addEventListener('click', () => {
                // Toggle 'active' class on the parent .qa-item
                item.classList.toggle('active');

                // --- Optional: Accordion Effect (Close others when one opens) ---
                // Uncomment below lines if you want only one answer open at a time
                /*
                qaItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                */
            });
        }
    });

    // --- Back to Top Button Functionality ---
    const backToTopButton = document.getElementById("backToTopBtn");

    if (backToTopButton) {
        // Show button when user scrolls down 100px
        window.onscroll = function() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                backToTopButton.style.display = "block";
                 backToTopButton.style.opacity = "1"; // Fade in effect
            } else {
                 backToTopButton.style.opacity = "0"; // Fade out effect
                 // Hide completely after transition
                 setTimeout(() => {
                     if (!(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)) {
                        backToTopButton.style.display = "none";
                     }
                 }, 300); // Match transition duration
            }
        };

        // Scroll smoothly to top when button clicked
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- Prism JS Initialization (Optional but good practice) ---
    Prism.highlightAll(); // Autoloader usually handles this, but explicit call is fine.
    // Copy button plugin usually adds its own listeners.

    console.log("DSA Hinglish Site Script Loaded and Enhanced!");

}); // End DOMContentLoaded