// task 1
const button = document.getElementById('button');
        const text = document.getElementById('text');

        button.addEventListener('click', () => {
            text.style.display = 'none';
        });


// task 2
// button.addEventListener("click", () => alert("1"));
// button.removeEventListener("click", () => alert("1"));
// button.onclick = () => alert(2);
//Запустится onclick, и при клике будет выведено "2"


// task 3
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