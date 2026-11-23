document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const updateNavbar = () => navbar.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();
  menuButton.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? '關閉選單' : '開啟選單');
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));

  const snowContainer = document.querySelector('.snowfall');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion) {
    const count = window.innerWidth < 760 ? 28 : 65;
    const symbols = ['❄', '❅', '✧', '·'];
    for (let i = 0; i < count; i++) {
      const flake = document.createElement('span');
      flake.className = 'snowflake';
      flake.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      flake.style.left = `${Math.random() * 100}%`;
      flake.style.fontSize = `${5 + Math.random() * 13}px`;
      flake.style.opacity = `${0.2 + Math.random() * 0.65}`;
      flake.style.animationDuration = `${9 + Math.random() * 17}s`;
      flake.style.animationDelay = `${-Math.random() * 24}s`;
      flake.style.setProperty('--drift', `${Math.random() * 160 - 80}px`);
      snowContainer.appendChild(flake);
    }
  }

  const wishes = [
    '❄ 願你的勇氣，如冰晶般閃耀。',
    '✧ 願每一個明天，都有新的奇蹟等著你。',
    '❅ 願你自由自在，綻放獨一無二的光芒。',
    '✨ 願溫暖與愛，陪伴你走過每一個冬天。'
  ];
  const wishButton = document.querySelector('#wish-button');
  const wishMessage = document.querySelector('#wish-message');
  wishButton.addEventListener('click', () => {
    wishMessage.textContent = wishes[Math.floor(Math.random() * wishes.length)];
    if (!reduceMotion) {
      for (let i = 0; i < 12; i++) {
        const sparkle = document.createElement('span');
        sparkle.textContent = '✧';
        sparkle.setAttribute('aria-hidden', 'true');
        sparkle.style.cssText = `position:fixed;left:${35 + Math.random() * 30}%;top:${35 + Math.random() * 30}%;font-size:${14 + Math.random() * 22}px;color:#d6f9ff;pointer-events:none;z-index:60;transition:transform 1.2s,opacity 1.2s;`;
        document.body.appendChild(sparkle);
        requestAnimationFrame(() => {
          sparkle.style.transform = `translate(${Math.random() * 280 - 140}px,${Math.random() * 240 - 120}px) rotate(180deg)`;
          sparkle.style.opacity = '0';
        });
        setTimeout(() => sparkle.remove(), 1300);
      }
    }
  });
});
