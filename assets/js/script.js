// Sticky header and menu
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

let navbar = document.querySelector('.header .flex .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
    navbar.classList.toggle('active');
    menuBtn.classList.toggle('fa-times');
};

window.onscroll = () => {
    navbar.classList.remove('active');
    menuBtn.classList.remove('fa-times');
};

// Swiper setup with saved instance
const swiper = new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 3000,
    },

    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});

const courseDetails = {
    "Robotics - Arduino": {
        title: "Robotics - Arduino",
        hours: "60 hours",
        sessions: "12 sessions",
        description: [
            "Basics of Arduino IDE and programming environment.",
            "Digital and analog I/O control: LEDs, buttons, and sensors.",
            "Interfacing with actuators: servos, motors, and buzzers.",
            "Sensor Integration: Ultrasonic, temperature, IR, and light sensors.",
            "Project Development: Smart home devices, alarm systems, and automation.",
            "Communication Protocols: I2C, SPI, and serial communication.",
            "Hands-on with shields and modules (WiFi, Bluetooth, LCDs).",
            "Debugging & troubleshooting embedded systems."
        ],
        originalPrice: "6,000 EGP",
        price: "Price: 4,000 EGP"
    },

    "Mobile Application Development": {
        title: "Mobile Application Development",
        hours: "100 hours",
        sessions: "20 sessions",
        description: [
            "Fundamentals of mobile app development using Flutter.",
            "UI/UX design principles: widgets, layouts, and navigation.",
            "State Management techniques (Provider, Riverpod, etc.).",
            "Firebase Integration: Authentication, Firestore, and real-time databases.",
            "API Handling: HTTP requests, JSON parsing, and RESTful APIs.",
            "Building cross-platform apps for Android and iOS.",
            "Local storage using Shared Preferences and SQLite.",
            "Project-Based Learning: Build chat apps, to-do lists, or smart controllers."
        ],
        originalPrice: "7,000 EGP",
        price: "Price: 3,500 EGP"
    },

    "Python": {
        title: "Python",
        hours: "60 hours",
        sessions: "20 sessions",
        description: [
            "Master Python Fundamentals: Learn basic syntax, variables, data types, and control flow.",
            "Data Structures & Algorithms: Work with lists, dictionaries, sets, and advanced structures.",
            "Object-Oriented Programming (OOP): Classes, inheritance, polymorphism, encapsulation.",
            "Libraries for Data Science: NumPy, Pandas, Matplotlib.",
            "Building Real-World Applications: Web scrapers, automation scripts, basic web apps.",
            "Working with Databases: SQL integration with Python.",
            "Project-based Learning: Build a chatbot, task manager, or data dashboard.",
            "Tools: Git, Jupyter Notebooks, pytest."
        ],
        originalPrice: "5,000 EGP",
        price: "Price: 2,500 EGP"
    },

    "C++": {
        title: "C++",
        hours: "60 hours",
        sessions: "20 sessions",
        description: [
            "Fundamentals of C++: Syntax, loops, functions, arrays, and pointers.",
            "Memory Management: Dynamic memory, pointers, references.",
            "Advanced Concepts: Templates, STL, exception handling.",
            "Object-Oriented Design: Classes, inheritance, polymorphism, operator overloading.",
            "Libraries: File I/O, multithreading, networking.",
            "Projects: File management system, text editor.",
            "Real-World Tools: Visual Studio, Git."
        ],
        originalPrice: "5,000 EGP",
        price: "Price: 2,500 EGP"
    },

    "Embedded Systems": {
        title: "Embedded Systems",
        hours: "100 hours",
        sessions: "20 sessions",
        description: [
            "Intro to Embedded Systems & C Programming Basics.",
            "AVR Microcontroller Programming (Digital I/O, Timers, Interrupts).",
            "Hardware Control (LCD, ADC, PWM, Motors).",
            "Communication Protocols (UART, SPI, I2C).",
            "Sensor Integration & Wireless Modules.",
            "Data Visualization + Debugging.",
            "RTOS Intro with FreeRTOS + Task Management."
        ],

        price: "Price: 4,000 EGP",
        originalPrice: "8,500 EGP"
    },

    "Game Development": {
        title: "Game Development",
        hours: "100 hours",
        sessions: "20 sessions",
        description: [
            "Introduction to Unity interface and C# scripting.",
            "2D and 3D game mechanics implementation.",
            "3D modeling, texturing, rigging, and animation.",
            "Scene composition, lighting, and camera.",
            "Game physics, collisions, UI/UX design.",
            "Sound integration and visual effects.",
            "Game polishing and publishing.",
            "Mini capstone project to build a publishable game."
        ],

        price: "Price: 5,000 EGP",
        originalPrice: "10,000 EGP"
    },

    "AI & ML": {
        title: "AI & ML",
        hours: "100 hours",
        sessions: "25 sessions",
        description: [
            "Python programming essentials: variables, data types, conditionals, loops, and basic projects.",
            "Object-Oriented Programming: classes, inheritance, encapsulation, and real-world modeling.",
            "Data structures and exception handling: lists, dictionaries, sets, try/except blocks.",
            "Data analysis with Python: NumPy, Pandas, Matplotlib, and data visualization.",
            "Introduction to AI & ML: concepts, types of learning, and ML pipelines.",
            "Supervised learning: regression, classification, model training, and evaluation.",
            "Unsupervised learning: clustering, dimensionality reduction, and use cases.",
            "Final project: build a complete AI/ML solution using real-world datasets."
        ],
        originalPrice: "8,000 EGP",
        price: "Price: 4,000 EGP"
    },

    "Robotics for Kids": {
        title: "Robotics for Kids",
        hours: "45 hours",
        sessions: "15 sessions",
        description: [
            "Introduction to robotics and how robots work in the real world.",
            "Learn the basics of Arduino programming in a fun and simple way.",
            "Understand electricity and build simple circuits using LEDs and batteries.",
            "Use PictoBlox to create interactive robotics and coding projects.",
            "Explore common electronic components like sensors, motors, and buzzers.",
            "Discover how wireless modules like WiFi and Bluetooth allow robots to connect and communicate.",
            "Final project: Build and program your own Smart Car robot!"
        ],
        originalPrice: "6,000 EGP",
        price: "Price: 3,500 EGP"
    },

    "Programming for Kids": {
        title: "Programming for Kids",
        hours: "40 hours",
        sessions: "20 sessions",
        description: [
            "Learn the basics of Python: variables, numbers, text, and how to talk to the computer.",
            "Create fun programs with decisions (if/else) and loops to repeat actions.",
            "Make mini-games and interactive stories using simple code.",
            "Use lists to store things like scores or colors, and build logic using conditions.",
            "Understand how to catch and fix errors using friendly error messages.",
            "Explore drawing and animations using Turtle graphics.",
            "Build cool projects like a quiz game, a calculator, or a simple drawing app.",
            "Final project: design your own mini game or animation and share it!"
        ],
        originalPrice: "3500 EGP",
        price: "Price: 2500 EGP"
    },

    "Scratch for Kids": {
        title: "Scratch for Kids",
        hours: "30 hours",
        sessions: "15 sessions",
        description: [
            "Introduce kids to the Scratch platform and interface.",
            "Understand how coding is like storytelling.",
            "Learn user interaction and game basics.",
            "Teach logic through conditions and loops.",
            "Create a simple, playable game.",
            "Create interactive, animated stories.",
            "Advance project design with creativity and polish.",
            "Build a complete, polished Scratch game!"
        ],
        originalPrice: "3500 EGP",
        price: "Price: 2500 EGP"
    }

    // Add more courses here...
};

// Show popup
document.querySelectorAll(".card-item").forEach(card => {
    card.addEventListener("click", () => {
        const badge = card.querySelector(".badge");
        const courseKey = badge?.innerText.trim();

        if (courseDetails[courseKey]) {
            const data = courseDetails[courseKey];
            document.getElementById("popup-title").innerText = data.title;
            document.getElementById("popup-meta").innerText = `${data.hours} | ${data.sessions}`;

            const list = document.getElementById("popup-description");
            list.innerHTML = "";
            data.description.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item;
                list.appendChild(li);
            });

            document.getElementById("popup-original-price").innerText =
                data.originalPrice ? `Original: ${data.originalPrice}` : "";

            document.getElementById("popup-price").innerText = data.price;

            // Show popup and stop Swiper autoplay
            document.getElementById("course-popup").style.display = "flex";
            swiper.autoplay.stop();
        }
    });
});

// Close popup and resume autoplay
function closePopup() {
    document.getElementById("course-popup").style.display = "none";
    swiper.autoplay.start();
}