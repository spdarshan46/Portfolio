// active hamburger menu 
let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist");
menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
});

// remove navlist
navlist.addEventListener("click", () => {
    navlist.classList.remove("active");
    menuIcon.classList.remove("active");
    document.body.classList.remove("open");
});

// rotate text js code 
let text = document.querySelector(".text p");

text.innerHTML = text.innerHTML.split("").map((char, i) =>
    `<b style="transform:rotate(${i * 6.3}deg")>${char}</b>`
).join("");


// switch between about buttons 
const buttons = document.querySelectorAll('.about-btn button');
const contents = document.querySelectorAll('.content');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        contents.forEach(content => content.style.display = 'none');
        contents[index].style.display = 'block';
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// active menu 
let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll('section');

function activeMenu() {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) { }
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

//mail

document.querySelector('form').addEventListener('submit', async function (e) {
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



//percentage

document.addEventListener("DOMContentLoaded", function () {
    function animateCircle(selector, targetValue) {
        const circle = document.querySelector(selector);
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (targetValue / 100) * circumference;

        circle.style.transition = "stroke-dashoffset 2s ease";
        circle.style.strokeDasharray = circumference;
        circle.style.strokeDashoffset = offset;
    }

    animateCircle('.circle-python', 50); // Python 50%
    animateCircle('.circle-java', 45); // Java 45%
    animateCircle('.circle-javascript', 40); // JavaScript 40%
    animateCircle('.circle-html', 60); // HTML & CSS 60%
    animateCircle('.circle-backend', 35); // Backend 35%
    animateCircle('.circle-database', 60); // Database 60%

    // Animate counters
    const counters = document.querySelectorAll('.counter span');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const interval = setInterval(() => {
            counter.innerText = count + "%";
            if (count >= target) {
                clearInterval(interval);
            }
            count++;
        }, 50); // Speed of the counter animation
    });
});

// ==================== Dark / Light Mode ====================
const themeToggle = document.getElementById("themeToggle");
const icon = themeToggle.querySelector("i");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    icon.classList.replace("bx-moon", "bx-sun");
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        icon.classList.replace("bx-moon", "bx-sun");
        localStorage.setItem("theme", "dark");
    } else {
        icon.classList.replace("bx-sun", "bx-moon");
        localStorage.setItem("theme", "light");
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



