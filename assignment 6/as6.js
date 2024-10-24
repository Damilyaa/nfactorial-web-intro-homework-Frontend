// task 1: Удаление текста
const button = document.getElementById('button');
const text = document.getElementById('text');

button.addEventListener('click', () => {
    text.style.display = 'none';
});

// task 2: Определение обработчика событий
// button.addEventListener("click", () => alert("1"));
// button.removeEventListener("click", () => alert("1"));
// button.onclick = () => alert(2);
// Запустится onclick, и при клике будет выведено "2"

// task 3: Закрытие сообщений
const messages = document.querySelectorAll('.message');

messages.forEach(message => {
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Закрыть';
    closeButton.className = 'close';
    closeButton.addEventListener('click', () => {
        message.style.display = 'none';
    });
    message.appendChild(closeButton);
});

// Menu toggle
function toggleMenu(event) {
    const menu = event.currentTarget; 
    menu.classList.toggle('open'); 
}

// Carousel
let currentIndex = 0;
const imageList = document.getElementById("imageList");
const totalImages = imageList.children.length;

function moveSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 300; 
    imageList.style.transform = `translateX(${offset}px)`;
}
