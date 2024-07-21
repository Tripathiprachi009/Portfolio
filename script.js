// script.js

// Function to show the selected content and hide others
function showContent(contentId) {
    // List of content sections
    const sections = ['video', 'skills', 'projects', 'certifications', 'education', 'contact'];
    
    // Hide all sections
    sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.add('hidden');
        }
    });

    // Show the selected content
    const content = document.getElementById(contentId);
    if (content) {
        content.classList.remove('hidden');
    }
}

// Event listeners for buttons
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', () => {
            const contentId = button.getAttribute('data-content');
            showContent(contentId);
        });
    });
});
