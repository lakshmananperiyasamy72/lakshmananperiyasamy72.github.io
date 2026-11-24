/**
 * THEME MANAGER
 * Handles light/dark mode preference with zero flash of unstyled theme (FOUC).
 * Synchronizes with OS preference and persists state via localStorage.
 */

(function () {
  const THEME_STORAGE_KEY = 'lp_portfolio_theme';
  const htmlElement = document.documentElement;

  function getPreferredTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    // Default to American Express Blue & White light theme
    return 'light';
  }

  function applyTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    // Update aria attributes if toggle exists
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach((btn) => {
      btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    });
  }

  // Set theme immediately to avoid FOUC
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  // Expose toggle function to window
  window.toggleTheme = function () {
    const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  };

  // Listen for system theme changes if user has no explicit override
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_STORAGE_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  // Attach DOM listeners once ready
  document.addEventListener('DOMContentLoaded', () => {
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach((btn) => {
      btn.addEventListener('click', window.toggleTheme);
      btn.setAttribute('aria-label', `Switch to ${htmlElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'} mode`);
    });
  });
})();

