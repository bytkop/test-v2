const authScreen = document.getElementById('auth-screen');
const mainApp = document.getElementById('main-app');
const userDisplay = document.getElementById('user-display');
const textarea = document.getElementById('message-input');

function login(provider) {
    authScreen.classList.add('hidden');
    mainApp.classList.remove('hidden');
    userDisplay.innerText = `Вход выполнен через ${provider}`;
}

textarea.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

document.getElementById('send-btn').addEventListener('click', async () => {
    const text = textarea.value.trim();
    if (!text) return;

    try {
        const response = await fetch('https://твой_логин.pythonanywhere.com/send_email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: text })
        });

        if (response.ok) {
            alert('Сообщение отправлено!');
            textarea.value = '';
        }
    } catch (err) {
        console.error('Ошибка при отправке');
    }
});