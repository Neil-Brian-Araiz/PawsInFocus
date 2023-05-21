const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-links").forEach(n => 
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })    
)

function scrollToDogs() {
    let breedsSelect = document.getElementById("breeds");
    let selectedBreed = breedsSelect.value;
  
    if (selectedBreed !== "") {
      let targetDiv = document.getElementById(selectedBreed);
      targetDiv.scrollIntoView({ behavior: "smooth" });
    }
}

  
