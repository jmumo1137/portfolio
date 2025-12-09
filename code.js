// change navbar styles on scrolling
// window.addEventListener('scroll',() => {
//     document.querySelector('navbar').classList.toggle
//     ('window-scroll',window.scrollY > 0)
// });

// NAVBAR MENU TOGGLE
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// close menu

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);

// theme changer
    const themeCheckbox = document.querySelector("#theme-toggle");
    
    // Load saved theme from localStorage
    const currentTheme = localStorage.getItem("theme");
    if(currentTheme === "dark") {
        document.body.classList.add("dark");
     themeCheckbox.checked = true;
   }  

// Toggle theme and save preference
themeCheckbox.addEventListener("change", () => {
    if (themeCheckbox.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
});
    
    //scroll up button
        const scrollUp = document.querySelector("#scroll-up");
        scrollUp.addEventListener("click",()=>{
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
                transition: "3s",
            });
        });

        const names = ["Jonathan", "Mumo","Full-Stack Developer","Cybersecurity Analyst"];
const typingElement = document.getElementById("typing-name");

let nameIndex = 0;  // index in names array
let charIndex = 0;  // index of current letter
let isDeleting = false;
let typingSpeed = 150; // typing speed in ms

function type() {
    const currentName = names[nameIndex];

    if (!isDeleting) {
        // Typing letters
        typingElement.textContent = currentName.slice(0, charIndex + 1);
        charIndex++;
    } else {
        // Deleting letters
        typingElement.textContent = currentName.slice(0, charIndex - 1);
        charIndex--;
    }

    if (!isDeleting && charIndex === currentName.length) {
        // Pause at full name
        isDeleting = true;
        typingSpeed = 1000; // pause before deleting
    } else if (isDeleting && charIndex === 0) {
        // Move to next name
        isDeleting = false;
        nameIndex = (nameIndex + 1) % names.length;
        typingSpeed = 200; // pause before typing next name
    } else {
        typingSpeed = isDeleting ? 50 : 150; // normal typing/deleting speed
    }

    setTimeout(type, typingSpeed);
}

type();

