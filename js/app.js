const container = document.querySelector(".container")
const logos = [
  { name: " ", image: "images/conin2.png" },
  { name: " ", image: "images/conin1.png" },
]

const showPages = () => {
  let output = ""
  logos.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
              
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showPages)

if ("navigator.serviceWorker.register()" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registrado"))
      .catch(err => console.log("service worker no registrado", err))
  })
}