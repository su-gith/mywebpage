// Wait for the entire HTML document to be loaded and parsed
document.addEventListener('DOMContentLoaded', () => {
    // Get the "Read More" button element
    const ctaButton = document.querySelector('.cta-button');

    // Get the milestones section element
    const milestonesSection = document.getElementById('milestones');

    // Add a click event listener to the "Read More" button
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            // Smooth scroll to the milestones section when the button is clicked
            if (milestonesSection) {
                milestonesSection.scrollIntoView({
                    behavior: 'smooth' // Enable smooth scrolling animation
                });
            } else {
                console.error("Milestones section not found."); // Log an error if section is missing
            }
        });
    } else {
        console.error("CTA button not found."); // Log an error if button is missing
    }

    // Optional: Add a simple hover effect using JavaScript (though CSS is generally preferred for this)
    // For demonstration purposes, let's add a class on hover for the hero section
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', () => {
            heroSection.classList.add('hovered'); // Add 'hovered' class on mouse enter
        });

        heroSection.addEventListener('mouseleave', () => {
            heroSection.classList.remove('hovered'); // Remove 'hovered' class on mouse leave
        });
    }

    // You can add more interactive elements here, for example:
    // - A photo gallery with a lightbox
    // - A countdown timer to a special date
    // - Simple animations on scroll
});

// Example of adding a simple class for the JavaScript hover effect (add this to style.css if you use it)
/*
.hovered {
    transform: scale(1.01);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
*/
