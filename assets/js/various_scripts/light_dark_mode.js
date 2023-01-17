let currentTime = new Date().getHours();
let mode = (currentTime >= 7 && currentTime < 19) ? 'light-mode' : 'dark-mode';
document.body.classList.add(mode);
console.log(mode);
