const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
})

let navbar = document.querySelector('.header .flex .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
    navbar.classList.toggle('active');
    menuBtn.classList.toggle('fa-times');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    menuBtn.classList.remove('fa-times');
}

new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    // pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 3000,
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

const courseDetails = {
    "Robotics": {
        title: "Robotics",
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
        originalPrice: "6000 EGP",
        price: "Price: 4000 EGP"
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
        originalPrice: "9000 EGP",
        price: "Price: 4500 EGP"
    },

    "Python": {
        title: "Python",
        hours: "50 hours",
        sessions: "10 sessions",
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
        originalPrice: "4000 EGP",
        price: "Price: 2000 EGP"
    },

    "C++": {
        title: "C++",
        hours: "50 hours",
        sessions: "10 sessions",
        description: [
            "Fundamentals of C++: Syntax, loops, functions, arrays, and pointers.",
            "Memory Management: Dynamic memory, pointers, references.",
            "Advanced Concepts: Templates, STL, exception handling.",
            "Object-Oriented Design: Classes, inheritance, polymorphism, operator overloading.",
            "Libraries: File I/O, multithreading, networking.",
            "Projects: File management system, text editor.",
            "Real-World Tools: Visual Studio, Git."
        ],
        originalPrice: "4000 EGP",
        price: "Price: 2000 EGP"
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

        price: "Price: 4000 EGP",
        originalPrice: "8500 EGP"
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

        price: "Price: 5000 EGP",
        originalPrice: "10000 EGP"
    },

    // Add more courses here...
};

// Add click event to all course cards
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

            document.getElementById("course-popup").style.display = "flex";
        }
    });
});



function closePopup() {
    document.getElementById("course-popup").style.display = "none";
}