document.addEventListener('DOMContentLoaded', function() {
    // Set default tab on page load
    const firstTab = document.querySelector('.about-tab-btn');
    if (firstTab) {
        firstTab.click();
    }

    // Initialize typed.js
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Frontend Developer", "React Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Tab switching function
function openTab(tabName) {
    // Get all tab content and buttons
    var tabcontent = document.getElementsByClassName("tabcontent");
    var tabButtons = document.getElementsByClassName("about-tab-btn");
    
    // First hide all content and remove active class from all buttons
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }
    
    // Remove active class from all buttons
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }
    
    // Show the selected tab content and activate the clicked button
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}

// Toggle menu for mobile
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const navList = document.querySelector('.nav-list');
    menu.classList.toggle('active');
    navList.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(e) {
    const menu = document.querySelector('.menu');
    const navList = document.querySelector('.nav-list');
    if (!menu.contains(e.target) && !navList.contains(e.target) && navList.classList.contains('active')) {
        menu.classList.remove('active');
        navList.classList.remove('active');
    }
});

// Custom cursor effect
document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor');
    const cursor2 = document.querySelector('.cursor2');
    
    if (cursor && cursor2) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        cursor2.style.left = e.clientX + 'px';
        cursor2.style.top = e.clientY + 'px';
    }
});

// Add hover effect for clickable elements
document.querySelectorAll('a, button, .project-card').forEach(element => {
    element.addEventListener('mouseenter', () => {
        const cursor = document.querySelector('.cursor');
        if (cursor) {
            cursor.classList.add('hover');
        }
    });
    
    element.addEventListener('mouseleave', () => {
        const cursor = document.querySelector('.cursor');
        if (cursor) {
            cursor.classList.remove('hover');
        }
    });
});

// Handle active nav links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for section headers
const observerOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Add animation class when entering viewport
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        } 
        // Remove animation class when leaving viewport
        else {
            entry.target.classList.remove('animate');
        }
    });
}, observerOptions);

// Observe all section headers
document.querySelectorAll('.section-header').forEach(header => {
    observer.observe(header);
});