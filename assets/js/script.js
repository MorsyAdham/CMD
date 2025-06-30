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
    "Arduino": {
        title: "Arduino",
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
        price: "Price: 1000 EGP"
    },
    "Mobile Application Development": {
        title: "Mobile Application Development",
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
        price: "Price: 1500 EGP"
    },
    "Python": {
        title: "Python",
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

        price: "Price: 900 EGP"
    },
    "C++": {
        title: "C++",
        description: [
            "Fundamentals of C++: Syntax, loops, functions, arrays, and pointers.",
            "Memory Management: Dynamic memory, pointers, references.",
            "Advanced Concepts: Templates, STL, exception handling.",
            "Object-Oriented Design: Classes, inheritance, polymorphism, operator overloading.",
            "Libraries: File I/O, multithreading, networking.",
            "Projects: File management system, text editor.",
            "Real-World Tools: Visual Studio, Git."
        ],

        price: "Price: 900 EGP"
    },
    "Hardware for ML & Computer Vision": {
        title: "Hardware for ML & Computer Vision",
        description: [
            "AI on Embedded Devices: Run models on microcontrollers and edge devices.",
            "Sensor Integration: Cameras, LIDAR for real-time vision tasks.",
            "ML on Edge Devices: Implement object detection, facial recognition, and classification.",
            "Real-Time Processing for Robotics and IoT systems.",
            "Projects: Autonomous vehicles, smart surveillance, robotic arms.",
            "Tools: OpenCV, TensorFlow Lite, Raspberry Pi, NVIDIA Jetson Nano."
        ],

        price: "Price: 900 EGP"
    },

    "Hardware Design & Testing": {
        title: "Hardware Design & Testing",
        description: [
            "Digital Logic Design: Combinational and sequential circuits.",
            "PCB Design: Learn to design PCBs using tools like KiCad or Eagle.",
            "Circuit Simulation & Testing: Use multimeters, oscilloscopes, and logic analyzers.",
            "Microcontroller-based Hardware Design.",
            "Power Management & Noise Reduction Techniques.",
            "Hands-On Projects: Build and test hardware circuits for automation, sensors, and IoT.",
            "Industry Standards: Understand safety, documentation, and testing protocols."
        ],

        price: "Price: 900 EGP"
    },

    "Generative AI & Prompt Engineering": {
        title: "Generative AI & Prompt Engineering",
        description: [
            "Generative AI Models: GANs, VAEs, transformers.",
            "Prompt Engineering: Craft effective prompts for GPT, DALL·E, and others.",
            "Training LLMs: Understand architectures like GPT, BERT, and fine-tuning methods.",
            "Build Projects: AI content generators, chatbots, image generation tools.",
            "Hands-On Practice: Work with OpenAI, Hugging Face APIs.",
            "Tools: GPT, DALL·E, Stable Diffusion, LangChain."
        ],

        price: "Price: 900 EGP"
    },

    "Embedded Systems": {
        title: "Embedded Systems",
        description: [
            "Microcontroller Programming with C/C++.",
            "Sensor Integration: Motion, temperature, GPS, and communication modules.",
            "RTOS Concepts: Task scheduling, interrupts, and timers.",
            "Embedded Projects: IoT automation, wearable devices, robotics.",
            "Debugging: Using tools like JTAG, logic analyzers, and serial monitors.",
            "Tools: Arduino IDE, MPLAB X, STM32CubeIDE, Keil uVision."
        ],

        price: "Price: 900 EGP"
    },

    "CCNA": {
        title: "CCNA",
        description: [
            "Networking Fundamentals: IP addressing, subnetting, routing, and switching.",
            "Cisco Devices: Configuration of routers and switches.",
            "Protocols: TCP/IP, DNS, DHCP, VPN.",
            "Network Security: Firewalls, ACLs, VPN setup.",
            "Practical Labs: Design and troubleshoot networks.",
            "Tools: Cisco Packet Tracer, GNS3, real Cisco hardware."
        ],

        price: "Price: 900 EGP"
    },

    "Blockchain": {
        title: "Blockchain",
        description: [
            "Core Concepts: Decentralization, consensus, cryptographic hashing.",
            "Smart Contracts: Develop with Solidity on Ethereum.",
            "dApp Development: Create decentralized applications.",
            "Security & Privacy: Handle scalability, 51% attacks, and cryptographic challenges.",
            "Projects: NFT marketplaces, DeFi apps, voting systems.",
            "Tools: Truffle, Ganache, Remix, MetaMask."
        ],

        price: "Price: 900 EGP"
    },

    "Ethical Hacking": {
        title: "Ethical Hacking",
        description: [
            "Hacking Methodologies: Ethical hacking and penetration testing lifecycle.",
            "Vulnerability Scanning: Tools like Nmap, Nessus.",
            "Web Security: OWASP Top 10 vulnerabilities, SQL injection, XSS.",
            "Post-Exploitation: Maintaining access, backdoors, pivoting.",
            "Hands-On Tools: Kali Linux, Metasploit, Burp Suite.",
            "Projects: Simulate attacks on systems and write penetration reports.",
            "Ethics & Legal Compliance: Understand frameworks and standards."
        ],

        price: "Price: 900 EGP"
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

            const list = document.getElementById("popup-description");
            list.innerHTML = "";
            data.description.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item;
                list.appendChild(li);
            });

            document.getElementById("popup-price").innerText = data.price;
            document.getElementById("course-popup").style.display = "flex";
        }
    });
});

function closePopup() {
    document.getElementById("course-popup").style.display = "none";
}
