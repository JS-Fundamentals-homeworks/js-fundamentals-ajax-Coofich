// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

document.getElementById('getUserButton').addEventListener('click', () => {
    const inputName = document.getElementById('userNameInput').value.trim();
    const citySpan = document.getElementById('userCity');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const foundUser = users.find(user => user.name.toLowerCase() === inputName.toLowerCase());

            if (foundUser) {
                citySpan.textContent = foundUser.address.city;
            } else {
                citySpan.textContent = 'User not found';
            }
        })
        .catch(error => {
            console.error('Помилка при пошуку користувача:', error);
            citySpan.textContent = 'Error fetching user data';
        });
});