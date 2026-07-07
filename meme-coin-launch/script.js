
  function toggleCheck(el) {
    el.classList.toggle('done');
    if (el.classList.contains('done')) {
      el.querySelector('.check-box').textContent = '✓';
    } else {
      el.querySelector('.check-box').textContent = '';
    }
  }

  const phase1Images = [
    { src: 'images/img1.png',  caption: 'Step 1 — Visit phantom.app and click Download' },
    { src: 'images/img2.png',  caption: 'Step 2 — Select your browser (e.g. Chrome)' },
    { src: 'images/img3.png',  caption: 'Step 3 — Add to Chrome' },
    { src: 'images/img4.png',  caption: 'Step 4 — You can check and pin it to Chrome extension' },
    { src: 'images/img5.png',  caption: 'Step 5 — Click Create New Wallet' },
    { src: 'images/img6.png',  caption: 'Step 6 — Continue with Email' },
    { src: 'images/img7.png',  caption: 'Step 7 — Set up your PIN, then password' },
    { src: 'images/img8.png',  caption: 'Step 8 — Add username' },
    { src: 'images/img9.png',  caption: 'Step 9 — Your wallet is up and running' },
    { src: 'images/img10.png', caption: 'Step 10 — Toggle to Account1 for different Blockchain' },
    { src: 'images/img11.png', caption: 'Step 11 — View tokens and wallet balances' },
    { src: 'images/img12.png', caption: 'Step 12 — Change assets without sending to external exchange' },
    { src: 'images/img13.png', caption: 'Step 13 — Confirm a transfer or find a transaction ID (hash)' },
    { src: 'images/img14.png', caption: 'Step 14 — Safely find official links like Magic Eden or Jupiter' },
  ];

  const phase2Images = [
    { src: 'images/img15.png', caption: 'Step 15 — Go to pump.fun, click Sign in' },
    { src: 'images/img16.png', caption: 'Step 16 — Select the Phantom wallet logo' },
    { src: 'images/img17.png', caption: 'Step 17 — Click Connect to authorize pump.fun' },
    { src: 'images/img18.png', caption: 'Step 18 — Customize profile' },
    { src: 'images/img19.png', caption: 'Step 19 — Wallet connected, click Create' },
  ];

  const phase3Images = [
    { src: 'images/img20.png', caption: 'Step 20 — Click Create' },
    { src: 'images/img21.png', caption: 'Step 21 — Fill up details and add picture' },
    { src: 'images/img22.png', caption: 'Step 22 — Scroll down and click create' },
    { src: 'images/img23.png', caption: 'Step 23 — Dev buy (optional)' },
    { src: 'images/img24.png', caption: 'Step 24 — Click view coin' },
    { src: 'images/img25.png', caption: 'Step 25 — Check all the happenings' },
    { src: 'images/img26.png', caption: 'Step 26 — Coin is live. Use left panel to Buy' },
    { src: 'images/img27.png', caption: 'Step 27 — Coin is live. Use left panel to Sell' },
  ];

  const phase4Images = [
    { src: 'images/img28.png', caption: 'Step 28 — Copy your wallet address from pump.fun' },
    { src: 'images/img29.png', caption: 'Step 29 — Go to Solscan website and paste the link' },
    { src: 'images/img30.png', caption: 'Step 30 — Verify on Solscan (Solana blockchain explorer)' },
  ];

  let currentPhaseImages = [];
  let currentIndex = 0;

  function openModal(index)  { currentPhaseImages = phase1Images; openModalShared(index); }
  function openModal2(index) { currentPhaseImages = phase2Images; openModalShared(index); }
  function openModal3(index) { currentPhaseImages = phase3Images; openModalShared(index); }
  function openModal4(index) { currentPhaseImages = phase4Images; openModalShared(index); }

  function openModalShared(index) {
    currentIndex = index;
    updateModal();
    document.getElementById('imgModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    document.getElementById('imgModal').style.display = 'none';
    document.body.style.overflow = '';
  }

  function updateModal() {
    const item = currentPhaseImages[currentIndex];
    document.getElementById('modalImg').src = item.src;
    document.getElementById('modalCaption').textContent = item.caption;
    document.getElementById('modalCounter').textContent = (currentIndex + 1) + ' / ' + currentPhaseImages.length;
  }

  function nextImg() {
    currentIndex = (currentIndex + 1) % currentPhaseImages.length;
    updateModal();
  }

  function prevImg() {
    currentIndex = (currentIndex - 1 + currentPhaseImages.length) % currentPhaseImages.length;
    updateModal();
  }

  document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('imgModal');
    if (modal.style.display !== 'flex') return;
    if (e.key === 'ArrowRight') nextImg();
    if (e.key === 'ArrowLeft')  prevImg();
    if (e.key === 'Escape')     closeModal();
  });

// BACK TO TOP
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
  if (window.scrollY > 400) {
    backToTop.style.display = 'flex';
  } else {
    backToTop.style.display = 'none';
  }
});
