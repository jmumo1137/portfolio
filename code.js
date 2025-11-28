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
