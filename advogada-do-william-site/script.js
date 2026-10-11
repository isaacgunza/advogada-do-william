const heartsLayer = document.querySelector('.floating-hearts');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function createHeart() {
  if (reducedMotion || !heartsLayer) return;
  const heart = document.createElement('span');
  heart.className = 'float-heart';
  heart.textContent = ['♡', '♥', '💗', '💕'][Math.floor(Math.random() * 4)];
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${14 + Math.random() * 20}px`;
  heart.style.animationDuration = `${8 + Math.random() * 8}s`;
  heartsLayer.appendChild(heart);
  heart.addEventListener('animationend', () => heart.remove(), { once: true });
}
if (!reducedMotion) {
  for (let i = 0; i < 12; i++) setTimeout(createHeart, i * 350);
  setInterval(createHeart, 850);
}

const answer = document.getElementById('answer');
const actions = document.getElementById('actions');
document.getElementById('yesBtn').addEventListener('click', () => {
  answer.hidden = false;
  answer.innerHTML = '💖 <strong>Que este seja o começo de algo muito bonito!</strong><br>Obrigado por me dares a oportunidade de escrever esta história contigo. Um capítulo de cada vez, com carinho e respeito. — William';
  actions.hidden = true;
  for (let i = 0; i < 24; i++) setTimeout(createHeart, i * 90);
});
document.getElementById('maybeBtn').addEventListener('click', () => {
  answer.hidden = false;
  answer.textContent = 'Claro que sim. 💌 Pensa com calma — o mais importante é que te sintas confortável e possas responder com sinceridade. Seja qual for a tua resposta, obrigado por leres a minha carta.';
});

const musicBtn = document.getElementById('musicBtn');
const youtubeWrap = document.getElementById('youtubeWrap');
const youtubePlayer = document.getElementById('youtubePlayer');
let musicStarted = false;
musicBtn.addEventListener('click', () => {
  if (!musicStarted) {
    youtubeWrap.hidden = false;
    // O parâmetro autoplay é adicionado apenas após um clique explícito do utilizador.
    youtubePlayer.src = 'https://www.youtube-nocookie.com/embed/2Vv-BfVoq4g?autoplay=1&enablejsapi=1&playsinline=1';
    musicStarted = true;
    musicBtn.textContent = '♪ Música iniciada';
    musicBtn.setAttribute('aria-pressed', 'true');
    youtubeWrap.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'nearest' });
  } else {
    youtubeWrap.hidden = !youtubeWrap.hidden;
    musicBtn.textContent = youtubeWrap.hidden ? '▶ Mostrar música' : '♪ Música visível';
    musicBtn.setAttribute('aria-pressed', String(!youtubeWrap.hidden));
  }
});
