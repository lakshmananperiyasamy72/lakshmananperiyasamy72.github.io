/**
 * MAIN INTERACTION COORDINATOR
 * - Smooth scroll & back-to-top handlers
 * - IntersectionObserver scroll reveal animations
 * - Custom ambient cursor follower (usability-first)
 * - Interactive clipboard copy for email
 * - Project card dynamic lighting hover effect
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Developer Console Stamp
  console.log(
    '%c Lakshmanan Periyasamy %c Software Developer & DevOps Engineer ',
    'background:#B6F36B; color:#0B0D10; font-weight:bold; padding:4px 8px; border-radius:4px 0 0 4px;',
    'background:#12151A; color:#B6F36B; border:1px solid #1E232C; font-weight:bold; padding:3px 8px; border-radius:0 4px 4px 0;'
  );

  // 3. Scroll Reveal Animation using IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (revealElements.length > 0) {
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealElements.forEach((el) => el.classList.add('revealed'));
    } else {
      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          threshold: 0.08,
          rootMargin: '0px 0px -40px 0px'
        }
      );

      revealElements.forEach((el) => revealObserver.observe(el));
    }
  }

  // 4. Back-to-Top Handlers (Footer Button + Floating Button)
  const floatingTopBtn = document.querySelector('.floating-top-btn');
  const allTopBtns = document.querySelectorAll('.back-to-top-btn, .floating-top-btn');

  function handleScrollVisibility() {
    if (floatingTopBtn) {
      if (window.scrollY > 400) {
        floatingTopBtn.classList.add('visible');
      } else {
        floatingTopBtn.classList.remove('visible');
      }
    }
  }

  window.addEventListener('scroll', handleScrollVisibility, { passive: true });

  allTopBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });
  });

  // 5. Interactive Copy Email to Clipboard
  const copyEmailBtns = document.querySelectorAll('.copy-email-btn');
  copyEmailBtns.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const email = btn.getAttribute('data-email') || 'lakshmananperiyasamy72@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        const originalHTML = btn.innerHTML;
        btn.classList.add('copied');
        btn.innerHTML = '<i data-lucide="check" style="width:14px;height:14px;"></i><span>Copied to Clipboard!</span>';
        if (window.lucide) window.lucide.createIcons();

        setTimeout(() => {
          btn.classList.remove('copied');
          btn.innerHTML = originalHTML;
          if (window.lucide) window.lucide.createIcons();
        }, 2400);
      } catch (err) {
        console.warn('Clipboard write fallback triggered', err);
        window.location.href = `mailto:${email}`;
      }
    });
  });

  // 6. Project Card Dynamic Mouse Spotlight Effect
  const projectCards = document.querySelectorAll('.project-card, .card');
  if (!prefersReducedMotion && window.matchMedia('(hover: hover)').matches) {
    projectCards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }

  // 7. Custom Ambient Cursor Follower (Only on fine-pointer devices, preserves native cursor)
  const cursorFollower = document.querySelector('.custom-cursor-follower');
  if (cursorFollower && window.matchMedia('(hover: hover) and (pointer: fine)').matches && !prefersReducedMotion) {
    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let isMoving = false;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isMoving) {
        cursorFollower.classList.add('active');
        isMoving = true;
      }
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      cursorFollower.classList.remove('active');
      isMoving = false;
    });

    // Smooth lerp RAF loop for fluid tracking
    function updateCursor() {
      currentX += (mouseX - currentX) * 0.22;
      currentY += (mouseY - currentY) * 0.22;
      cursorFollower.style.left = `${currentX}px`;
      cursorFollower.style.top = `${currentY}px`;
      requestAnimationFrame(updateCursor);
    }
    requestAnimationFrame(updateCursor);

    // Expand on interactive elements
    const interactiveSelectors = 'a, button, .btn, .card, .project-card, .skill-chip, .tag, input, textarea';
    const interactiveElements = document.querySelectorAll(interactiveSelectors);

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => cursorFollower.classList.add('hovering'));
      el.addEventListener('mouseleave', () => cursorFollower.classList.remove('hovering'));
    });
  }
});
