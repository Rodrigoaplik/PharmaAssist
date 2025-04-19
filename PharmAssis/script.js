// Mostrar o botão "Voltar ao Topo" ao rolar
const topBtn = document.getElementById("topBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

// Ao clicar, volta para o topo
topBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Animações de aparecer ao rolar
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.info, .btn-whatsapp').forEach(el => observer.observe(el));

// Troca de tema claro/escuro
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');

  // Trocar ícone do botão
  if (body.classList.contains('dark')) {
    themeToggle.textContent = '🌞';
  } else {
    themeToggle.textContent = '🌙';
  }
});

// Manter tema escolhido mesmo se recarregar (opcional)
// if (localStorage.getItem('theme') === 'dark') {
//   body.classList.add('dark');
//   themeToggle.textContent = '🌞';
// }
