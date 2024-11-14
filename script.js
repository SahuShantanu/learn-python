document.getElementById('menu-toggle').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
});


// footer
// Array of words for search functionality
const items = ['Portfolio', 'Projects', 'Blogs', 'Contact', 'About', 'Web Development', 'JavaScript', 'HTML', 'CSS', 'Responsive Design'];

function searchItems() {
    const input = document.getElementById('search-box').value.toLowerCase();
    const results = items.filter(item => item.toLowerCase().includes(input));

    if (input) {
        console.log('Search Results:', results);
    }
}

// // topic button 
// const topicButton = document.getElementById('topic-button');
// const overlay = document.getElementById('overlay');
// const closeButton = document.getElementById('close-button');

// topicButton.addEventListener('click', () => {
//     overlay.style.display = 'block';
// });

// closeButton.addEventListener('click', () => {
//     overlay.style.display = 'none';
// });

// window.addEventListener('click', (event) => {
//     if (event.target === overlay) {
//         overlay.style.display = 'none';
//     }
// });


const topicButton = document.getElementById('topic-button');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('close-button');

topicButton.addEventListener('click', () => {
    overlay.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === overlay) {
        overlay.style.display = 'none';
    }
});


// animated hading 
const headingText = "WELCOME TO THE WORLD OF PYTHON";
const headingElement = document.getElementById('animated-heading');

function typeAnimation(text, element, delay = 100) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, delay);
        }
    }
    type();
}

window.onload = () => {
    typeAnimation(headingText, headingElement);
};
// -------------------------------------------------------------------------------------
