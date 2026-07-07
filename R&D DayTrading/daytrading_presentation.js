 // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));

  // Scroll to top button
  const scrollBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });

function toggleYT(btn) {
  const wrap = btn.closest('.yt-wrap');
  const box = wrap.querySelector('.yt-embed-box');
  const isOpen = box.classList.contains('open');
 
  if (!isOpen) {
    const src = box.dataset.src;
    // Only inject iframe if a real URL is set (not placeholder)
    if (src && src !== 'PLACEHOLDER') {
      // Clear placeholder, inject iframe
      box.innerHTML = `<iframe src="${src}?autoplay=1&rel=0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
    box.classList.add('open');
    btn.classList.add('open');
  } else {
    box.classList.remove('open');
    btn.classList.remove('open');
    // Pause video by removing iframe (re-adds placeholder if needed)
    const iframe = box.querySelector('iframe');
    if (iframe) {
      const src = iframe.src.replace('?autoplay=1&rel=0', '');
      box.dataset.src = src;
      box.innerHTML = `<div class="yt-placeholder">
        <div class="yt-play-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#ff4444"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </div>
        <p>Click ▶ to play again</p>
      </div>`;
    }
  }
}

