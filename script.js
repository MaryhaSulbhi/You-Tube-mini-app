const toggle = document.getElementById("toggle")
const cards = document.querySelectorAll(".video-card")

if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark")
}

toggle.addEventListener("click",()=>{

document.body.classList.toggle("dark")

if(document.body.classList.contains("dark")){
localStorage.setItem("theme","dark")
}else{
localStorage.setItem("theme","light")
}

})

cards.forEach(card=>{

card.addEventListener("click",()=>{

const id=card.getAttribute("data-id")

window.open(`https://www.youtube.com/watch?v=${id}`)

})

})