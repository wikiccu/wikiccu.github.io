// The page and navigation work without JavaScript; this only adds scroll context.
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

if ('IntersectionObserver' in window) {
  const links = document.querySelectorAll('.activity-rail nav a');
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of links) {
        if (link.hash === `#${entry.target.id}`) {
          link.setAttribute('aria-current', 'location');
        } else {
          link.removeAttribute('aria-current');
        }
      }
    }
  }, { rootMargin: '-10% 0px -65% 0px' });
  document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
}
