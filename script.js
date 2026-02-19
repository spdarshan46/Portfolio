// Mobile menu
const menuIcon = document.getElementById('menuIcon');
const navlist = document.getElementById('navlist');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navlist.classList.toggle('active');
});

navlist.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        menuIcon.classList.remove('active');
        navlist.classList.remove('active');
    }
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const icon = themeToggle.querySelector('i');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    icon.classList.replace('bx-moon', 'bx-sun');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        icon.classList.replace('bx-moon', 'bx-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.replace('bx-sun', 'bx-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Skill filtering
window.filterSkills = function (category, event) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    const skills = document.querySelectorAll('.skill-card');
    skills.forEach(skill => {
        if (category === 'all' || skill.dataset.category === category) {
            skill.style.display = 'flex';
        } else {
            skill.style.display = 'none';
        }
    });
};

// Contact form
document.querySelector('#contactForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent default form submission behavior

    var form = this;
    var formData = new FormData(form);

    try {
        let response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' } // Ensure JSON response
        });

        let data = await response.json(); // Convert response to JSON

        if (response.ok && data.ok) {
            alert('Your message has been sent! Thank you for reaching out.');
            form.reset(); // Reset form fields
        } else {
            alert('Submission failed. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Oops! Something went wrong. Check your connection and try again.');
    }
});

// ==================== INSPECT DISABLE (SAFE) ====================

// Disable right-click
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

// Disable key shortcuts
document.addEventListener("keydown", function (e) {

    // F12
    if (e.key === "F12") {
        e.preventDefault();
    }

    // Ctrl + Shift + I / J / C
    if (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) {
        e.preventDefault();
    }

    // Ctrl + U (view source)
    if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
    }
});


