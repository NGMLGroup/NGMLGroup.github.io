(function () {
  function getPreferredTheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function setThemeEffective(theme) {
    document.documentElement.dataset.themeEffective = theme;

    var toggle = document.getElementById('theme-toggle');
    if (toggle) {
      var next = theme === 'dark' ? 'light' : 'dark';
      toggle.setAttribute('aria-label', 'Switch to ' + next + ' mode');
      toggle.setAttribute('title', 'Switch to ' + next + ' mode');
    }
  }

  function initThemeToggle() {
    var storedTheme = document.documentElement.dataset.theme;
    var effectiveTheme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : getPreferredTheme();

    setThemeEffective(effectiveTheme);

    var prefersDark = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
    if (prefersDark && !storedTheme) {
      prefersDark.addEventListener('change', function () {
        setThemeEffective(getPreferredTheme());
      });
    }

    var toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', function () {
      var current = document.documentElement.dataset.themeEffective || getPreferredTheme();
      var next = current === 'dark' ? 'light' : 'dark';

      document.documentElement.dataset.theme = next;
      document.documentElement.dataset.themeEffective = next;

      try {
        localStorage.setItem('theme', next);
      } catch (e) {
        // no-op
      }

      setThemeEffective(next);
    });
  }

  function initMobileNavCloseOnClick() {
    var navTrigger = document.getElementById('nav-trigger');
    if (!navTrigger) return;

    document.querySelectorAll('.site-nav .page-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navTrigger.checked = false;
      });
    });
  }

  function initNewsCarousel() {
    var newsList = document.querySelector('.news-list');
    if (!newsList) return;

    var items = Array.prototype.slice.call(newsList.querySelectorAll('li'));
    if (items.length === 0) return;

    var currentIndex = 0;

    function setActive(index) {
      items.forEach(function (item, i) {
        item.classList.toggle('is-active', i === index);
      });

      // Keep layout stable while swapping items
      window.requestAnimationFrame(function () {
        var active = items[index];
        if (active) {
          newsList.style.minHeight = active.offsetHeight + 'px';
        }
      });
    }

    setActive(0);

    if (items.length < 2) return;

    window.setInterval(function () {
      currentIndex = (currentIndex + 1) % items.length;
      setActive(currentIndex);
    }, 6000);

    window.addEventListener('resize', function () {
      setActive(currentIndex);
    });
  }

  function initBlogToggle() {
    var btnBlog = document.getElementById('btn-blog');
    var btnSocial = document.getElementById('btn-social');
    var sectionBlog = document.getElementById('section-blog');
    var sectionSocial = document.getElementById('section-social');

    if (!btnBlog || !btnSocial || !sectionBlog || !sectionSocial) return;

    function show(section) {
      var isBlog = section === 'blog';
      sectionBlog.hidden = !isBlog;
      sectionSocial.hidden = isBlog;

      btnBlog.classList.toggle('active', isBlog);
      btnSocial.classList.toggle('active', !isBlog);
    }

    btnBlog.addEventListener('click', function () {
      show('blog');
    });

    btnSocial.addEventListener('click', function () {
      show('social');
    });

    // Ensure consistent initial state
    show(btnSocial.classList.contains('active') ? 'social' : 'blog');
  }

  function initBibtexToggle() {
    document.querySelectorAll('[data-bibtex-target]').forEach(function (button) {
      button.addEventListener('click', function (e) {
        e.preventDefault();

        var targetId = button.getAttribute('data-bibtex-target');
        if (!targetId) return;

        var entry = document.getElementById(targetId);
        if (!entry) return;

        entry.classList.toggle('is-open');
      });
    });
  }

  function initRevealAnimations() {
    var candidates = Array.prototype.slice.call(
      document.querySelectorAll('section, .person, .collaborator, .publication, .post-preview, .social-item')
    );

    if (candidates.length === 0) return;

    candidates.forEach(function (el) {
      el.classList.add('reveal');
    });

    function forceVisible() {
      candidates.forEach(function (el) {
        el.classList.add('is-visible');
      });
    }

    if (!('IntersectionObserver' in window)) {
      forceVisible();
      return;
    }

    var observer;
    try {
      observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
    } catch (e) {
      // If anything goes wrong, do not hide content.
      forceVisible();
      return;
    }

    candidates.forEach(function (el) {
      observer.observe(el);
    });

    // Safety net: never leave content hidden.
    window.setTimeout(function () {
      candidates.forEach(function (el) {
        if (!el.classList.contains('is-visible')) {
          el.classList.add('is-visible');
        }
      });
    }, 800);
  }

  document.addEventListener('DOMContentLoaded', function () {
    initThemeToggle();
    initMobileNavCloseOnClick();
    initNewsCarousel();
    initBlogToggle();
    initBibtexToggle();
    initRevealAnimations();
  });
})();
