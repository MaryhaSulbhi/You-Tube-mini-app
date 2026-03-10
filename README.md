# YouTube Mini App 🎬

A simple **YouTube-style mini web application** built using **HTML, CSS, and JavaScript**.
This project includes a **sidebar navigation, video grid, and a dark/light theme toggle that persists using localStorage.**

---

## 🚀 Features

* 🎥 **Video Grid** – Displays multiple YouTube video thumbnails
* 📂 **Sidebar Navigation** – Home, Trending, Subscriptions, History
* 🌗 **Dark / Light Mode Toggle**
* 💾 **Theme Persistence using localStorage**
* 🔍 **Search Bar**
* 📱 **Responsive Layout**

---

## 🌗 Dark Mode Toggle (localStorage)

The theme toggle allows users to switch between **light mode and dark mode**.

The selected theme is stored in **localStorage**, so the user's preference remains even after refreshing the page.

Example JavaScript logic:

```javascript
const toggle = document.getElementById("toggle")

if(localStorage.getItem("theme") === "dark"){
document.body.classList.add("dark")
}

toggle.addEventListener("click", () => {

document.body.classList.toggle("dark")

if(document.body.classList.contains("dark")){
localStorage.setItem("theme","dark")
}else{
localStorage.setItem("theme","light")
}

})
```

---

## 🛠 Technologies Used

* HTML
* CSS
* JavaScript
* Font Awesome Icons
* LocalStorage API

---

## 📁 Project Structure

```
youtube-mini-app
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 📌 Author

Created as a **frontend mini project** to practice:

* DOM manipulation
* localStorage
* UI layout with HTML & CSS
* JavaScript event handling
