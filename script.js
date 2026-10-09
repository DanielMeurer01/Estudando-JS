const toggleThemeBtn = document.getElementById('toggleTheme');
const incrementBtn = document.getElementById('incrementBtn');
const counter = document.getElementById('counter');
const hourEl = document.getElementById('hour');

let count = 0;

function updateCounter() {
  counter.textContent = count;
}

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString('pt-BR');
  hourEl.textContent = `Hora atual: ${time}`;
}

toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  toggleThemeBtn.textContent = isDark ? 'Tema claro' : 'Tema escuro';
});

incrementBtn.addEventListener('click', () => {
  count += 1;
  updateCounter();
});

updateCounter();
updateClock();
setInterval(updateClock, 1000);
