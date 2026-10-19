(() => {
  const navs = document.querySelectorAll('.w-nav');

  function setOpen(nav, open) {
    const button = nav.querySelector('.w-nav-button');
    const menus = nav.querySelectorAll('.w-nav-menu');
    if (!button) return;

    button.setAttribute('aria-expanded', String(open));
    menus.forEach((menu) => menu.classList.toggle('is-open', open));
  }

  navs.forEach((nav, index) => {
    const button = nav.querySelector('.w-nav-button');
    if (!button) return;

    nav.querySelectorAll('.w-nav-menu').forEach((menu, menuIndex) => {
      menu.id ||= `site-navigation-${index + 1}-${menuIndex + 1}`;
    });
    button.setAttribute(
      'aria-controls',
      [...nav.querySelectorAll('.w-nav-menu')].map((menu) => menu.id).join(' '),
    );

    button.addEventListener('click', () => {
      setOpen(nav, button.getAttribute('aria-expanded') !== 'true');
    });

    button.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        button.click();
      }
    });

    nav.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setOpen(nav, false);
        button.focus();
      }
    });
  });

  document.addEventListener('click', (event) => {
    navs.forEach((nav) => {
      if (!nav.contains(event.target)) setOpen(nav, false);
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 991) navs.forEach((nav) => setOpen(nav, false));
  });
})();
