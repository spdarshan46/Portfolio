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

text.innerHTML = text.innerHTML.split("").map((char,i)=>
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

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the form from submitting immediately

    var form = this;
    var formData = new FormData(form);
    
    // Send the data to Formspree using the Fetch API (you can also use Ajax)
    fetch(form.action, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            alert('Your message has been sent! Thank you for reaching out.');
            form.reset();  // Reset form after submission
        } else {
            alert('Oops, something went wrong. Please try again later.');
        }
    })
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


//inspect

    document.addEventListener('contextmenu', function (e) {
        e.preventDefault(); // Disable right-click
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
            e.preventDefault();  // Disable F12 and Ctrl+Shift+I
        }
    });



