// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle active class to show/hide menu
});
// Dark/Light Theme Toggle
const toggleThemeButton = document.createElement('button');
toggleThemeButton.innerHTML = '<i class="fas fa-sun"></i>';
toggleThemeButton.style.position = 'fixed';
toggleThemeButton.style.top = '10px';
toggleThemeButton.style.right = '10px';
toggleThemeButton.style.zIndex = '1000';
document.body.appendChild(toggleThemeButton);

let isDarkTheme = true; // Default theme

const applyTheme = () => {
if (isDarkTheme) {
    document.documentElement.style.setProperty('--primary-bg-color', '#0B0C10');
    document.documentElement.style.setProperty('--secondary-bg-color', '#1F2833');
    document.documentElement.style.setProperty('--accent-color', '#66FCF1');
    document.documentElement.style.setProperty('--text-color', '#C5C6C7');
    document.documentElement.style.setProperty('--secondary-text-color', '#45A29E');
} else {
    document.documentElement.style.setProperty('--primary-bg-color', '#FFFFFF');
    document.documentElement.style.setProperty('--secondary-bg-color', '#F0F0F0');
    document.documentElement.style.setProperty('--accent-color', '#007BFF');
    document.documentElement.style.setProperty('--text-color', '#000000');
    document.documentElement.style.setProperty('--secondary-text-color', '#6C757D');
    }
};

toggleThemeButton.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    applyTheme();
});

// Dynamic Projects Section
const projects = [
    {
        title: 'Drum Machine ',
        description: 'This project showcases my skills in Component structuring, state management, props handling.',
        imgUrl: 'assets/drum.jpg',
        codeUrl: 'https://github.com/Habtnan/drum-machine'
    },
        {
        title: 'Calculator',
        description: 'This project showcases my skills in JavaScript. Math operations, parsing, and validation.',
        imgUrl: 'assets/calculator.jpg',
        codeUrl: 'https://github.com/Habtnan/Calculator/upload'
    },
        {
        title: 'Pomodoro Clock',
        description: 'This project is focused on State and lifecycle methods for timer resets/updates.',
        imgUrl: 'assets/promodoroclock.jpg',
        codeUrl: 'https://github.com/Habtnan/Pomodoro-Clock'
    },

    {
        title: 'Markdown Previewer',
        description: 'This project is focused on Two-way data binding, component communication.',
        imgUrl: 'assets/markdown.jpg',
        codeUrl: 'https://github.com/Habtnan/markdown-previewer'
    },

    {
        title: 'Quote Generator',
        description: 'Fetches and displays random quotes from an API, updating React components based on asynchronous data.',
        imgUrl: 'assets/quote.jpg',
        codeUrl: 'https://github.com/Habtnan/quote-generator'
    },

    {
        title: 'Cash Register',
        description: 'Calculation logic for currency, formatting results.',
        imgUrl: 'assets/cashregister.jpg',
        codeUrl: ''
    },
    {
        title: 'Telephone Validator',
        description: 'This project is focused on Regular expressions for validating input formats..',
        imgUrl: 'assets/phone-validator.jpg'
    },
        {
        title: 'Telephone Validator',
        description: 'This project integrates APIs and third-party services.',
        imgUrl: 'assets/pokemon.jpg',
        codeUrl: ''
    },
];

const projectContainer = document.querySelector('.project');
projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.innerHTML = `
    <img src="${project.imgUrl}" alt="${project.title}">
    <a href="${project.codeUrl}" target="_blank"><h3>${project.title}</h3></a>
    <p>${project.description}</p>
    `;
    projectContainer.appendChild(projectDiv);
});

// Contact Form Validation
document.querySelector('.contact-form').addEventListener('submit', function (e) {
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Prevent spaces in user inputs
if (/\s/.test(nameInput.value) || !nameInput.value.trim()) {
alert('Name cannot contain spaces or be empty. Please enter a valid name.');
e.preventDefault();
return;
}

if (/\s/.test(emailInput.value) || !emailInput.value.trim()) {
alert('Email cannot contain spaces or be empty. Please enter a valid email address.');
e.preventDefault();
return;
}

if (/\s/.test(messageInput.value) || !messageInput.value.trim()) {
alert('Message cannot contain spaces or be empty. Please enter a valid message.');
e.preventDefault();
return;
}
});

// Fade-in Effect for the About Me Section
const aboutMeSection = document.getElementById('about-me');
aboutMeSection.style.opacity = 0; // Set initial opacity
aboutMeSection.style.transition = 'opacity 1s ease-in-out'; // Add transition

window.addEventListener('scroll', () => {
const sectionPosition = aboutMeSection.getBoundingClientRect().top;
const screenPosition = window.innerHeight / 1.2; // Adjust fade-in trigger point

if (sectionPosition < screenPosition) {
aboutMeSection.style.opacity = 1; // Fade in
}
});

